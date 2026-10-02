---
tags: [osago-losses, screen, form]
route: OsagoLossesVehicleDamageScreen
file: src/modules/OsagoLosses/screens/OsagoLossesVehicleDamageScreen.tsx
title: Ущерб ТС
---
# OsagoLossesVehicleDamageScreen

> [!summary] Назначение
> Самый сложный экран. Пострадавшее **ТС** выбирается из полисов ОСАГО пользователя или добавляется вручную. Здесь же собственник, водитель, способ возмещения (деньги или ремонт на СТОА) и документы. Пишет `stepVehicleDamage`, `stepApplicationSelected.isVehicle`, `stepApplicant.signType`, `claimCaseFileListVehicleDamage`.

**Параметры:** `{ draftId: string; filledRegistrationDocument?: VehicleRegistrationDocumentType }`

## Откуда попадают
- [[OsagoLossesResultantScreen]] (карточка «Ущерб ТС»)
- [[OsagoLossesAddVehicleFormScreen]] → `popTo` (опц. с `filledRegistrationDocument`)

## Куда ведёт

| Условие / действие | Куда |
|---|---|
| Список полисов пуст | [[OsagoLossesAddVehicleScreen]] `{ isForcedTransition: true }` (`navigate` из `useEffect`) |
| Шторка выбора ТС → «Добавить ТС» | [[OsagoLossesAddVehicleScreen]] `{ isForcedTransition: false }` |
| Документ регистрации неполный и VIN-фолбэк не помог | [[OsagoLossesAddVehicleFormScreen]] `{ transport: из формы, returnToVehicleDamageScreen: true }` |
| Сохранить | `goBack` → хаб |
| Крестик | OutFlow BS → `goBack` |

## Выбор ТС: алгоритм (на `useFocusEffect`)
1. Если пришёл `filledRegistrationDocument`: подставить в форму, очистить параметр, выйти.
2. `polices` = `GET claims/polices?type=OSAGO` без `product === 'е-ОСАГО'` + «виртуальный» полис из `damagedVehicle` (`useCreateNewPolicyFromVehicle`), если его ГРЗ нет среди полисов.
3. Начальный полис: совпавший по ГРЗ с черновиком, иначе первый.
4. `customPolicy` → заполнить из `customPolicy*`, проверить документ.
5. Обычный полис → `setValue('policyNumber')` → `GET info/transport/{policyId}`:
   - `drivers` → список водителей для выбора;
   - `owner` → предзаполнение «другого лица»-собственника;
   - ТС → заполнить, если не из черновика;
   - `drivers[0]` → водитель, если в черновике его нет;
   - документ неполный → `POST info/transport { VIN }` → иначе AddVehicleForm.

## Форма (основные блоки)

| Блок | Компонент | Поля |
|---|---|---|
| Текущее ТС | `OsagoLossesCurrentVehicleCard` + BS `OsagoLossesVehicleListBottomSheetContent` | выбор полиса или ТС |
| Собственник | `OsagoLossesOwnerCollapsible` | `ownerOfProperty`: `myself` (`meOwner` из заявителя) / `individual` (`otherOwner`) / `legal_entity` (`organizationOwner`: ИНН, название, адрес) |
| Водитель | `OsagoLossesDriverCollapsible` | `isVehicleNotDriven`, `isDriverSameAsOwner`, `driver` (ФИО, ДР, телефон, ВУ, адрес) |
| Возмещение | `OsagoLossesRefundCard` | `compensationMethods`: `bankDetail` (по умолчанию) / `repair` |
| Документы | `DocumentCardList` | паспорт, ВУ, СТС, ПТС, доверенность, прочее, см. [[09 Документы и UUID]] |

Схема валидации динамическая: `createVehicleDamageFormSchema(isDriverSameAsOwner, isVehicleNotDriven)`.

## Сохранение (async-цепочка)

```
signType = owner === 'legal_entity' ? 'ukep' : profile.oid ? 'goskey' : 'pep'
1. PATCH stepVehicleDamage { policyNumber, damagedVehicle }   ← ошибка: тост, цепочка ПРОДОЛЖАЕТСЯ
2. PATCH stepApplicationSelected { isVehicleApplicationSelected: true }
3. PATCH stepApplicant.signType
4. PATCH stepUploadedDocuments.claimCaseFileListVehicleDamage
5. goBack
```

`transformFormDataToVehicleDamageStep`: собирает `propertyOwnerVehicle` по типу, `driver` (нет, если `isVehicleNotDriven`; копия собственника с `whoDriven:'myself'`, если `isDriverSameAsOwner`). `compensationMethods.vehicleCompensation = [{ method, stoaName:null, address:null, addressObject:null }]`.

## API
`GET drafts/{id}`, `GET polices`, `POST dictionary/values?category=car`, `GET info/transport/{policyId}`, `POST info/transport`, `POST file/upload`, 4 × `PATCH drafts/{id}`, `GET /api/v1/profile`.

## Аналитика
`yy_osago_view_page_damage_auto`, `yy_osago_click_button_save_page_damage_auto`.

## Замечания
- 784 строки, требует декомпозиции.
- 🔴 Ошибка PATCH ТС не прерывает цепочку.
- Хук файлов импортирован под чужим именем `useGetHealthDamageUploadFileLists`.
