---
tags: [osago-losses, screen, form]
route: OsagoLossesAddVehicleScreen
file: src/modules/OsagoLosses/screens/OsagoLossesAddVehicleScreen.tsx
title: Ущерб ТС (добавление)
---
# OsagoLossesAddVehicleScreen

> [!summary] Назначение
> Поиск пострадавшего ТС по идентификатору, если его нет среди полисов пользователя.

**Параметры:** `{ draftId: string; isForcedTransition: boolean }`

## Откуда попадают
- [[OsagoLossesVehicleDamageScreen]]: полисов нет → `isForcedTransition: true`
- [[OsagoLossesVehicleDamageScreen]] → шторка ТС → «Добавить ТС» → `isForcedTransition: false`

## Куда ведёт

| Действие | Куда |
|---|---|
| «Найти» → ТС найдено | [[OsagoLossesAddVehicleFormScreen]] `{ transport }` |
| «Найти» → не найдено или ошибка | тост «Не нашли данные ТС» → [[OsagoLossesAddVehicleFormScreen]] `{ transport: fallback }` (заполнен только ГРЗ или VIN) |
| Назад при `isForcedTransition` | `pop(2)` → [[OsagoLossesResultantScreen]] (минуя пустой VehicleDamage) |
| Назад иначе | `goBack` → VehicleDamage |

## Форма
- `vehicleIdType`: `GRZ` (по умолчанию) / `VIN` / `BODY_NUMBER` / `CHASSIS_NUMBER`. Смена типа очищает значение.
- `vehicleId`: maxLength по типу (VIN 17, кузов и шасси 25). Схема `addVehicleInitialFormSchema`.

## API
`POST api/storefront/claims/info/transport { queryType, query (без пробелов) }`

## Замечания
Нет аналитики.
