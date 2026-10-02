---
tags: [osago-losses, screen, hub]
route: OsagoLossesResultantScreen
file: src/modules/OsagoLosses/screens/OsagoLossesResultantScreen.tsx
title: Страховой случай ОСАГО
---
# OsagoLossesResultantScreen (хаб)

> [!summary] Назначение
> **Центральный экран заявления.** Показывает сводку по всем шагам черновика, открывает их на редактирование и запускает финальную часть (самоосмотр, реквизиты, подписание).

**Параметры:** `{ draftId: string }`

## Откуда попадают
- [[OsagoLossesCheckProfileDataScreen]] (`replace`)
- [[OsagoLossesInitialScreen]]: черновик уже со `stepApplicant` (`replace` + шторка)
- Возврат с экранов шагов (`goBack`, `navigate`, `popTo`)
- [[OsagoLossesAddVehicleScreen]] при `isForcedTransition` (`pop(2)`)
- [[OsagoLossesAddVehicleFormScreen]] → закрыть форму (`popTo`)

## Карточки и переходы

| Карточка | Данные (из черновика) | Ошибка «Недостаточно данных», если нет | Тап → |
|---|---|---|---|
| Виновник ДТП | `stepSecondParticipant.secondParticipant`: ФИО + документ | `stepSecondParticipant` | [[OsagoLossesSecondParticipantScreen]] |
| Данные о ДТП | `stepAccidentDetails.accident`: дата, время, адрес | `stepAccidentDetails` | [[OsagoLossesIncidentDataScreen]] |
| Ущерб ТС | марка, модель, ГРЗ, документ + собственник + водитель | `stepVehicleDamage` | [[OsagoLossesVehicleDamageScreen]] |
| Ущерб имуществу *(флаг `osago_losses_property_damage`)*, свитч | собственник + список имущества | `stepPropertyDamage` | [[OsagoLossesPropertyDamageScreen]] |
| Вред жизни и здоровью *(⚠️ тоже флаг property)*, свитч | ФИО + тип вреда | `stepHealthDamage` | [[OsagoLossesHealthDamageScreen]] |

**«Продолжить»** (disabled, пока нет виновника, ДТП и хотя бы одного ущерба):
1. `dispatch(setApplicationSelectedOverride({ isVehicle, isProperty, isLife }))` — значения свитчей.
2. `isVehicleApplicationSelected` → [[OsagoLossesSelfInspectionScreen]], иначе → [[OsagoLossesBankDetailsScreen]].

**Назад (TopBar)** → OutFlow BS «Закрыть заявку? Мы сохраним введённые данные» → `goBack` (выход из модуля).

Внутри экрана смонтирован [[OsagoLossesRouterBottomSheet]].

## API
- `GET drafts/{id}`: перезапрашивается автоматически после любого PATCH (инвалидация тега)
- `GET claims/polices?type=OSAGO`: «дергаем, чтобы сформировать кеш» для VehicleDamage

## Состояние
- Свитчи: `useState`, инициализируются из `stepApplicationSelected` (`isVehicle ?? true`, остальные `?? false`) и синхронизируются при изменении шага. **На бэк не отправляются.**

## Аналитика
`yy_osago_view_page_all_accident_data`, `yy_osago_click_button_next_page_all_accident_data`.

## Замечания
- 🔴 Флаг здоровья перепутан, см. [[08 Тех долг и странности]].
- У юрлица в карточке имущества показывается документ вместо ИНН (FIXME).
- Android back перехватывает RouterBottomSheet, см. [[06 Ошибки и edge-кейсы]].
