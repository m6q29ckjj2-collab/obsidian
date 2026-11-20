---
tags: [sogaz, clinics, elreg]
updated: 2026-11-19
source_revision: cd4f9d35b
---

# API СОГАЗ

[[СОГАЗ/Клиники и Элрег/00 Обзор|К оглавлению]]

Все пути в этой заметке относительны `config.BASE_API`. Метод GET, если не указан другой. Источник прямых запросов — [clinicApi.ts](/Users/antonratnov/Desktop/sogaz/sogaz-mobile/src/modules/Clinics/api/clinicApi.ts).

## Все 7 определений запросов Clinics

Несколько определений используют один URL с разным контрактом ответа.

| Определение RTK Query | Путь | Параметры | Ответ и назначение |
|---|---|---|---|
| `getMedonlineProfile` | `/api/v1/medonlineProfile` | Нет | `MedonlineProfile`, пациенты и полисы для записи. `keepUnusedDataFor: 0` |
| `getPolicyClinics` | `/api/v1/policies/{policyId}/clinics` | `directAttachment?: boolean`, `idRegion?: string`, `variant?: FlexbenVariantCode` | `ClinicDTO[]` или null → массив адресных карточек `Clinic[]` |
| `getClinicsWithoutOnlineBooking` | `/api/v1/policies/clinics` | `directAttachment?: boolean`, `idRegion?: string` | Общий каталог, тот же конвертер |
| `getClinicsRegionsWithoutOnlineBooking` | `/api/v1/policies/clinics` | `regionFlag: true` | `ClinicRegionDTO[]` → регионы |
| `getPolicyClinicRegions` | `/api/v1/policies/{policyId}/clinics` | `regionFlag: true` | Регионы каталога по полису |
| `getPolicyClinicFilters` | `/api/v1/policies/{policyId}/clinics/filters` | `idRegion?: string`, `directAttachment?: boolean` | `ClinicFiltersDTO` |
| `getClinicFilters` | `/api/v1/policies/clinics/filters` | `profileId?`, `policies?: string[]`, `idRegion?`, `directAttachment?: boolean`, `regionFlag?: boolean` | `ClinicFiltersDTO`. Общий клинический хук передаёт регион |

Boolean-параметры прямого прикрепления отправляются только при `typeof value === 'boolean'`. `false` является осмысленным параметром и не отбрасывается.

### Реальный порядок использования

`useClinicData` выбирает общий или полисный каталог по `hasOnlineBooking`. Для каталога передаётся `directAttachment: false`. Полисный запрос требует выбранный `policyId`, оба режима ожидают инициализацию региона и применение фильтров для этого региона.

`useClinicFiltersApi` выбирает ручку по переданному `policyId`. Сейчас главный экран передаёт в него `params?.policyId`, а в каталог — `currentPolicyId` из Redux. При выборе полиса внутри сценария контекст этих двух запросов может различаться.

`getPolicyClinics` предоставляет тег `policies` и принудительно перезапрашивает кеш с пустым массивом. Общий каталог отдельный тег здесь не объявляет. Полисные регионы и полисные фильтры предоставляют `policies`.

## Общие зависимости Main API

| Определение | Метод и путь | Использование |
|---|---|---|
| `getHealthServiceOption` | GET `/api/v1/health` или `/api/v1/health/{profileId}` | `bookingIndicator`, `bookingMode`. Необязательный query `nocache=true`. Главный экран Clinics вызывает без profileId |
| `getChildHealthServiceOption` | GET `/api/v1/health/{profileId}` | Доступность сервисов ребёнка в соседних сценариях Здоровья |
| `getProfile` | GET `/api/v1/profile` | Город/адрес профиля для начального региона |
| `getPolicies` | GET `/api/v1/policies` | Каталог вызывает с `active=true`, в сеть уходит `active=1`. Дополнительные аргументы определения `invitroDirectAttachment` и `franchiseEnable` также преобразуются в 0/1, `nocache=true` отправляется при запросе |

## Контракты

### MedonlineProfile

Основной объект содержит `id`, поля имени, `birthDate`, `picture`, `policies`, `children`. Дети имеют тот же тип профиля. Клиентский выбор пациента строится по этим данным. Полис включает `id`, `number`, `type`, даты и активность, а также дополнительные признаки сервисов. Полный фронтовый тип находится в `api/types.ts`.

### ClinicDTO → Clinic

Одна клиника содержит общие данные и массив `addresses`. Конвертер разворачивает адреса в отдельные карточки. Для записи используется `addresses[].medonlineId`, а основной ID клиники и ID адреса сохраняются отдельно. Подробности в [[СОГАЗ/Клиники и Элрег/05 Данные Redux и правила]].

### ClinicFiltersDTO

| Поле | Назначение |
|---|---|
| `onlineBookingFilter` | Онлайн-запись |
| `franchiseFilter` | Франшиза |
| `directAttachmentFilter` | Прямой/непрямой доступ |
| `typeLabFilter` | Анализы/лаборатории |
| `awardsFilter` | Награды |

Это необязательные поля. Код различает отсутствие поля и boolean-значение. При ошибке или ответе без тела хук завершает загрузку с запасными настройками. Отображение фильтра франшизы требует `franchiseFilter === true`.

## Общие зависимости

| Определение | Метод и путь | Параметры / применение |
|---|---|---|
| `getProfile` | GET `/api/v1/profile` | Профиль, в том числе выбор начального региона |
| `getHealthServiceOption` | GET `/api/v1/health` | `nocache?: true`, доступность сервисов и `bookingMode` |
| То же, для профиля | GET `/api/v1/health/{profileId}` | Если передан `profileId`. Главный экран Clinics использует общий вариант |
| `getChildHealthServiceOption` | GET `/api/v1/health/{profileId}` | Возможности ребёнка в соседних экранах Health |
| `getPolicies` | GET `/api/v1/policies` | `active`, `invitroDirectAttachment`, `franchiseEnable` преобразуются из boolean в 0/1, `nocache?: true`. В Clinics вызывается с `active: true` |

Полисы в карточке нужны в том числе для перехода к подключению франшизы. Резервный выбор берёт первый полис, если текущий ID не найден. Это стоит сверить с продуктовой логикой.

## Flexben, соседний контракт каталога

Источник — `src/modules/Health/healthSlice/healthApi.ts`.

| Определение | Метод и путь | Вход |
|---|---|---|
| `getFlexbenRegions` | GET `/api/v1/flexben/{policyId}/regions` | Query `variant=all` |
| `getFlexbendVariants` | GET `/api/v1/flexben/{policyId}/variants` | Полис |
| `getFlexbenOffer` | POST `/api/v1/flexben/{policyId}/offers` | JSON `{region?, clinic?, variant}`. Хук объявлен как query, несмотря на HTTP POST |
| `getFlexbenClinics` | GET `/api/v1/flexben/{policyId}/clinics` | Query `variant`, `region`, повторяемые `treatments[]` |
| `getFlexbenLinksFiles` | GET `/api/v1/flexben/links/files` | Справочные файлы Flexben, соседняя зависимость |

Ответ клиник Flexben содержит `id`, `name`, `address`, `location {lat,lng}`, `bookingIndicator`. Ответ предложений содержит выбранные услуги и ссылку `webview`. Для открытия предложения клиент использует готовую ссылку.

## Фильтры ответа

`ClinicFiltersDTO` содержит необязательные `onlineBookingFilter`, `franchiseFilter`, `directAttachmentFilter`, `typeLabFilter`, `awardsFilter`. Клиент использует присутствие и значение флага для видимости и исходного состояния фильтра. В частности, отсутствующий флаг и явно переданный `false` могут приводить к разному интерфейсу. При 204/неопределённом ответе применяются запасные значения.
