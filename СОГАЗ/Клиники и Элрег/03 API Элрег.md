---
tags: [sogaz, clinics, elreg]
updated: 2026-11-19
source_revision: cd4f9d35b
---

# API Элрег / Medonline

[[СОГАЗ/Клиники и Элрег/00 Обзор|К оглавлению]]

Все 9 определений из `clinicsMedonlineApi` в [clinicApi.ts](/Users/antonratnov/Desktop/sogaz/sogaz-mobile/src/modules/Clinics/api/clinicApi.ts). На web в dev базовый путь `/medonline/`, в остальных режимах `config.MEDONLINE_API`. Пути ниже дописываются к нему.

## Реестр

| Определение | Метод | Путь | Вход / ответ |
|---|---|---|---|
| `medonlineAuth` | POST | `/auth` | `data.policy_id`, пациент и токен в заголовке |
| `getMedonlineSpecializations` | GET | `/specializations` | Общие специальности из `response.data` |
| `getMedonlineClinicSpecializations` | GET | `/clinics/{clinicId}/specializations` | Специальности из `response.data.specializations` |
| `getMedonlineClinicSlots` | GET | `/clinics/{clinicId}/slots` | Необязательный query `data[specialization_id]`, расписание клиники |
| `getMedonlineSpecializationSlots` | GET | `/specializations/{specializationId}/slots` | Расписание специальности по клиникам |
| `getReminderOptions` | GET | `/classifiers/remind_options` | Классификатор напоминаний из `response.data` |
| `setAppointmentRemidOptions` | PUT | `/appointments/{appoitmentId}/remind` | Напоминания. Объявлен и экспортирован, вызовов в остальном `src` не найдено |
| `remakeAppointment` | PATCH | `/appointments/{appointmentId}/remake` | Врач и слот, перенос |
| `bookAppointment` | POST | `/appointments` | Пациент, клиника, врач, слот, полис |

Опечатки `Remid` и `appoitmentId` сохранены в таблице как в коде. Активный интерфейс сохраняет напоминания через Telemed, см. [[СОГАЗ/Клиники и Элрег/04 API Telemed и результаты]].

## Авторизация

```json
{"data":{"policy_id":"<policyId>"}}
```

Запрос использует `Emp-Authorization` с `telemedToken`. Ответ ожидается в форме `data` с пациентом, `polis` и `meta.policy_id`. Среди полей пациента `first_name`, `last_name`, `middle_name`, `birthdate`, `email`, `phone`. `polis` содержит ID, номер и даты.

`transformResponse` читает заголовок `el-reg-access-token`, добавляет `elregToken` к результату. Redux сохраняет токен и данные для записи. Последующие запросы используют заголовок `EL-REG-ACCESS-TOKEN`.

Для браузерного cross-origin запроса сервер должен разрешать чтение этого заголовка через CORS, если оно требуется выбранной схемой развёртывания. Это условие браузера, фактическая конфигурация сервера здесь не проверялась.

## Специальности

DTO включает `id`, `title`, `description`, `additional_info`, `age_group`, `icon_slug`, `is_checkup`, `priority`, `available_limit`, данные франшизы. Конвертер переименовывает `title` в `name`. `available_limit: null` сохраняется, отсутствующее значение заменяется на `-1`.

Клиент поддерживает поиск по списку. Набор доступных специальностей определяется текущей авторизацией Элрега, ID полиса в сам GET не включён.

## Расписание

Клинический ответ содержит `data[]` с `date`, `clinic`, `specialization`. Ответ по специальности содержит `date`, `clinics`, `specialization`. Оба нормализуются в единый вид с массивом `clinics`.

Внутри клиник находятся врачи и слоты. ФИО врача преобразуется в отображаемое имя, поля слота `start_date/end_date` — в `startDate/endDate`. Пустые врачи и даты без клиник отбрасываются конвертерами.

Запросы не передают выбранный день, поисковую строку или диапазон времени. Эти действия применяются к уже полученному расписанию на клиенте. На экране выбранной клиники сейчас могут выполняться оба запроса расписания, хотя отображается клинический результат.

## Создание записи

```json
{
  "data": {
    "phone_number": "<phone>",
    "email": "<email>",
    "birthday": "<birthday>",
    "first_name": "<firstName>",
    "last_name": "<lastName>",
    "middle_name": "<middleName>",
    "clinic_id": "<medonlineClinicId>",
    "doctor_id": "<doctorId>",
    "schedule_id": "<slotId>",
    "slot_id": "<slotId>",
    "policy_number": "<policyNumber>"
  }
}
```

`schedule_id` и `slot_id` заполняются одним `slotId`. Данные пациента берутся из результата `/auth`, клиника, врач и слот — из выбора в Redux. Возвращаемое значение типизировано как `void`, отдельный ID новой записи в интерфейсе успеха не используется.

## Перенос

```json
{"data":{"doctor_id":"<doctorId>","slot_id":"<slotId>"}}
```

ID существующей записи входит в URL. Контекст полиса восстанавливается перед показом расписания. Тип ответа `void`.

## Напоминания

Классификатор возвращает `id`, `human_name`, `priority`, `remind_interval` в секундах. Тело неиспользуемого в текущем UI setter Medonline имеет форму

```json
{"data":{"remind_options":[{"id":"<reminderId>"}]}}
```

## Кеш и ошибки

Все читающие запросы Medonline в этом реестре предоставляют тег `medonline`, авторизация его инвалидирует. Setter напоминаний не объявляет инвалидацию.

Создание и перенос в `onQueryStarted` дожидаются завершения запроса и инвалидируют тег `telemed` в другом API как после успеха, так и после ошибки. При сетевом сбое сервер мог выполнить операцию, поэтому перечитывание событий помогает выяснить результат. Из кода нельзя заключить, что любая ошибка означает созданную запись.

В шторке любой HTTP 422 обновляет расписание и сбрасывает выбранный слот. Сетевые ошибки и таймаут имеют отдельный текст. Прочие ошибки показывают сообщение через общий helper. Таймаут шлюза 120 секунд. Специального механизма продления токена Элрега в этом шлюзе нет.
