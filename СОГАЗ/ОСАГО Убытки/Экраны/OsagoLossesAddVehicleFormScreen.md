---
tags: [osago-losses, screen, form]
route: OsagoLossesAddVehicleFormScreen
file: src/modules/OsagoLosses/screens/OsagoLossesAddVehicleFormScreen.tsx
title: Ущерб ТС (данные ТС)
---
# OsagoLossesAddVehicleFormScreen

> [!summary] Назначение
> Ручной ввод или проверка данных ТС (марка, модель, год, ГРЗ, VIN, кузов, шасси, СТС/ПТС/ЭПТС). Сразу сохраняет `stepVehicleDamage.damagedVehicle`.

**Параметры:** `{ draftId: string; transport: TransportType | null; returnToVehicleDamageScreen?: boolean }`

## Откуда попадают
- [[OsagoLossesAddVehicleScreen]] (с найденным или fallback `transport`)
- [[OsagoLossesVehicleDamageScreen]]: неполный документ регистрации (`returnToVehicleDamageScreen: true`)

## Куда ведёт

| Действие | Куда |
|---|---|
| Сохранить | `popTo('OsagoLossesVehicleDamageScreen', { draftId, filledRegistrationDocument? })` |
| Закрыть → подтвердить | `popTo('OsagoLossesResultantScreen')` |

## Форма
`vehicleBrand`, `vehicleModelDoc`, `vehicleProductionYear`, `governmentNumber`, `vinNumber`, `bodyNumber`, `chassisNumber`, `documentTypeIndex` (сегмент СТС/ПТС/ЭПТС), `documentSeriesNumber`, `documentIssueDate`. Схема `addVehicleFormSchema`: дата выдачи ≥ год выпуска, год 1900…текущий.

## API
`PATCH drafts/{id}` → `stepVehicleDamage = { damagedVehicle: { brand, model, vinNumber, bodyNumber, licensePlate, chassisNumber, manufactureYear, isVinNumberNotExists, registrationDocument } }`

## Замечания
- 🟠 PATCH **без** `policyNumber`, `propertyOwnerVehicle`, `driver`, `compensationMethods`. Если бэк заменяет `damagedVehicle` целиком, ранее введённые данные теряются.
- Ошибка PATCH ловится, но `.then` срабатывает и при ошибке (нет `.unwrap()`), поэтому навигация `popTo` выполнится всегда.
- Нет аналитики.
