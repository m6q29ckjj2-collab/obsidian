---
tags: [osago-losses, screen, self-inspection]
route: OsagoLossesSelfInspectionDamageScreen
file: src/modules/OsagoLosses/screens/selfInspection/vinMileage/damageView/OsagoLossesSelfInspectionDamageScreen.tsx
title: Самоосмотр (3/3)
---
# OsagoLossesSelfInspectionDamageScreen

> [!summary] Назначение
> Самоосмотр, шаг 3 из 3: повреждения **с расстояния**, **вблизи** и **место ДТП** (опционально). Решает, нужны ли банковские реквизиты.

**Параметры:** `{ draftId: string }`

## Откуда / куда
- Откуда: [[OsagoLossesSelfInspectionVinScreen]]
- «Продолжить»:
  - `shouldSkipOsagoLossesBankDetailsScreen(...)` → [[OsagoLossesDocumentSignScreen]]
  - иначе → [[OsagoLossesBankDetailsScreen]]

## Правило пропуска реквизитов
```ts
selected = Redux applicationSelectedOverride ?? draft.stepApplicationSelected
skip = selected.isVehicle && !selected.isProperty && !selected.isLife
       && stepVehicleDamage.damagedVehicle.compensationMethods.vehicleCompensation[0].method === 'repair'
```
Если выбран только ремонт ТС на СТОА, выплаты деньгами нет и реквизиты не нужны.

## Секции
`damageDistanceView` (≥ 2), `damageCloseupView` (≥ 2), `accidentLocationView` (опц.). Логика: [[OsagoLossesSelfInspectionScreen#Общая логика самоосмотра (`useSelfInspectionPhotos`)]].

## API
`GET drafts/{id}`, `POST file/upload`, `PATCH stepPhotoDamage`.
