---
tags: [sogaz, clinics, elreg]
updated: 2026-11-19
source_revision: cd4f9d35b
---

# API Telemed и результаты

[[СОГАЗ/Клиники и Элрег/00 Обзор|К оглавлению]]

База `config.TELEMED_API`, на web в dev `/telemed-api/`. Источник — [telemedApi.ts](/Users/antonratnov/Desktop/sogaz/sogaz-mobile/src/modules/Telemed/telemedSlice/telemedApi.ts).

## Лента и управление записью

| Определение | Метод и путь | Вход / ответ |
|---|---|---|
| `getTelemedProfile` | GET `/profile` | Текущий профиль из `response.data` |
| `getPatient` | GET `/patients/{patientId}` | Данные конкретного пациента, соседняя зависимость выбора профиля |
| `getUpcomingTimelineEvents` | GET `/timeline/upcoming` | Query `data[patient_id]`, массив событий `response.data` |
| `getCompletedTimelineEvents` | GET `/timeline/completed` | Query `data[patient_id]`, `data[external_providers][]=invitro`, `helix`, `kdl`. Общая завершённая лента, не только клиники |
| `getUpcomingTimelineEvent` | GET `/timeline/upcoming/{id}` | Query `data[patient_id]`, `data[type]`, если значения переданы. Одно событие |
| `cancelClinicAppointment` | PUT `/offline_appointments/{appointmentId}/cancel` | JSON `data.patient_id`, ответ void |
| `updateOfflineAppointmentRemindOptions` | PUT `/offline_appointments/{appointmentId}/remind` | JSON `data.patient_id`, `data.remind_options: [{id}]`, ответ void |
| `updateUpcomingEventRemindOptions` | PUT `/timeline/upcoming/{eventId}` | JSON `data.patient_id`, `data.type`, `data.remind_options_ids`. Общий путь других типов событий, для обычной офлайн-записи UI выбирает отдельную ручку выше |

Все эти чтения используют `telemed`, мутации отмены/напоминаний его инвалидируют.

## Детали записи

`AppointmentDetailsScreen` для офлайн-записи использует `getUpcomingTimelineEvent`. Из `event.data` берутся `clinic.id`, `specialization.id/name`, `patient.policy.id`, `doctor.id`. Именно эти данные нужны для переноса.

Пациент в запросах берётся из выбранного Telemed-профиля `selectSelectedTelemedProfile`. Нельзя автоматически подменять его ID основным ID профиля ЛК или `currentPatientLkId`.

Отмена поддерживает `offline_appointment` и `checkup_offline_appointment`. При отсутствии `patientId` helper возвращает ошибку, запрос не отправляется. Причина отмены существует в общем helper, но офлайн-ручка передаёт только `patient_id`.

```json
{"data":{"patient_id":"<telemedPatientId>"}}
```

Настройки напоминаний для обычного `offline_appointment` читаются из Medonline `/classifiers/remind_options`, а сохраняются здесь

```json
{"data":{"patient_id":"<telemedPatientId>","remind_options":[{"id":"<reminderId>"}]}}
```

Это межсервисная зависимость ID классификатора и текущей авторизации Элрега.

## Завершённые приёмы и заключения

| Определение | Метод и путь | Когда используется |
|---|---|---|
| `getConclusions` | GET `/v2/patients/{patientId}/completed_appointments` | Список заключений медицинской карты |
| `getOfflineAppointmentDetails` | GET `/offline_appointment_results/{appointmentId}` | Результат офлайн-приёма. Аргумент назван appointmentId, при переходе может использоваться ID результата |
| `saveOfflineClinicAppointment` | POST `/offline_appointment_results` | Добавление файлов и комментария к завершённому офлайн-приёму |
| `getExternalConclusionDetails` | GET `/external_extended_appointments/{conclusionId}` | Соседняя ветка внешнего заключения в общем экране |
| `getClinicConclusionDetails` | GET `/mis_providers/{providerId}/consultations/{appointmentId}` | Соседняя ветка результата из MIS |

Чтения берут `response.data`. Создание результата инвалидирует `telemed` и возвращает `ExternalConclusionDetails` из `response.data`.

### Добавление заключения

`AddConclusionScreen` получает завершённую ленту текущего Telemed-пациента и находит событие по `params.id`. Форма показывает информацию о визите, принимает файлы и комментарий. На web выбор файла вызывается сразу, в полной нативке показывается выбор документов, галереи или камеры.

POST отправляется как FormData с `data[patient_id]`, `data[offline_appointment_id]`, необязательным `data[comment]` и файлами через общий `appendFilesToFormData`. Формат частей файлов определяется helper, а не Clinics API.

### Просмотр документов

Кнопка просмотра рецепта открывает готовый `prescriptionUrl`, если он есть. Иначе переход в `ConclusionDetailsScreen` передаёт `resultId ?? eventId`, тип заключения и при необходимости MIS provider ID.

В общем экране заключения используются разные запросы по типу. Web открывает файл по `file_url`. Полная нативка отправляет изображения в `ImageViewerScreen`, прочие документы в `DocumentWebViewScreen`.

## Границы

`getAppointmentDetails`, расписание онлайн-врача и `moveAppointment` в том же экране относятся к телемедицинским консультациям. Перенос Элрега выполняется через `remakeAppointment` из [[СОГАЗ/Клиники и Элрег/03 API Элрег]]. Анализы и результаты лабораторий тоже живут в общей ленте, но имеют отдельные контракты.
