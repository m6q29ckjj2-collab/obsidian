---
tags: [sogaz, clinics, elreg]
updated: 2026-11-19
source_revision: cd4f9d35b
---

# Данные, Redux и правила

[[СОГАЗ/Клиники и Элрег/00 Обзор|К оглавлению]]

## Идентификаторы

| Значение | Откуда | Где используется |
|---|---|---|
| `policyId` | Полисы MedonlineProfile или параметр перехода | Каталог по полису, `/auth`, навигация |
| `policyNumber` | `/auth` → `data.polis.number` | Создание записи |
| ID пациента ЛК | MedonlineProfile | Выбор пациента, `currentPatientLkId` |
| ID пациента Telemed | Выбранный Telemed-профиль | Лента, отмена, напоминания, заключение |
| `lkId` клиники | Корневой `ClinicDTO.id` | Идентичность клиники основного каталога |
| `addressId` | `ClinicDTO.addresses[].id` | Адрес основного каталога |
| `Clinic.id` | `addresses[].medonlineId` | Специальности и запись в Medonline |
| `uniqueId` | `nanoid()` в конвертере | Локальные карточки/маркеры. Меняется при повторном преобразовании |
| `doctor.id` | Расписание | Выбор и создание/перенос |
| `slot.id` | Расписание | POST или PATCH записи |
| ID события / записи | Лента Telemed | Детали, отмена, перенос |
| `resultId` | Завершённое событие | Просмотр заключения |

Нельзя считать все поля с названием `id` взаимозаменяемыми. Особенно важны клиника ЛК, адрес и `medonlineId`, а также пациент ЛК и Telemed.

## Redux clinic

Источник `store/clinicSlice.ts`, типы `store/types.ts`.

| Поля | Смысл |
|---|---|
| `policyId`, `currentPatientLkId` | Контекст выбранного пациента и полиса |
| `elregToken` | Токен авторизации Medonline |
| `patient`, `policyNumber` | Данные для POST, заполняются при успешном `/auth` |
| `specialization`, `clinic`, `doctor` | Текущий выбор |
| `day`, `slot` | День и слот |
| `submitState` | `slotSelection` или `submitDialog` |
| `filters` | Наборы фильтров, в том числе `clinics` и варианты Flexben |
| `medicalAidTypes`, `flexbenAidTypes` | Справочники видов помощи и услуг |

`setPolicy` очищает токен при изменении ID. `chooseDay` меняет только день, `chooseDoctor` только врача, `chooseSlot` только слот. Связанные поля автоматически в этих действиях не сбрасываются. `resetClinics` возвращает начальное состояние.

Успешный `/auth` сохраняет пациента, номер полиса и токен через matcher. Справочники видов помощи наполняются из каталога и вариантов Flexben.

## Redux clinicUI

`appointmentStage` принимает `loading`, `patientPicker`, `clinics`. После успешного и после неуспешного `/auth` matcher переводит этап в `clinics`. Поэтому этап `clinics` сам по себе не доказывает успешную авторизацию.

Проверка `selectIsMedonlineAuthorized` определяет авторизацию только по наличию `elregToken`.

## Фильтры

Начальное состояние

```json
{"online":false,"analyzes":false,"franchise":false,"awards":false,"medicalAidTypes":[],"undirectAttachment":null}
```

Настройки API могут заменить начальные значения. Сервер выбирает каталог по региону/полису/прикреплению, далее работает клиентская фильтрация.

| Фильтр | Клиентское правило |
|---|---|
| `online` | Требуется `onlineBookingFlag` |
| `awards` | Хотя бы одна награда с `visible` |
| `franchise` | Требуется `franchiseFlag` |
| `analyzes=true` | Лаборатория `typeLab` либо вид помощи с точным названием «Амбулаторно-поликлиническое обслуживание» |
| `analyzes=true`, `undirectAttachment=false` | Исключает `labDirectAttachment === false` |
| `analyzes=false` | Исключает `typeLab` |
| `analyzes=false`, `undirectAttachment=false` | Требует хотя бы один вид помощи с `directAttachmentFlag === true` |
| Выбранные `medicalAidTypes` | В клинике должны присутствовать все выбранные ID |

`undirectAttachment` имеет три значения. Действие переключения меняет `true ↔ null`, а API может инициализировать `false`. Это нужно учитывать при обсуждении единого контракта фильтров.

## Доступность записи

`getClinicAvailability` вычисляет

- `canBookOnline = onlineBookingFlag && (bookingAvailable ?? true) && Boolean(id)`.
- `isBookingSuspended = onlineBookingFlag && bookingAvailable === false`.
- `canCancelOnlineBooking = onlineBookingFlag && (cancelBookAvailable ?? true)`.

Виды помощи дополнительно имеют `available`, `beginDate`, прямое прикрепление, франшизу и услуги. Недоступность или будущая дата могут порождать информационное предупреждение. Для `omsFlag` часть предупреждений подавляется.

`canBookOnline` не включает доступность видов помощи в своё выражение. Необходимость блокировать запись при таких условиях должна быть согласована с продуктом и API.

## География и время

Координаты регионов проверяются и преобразуются, код региона приводится к строке. Регион `00` исключается из выбора. При отсутствии пригодных регионов необходимо отдельно проверить завершение инициализации.

Medonline-адрес содержит город, координаты, метро и `offset`. Заголовок `X-TimeZone` берётся с устройства. Для Элрега 2.0 нужно явно определить, в какой зоне отображается время визита в другом регионе.

## Клиника и адрес

`ClinicDTO` содержит имя, массив `addresses`, расписание, телефоны, виды помощи, сведения о франшизе, рейтинг и признаки доступности. Конвертер разворачивает массив адресов в отдельные карточки, адресные значения перекрывают общие значения клиники.

Адрес включает `id`, `name`, `address`, `location`, `primary`, `medonlineId`, `onlineBookingFlag`, `bookingAvailable`, `cancelBookAvailable`, `evaluateUrl`, `digitalDmsLetterGuaranteeAvailable`, `awards`.

Основные общие признаки — `qualityFlag`, `franchiseFlag`, `franchiseEnable`, `labFlow`, `labDirectAttachment`, `onlineBookingFlag`, `bookingAvailable`, `cancelBookAvailable`, `onlineBooking`, `omsFlag`, `typeLab`.

`medicalAidTypes[]` включает `id`, `name`, `beginDate`, `available`, `franchise`, `directAttachmentFlag`, `services`, `franchiseInfo`, `franchiseText`. Услуги содержат ID/имя группы, имя услуги и проценты франшизы.

## Правила клиентской фильтрации

| Фильтр | Проверка |
|---|---|
| online | `onlineBookingFlag` |
| awards | Есть видимая награда |
| franchise | `franchiseFlag` |
| analyzes | Лаборатория `typeLab` либо вид помощи с точным именем «Амбулаторно-поликлиническое обслуживание» |
| analyzes и undirectAttachment=false | Дополнительно исключаются записи с `labDirectAttachment=false` |
| Без analyzes | Исключаются `typeLab`, при undirectAttachment=false требуется вид помощи с directAttachmentFlag=true |
| medicalAidTypes | Должны присутствовать все выбранные виды помощи, используется every |

Переключатель `undirectAttachment` меняет значение между `true` и `null`. Исходный `false` при этом может приходить из настроек фильтров. Имя поля не стоит трактовать как обычный boolean без чтения этих правил.

## Доступность и предупреждения

`canBookOnline = onlineBookingFlag && (bookingAvailable ?? true) && наличие id`.

`canCancelOnlineBooking = onlineBookingFlag && (cancelBookAvailable ?? true)`.

`isBookingSuspended` означает включённый onlineBookingFlag при bookingAvailable=false. Недоступные виды помощи и будущие beginDate рассчитываются отдельно от возможности записи. Для omsFlag подавляются соответствующие предупреждения по видам помощи. Если недоступны все виды помощи, показывается общее предупреждение, если часть — частичное. Для будущих дат вычисляется ближайшая дата.
