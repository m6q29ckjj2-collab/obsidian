---
tags: [osago-losses, reference]
---
# Документы и UUID категорий

Источник: `src/modules/OsagoLosses/constants.ts`. UUID — это `categoryCode` для `POST api/storefront/file/upload` и `docType` в `identityDocument`.

> [!warning] Два разных справочника
> `UuidDocumentType` и `UUID_TO_DOCUMENT_LABEL` описывают **тип документа личности** (`identityDocument.docType`). `DOCUMENT_UUID_BY_NAME` описывает **категории загружаемых файлов**. Паспорт в них разный: `68a53bdc…` против `495b0cb8…`. ВУ тоже разное.

## Типы документов личности (`identityDocument.docType`)

| UUID | Документ |
|---|---|
| `68a53bdc-7e31-11db-8708-003048800b16` | Паспорт (`PASSPORT_UUID`) |
| `495b0cb7-d924-11e9-82ae-5cb90192efd5` | Водительское удостоверение (`DRIVER_LICENSE_UUID`) |
| `de1d6ed3-156d-11ec-8379-5cb90192efd5` | Доверенность |
| `57c3b613-2d92-11de-8d15-0019bbcb6aba` | ПТС |
| `c9d5aa73-1f51-11de-91a1-001b7835a1c0` | СТС |
| `8496e19f-d924-11e9-82ae-5cb90192efd5` | Европротокол |
| `4362bee6-d924-11e9-82ae-5cb90192efd5` | Заявление |
| `665ce978-ca83-4056-bc3b-63646d55b346` | Иные документы |
| `6906e0a8-6fc6-406d-9673-90f77537a6a3` | Самоосмотр ТС (используется как `categoryCode` фото) |
| `4f581f2f-d924-11e9-82ae-5cb90192efd5` | Другие документы |

## Категории файлов: что и где грузится

| Экран | Поле формы | Ключ | UUID | Ключ в `stepUploadedDocuments` | Обязательно |
|---|---|---|---|---|---|
| IncidentData | `GIBDDDecisionFiles` | `GIBDD_DECISION` | `4362be97-d924-11e9-82ae-5cb90192efd5` | `claimCaseFileListAccidentDetails` | при `GIBDD` |
| IncidentData | `GIBDDProtocolFiles` | `GIBDD_PROTOCOL` | `5ce0fb64-332e-11df-8cbb-001f290776b6` | `…AccidentDetails` | нет |
| IncidentData | `euroProtocolFrontFiles` | `EUROPROTOCOL_FRONT` | `4362bee8-d924-11e9-82ae-5cb90192efd5` | `…AccidentDetails` | при `euroProtocol` |
| IncidentData | `euroProtocolBackFiles` | `EUROPROTOCOL_BACK` | `4362bee9-d924-11e9-82ae-5cb90192efd5` | `…AccidentDetails` | при `euroProtocol` |
| VehicleDamage | `passportUploadFiles` | `PASSPORT_RF` | `495b0cb8-d924-11e9-82ae-5cb90192efd5` | `claimCaseFileListVehicleDamage` | да |
| VehicleDamage | `driverLicenceUploadFiles` | `DRIVER_LICENSE` | `c7f3e8c5-156a-11ec-8379-5cb90192efd5` | `…VehicleDamage` | если ТС управлялось |
| VehicleDamage | `CTCUploadFiles` | `CTC` | `495b0cc6-d924-11e9-82ae-5cb90192efd5` | `…VehicleDamage` | если СТС |
| VehicleDamage | `PTCUploadFiles` | `PTS` | `495b0cc4-d924-11e9-82ae-5cb90192efd5` | `…VehicleDamage` | если ПТС/ЭПТС |
| VehicleDamage | `procurationUploadFiles` | `POWER_OF_ATTORNEY` | `de1d6ed3-156d-11ec-8379-5cb90192efd5` | `…VehicleDamage` | если собственник не «я» |
| VehicleDamage | `otherUploadFiles` | `OTHER_EXPENSES_DOCS` | `495b0d0e-d924-11e9-82ae-5cb90192efd5` | `…VehicleDamage` | нет |
| PropertyDamage | `files` | `OTHER_EXPENSES_DOCS` | `495b0d0e-…` | `claimCaseFileListPropertyDamage` | — |
| HealthDamage (смерть) | `deathCertificateUploadFiles` | `DEATH_CERTIFICATE` | `495b0cb4-d924-11e9-82ae-5cb90192efd5` | `claimCaseFileListHealthDamage` | — |
| HealthDamage (смерть) | `deathReasonCertificateUploadFiles` | `DEATH_CERTIFICATE_REASON` | `10242c65-156b-11ec-8379-5cb90192efd5` | `…HealthDamage` | — |
| HealthDamage (смерть) | `otherUploadFiles` | `OTHER_EXPENSES_DOCS` | `495b0d0e-…` | `…HealthDamage` | — |
| HealthDamage (здоровье) | `medicalPaymentProofUploadFiles` | `MEDICAL_PAYMENT_SERVICES` | `a9715aac-84fd-11ec-9e1f-0894ef5d42f9` | `…HealthDamage` | — |
| HealthDamage (здоровье) | `medicalConclusionUploadFiles` | `MEDICAL_EXAM_REPORT` | `4362bec8-d924-11e9-82ae-5cb90192efd5` | `…HealthDamage` | — |
| DocumentSign (УКЭП) | `vehicle/property/heathDamageCertificates` | `PRINT_FORM_CERTIFICATE` + `type` | `4362bee6-d924-11e9-82ae-5cb90192efd5` | `claimCaseFileListPrintFormCertificates` | при `ukep` |
| Самоосмотр | 7 ракурсов | `PHOTO_DAMAGE_CATEGORY_CODE` | `6906e0a8-6fc6-406d-9673-90f77537a6a3` | → `stepPhotoDamage.{view}.photoList` | см. правила |

В `DOCUMENT_UUID_BY_NAME` объявлены, но не используются: `ADDITIONAL_DOCUMENTS`, `MEDICAL_CERTIFICATE`, `MSA_CERTIFICATE`, `EPICRISIS`, `BIRTH_CERTIFICATE`, `DAMAGE_ASSESSMENT_DOC`, `PAYMENT_RECEIPT`, `MARRIAGE_/DIVORCE_CERTIFICATE`, `INCOME_CERTIFICATE`, `FAMILY_COMPOSITION_CERTIFICATE`, `SOCIAL_SUPPORT_CERTIFICATE`, `GUARDIANSHIP_/GUARDIAN_CONSENT`, `BURIAL_EXPENSES_DOC`, `MEDICAL_DEATH_CERTIFICATE`. Это задел под вред здоровью (TODO «нужны UUID документов»).

## Документ регистрации ТС

| `docType` | Сегмент (`SEGMENT_INDEX_TO_DOCUMENT_ID`) | Подпись |
|---|---|---|
| `sts` | 0 | СТС |
| `pts` | 1 | ПТС |
| `epts` | 2 | ЭПТС (номер 15 цифр) |

## Идентификаторы ТС для поиска (`queryType`)

`GRZ` (госномер), `VIN` (17 символов), `BODY_NUMBER`, `CHASSIS_NUMBER` (3–25 символов).
