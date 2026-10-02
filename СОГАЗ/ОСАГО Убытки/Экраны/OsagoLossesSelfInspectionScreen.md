---
tags: [osago-losses, screen, self-inspection]
route: OsagoLossesSelfInspectionScreen
file: src/modules/OsagoLosses/screens/selfInspection/OsagoLossesSelfInspectionScreen.tsx
title: Проведение самоосмотра (1/3)
---
# OsagoLossesSelfInspectionScreen

> [!summary] Назначение
> Самоосмотр, шаг 1 из 3: фото ТС **спереди** и **сзади**.

**Параметры:** `{ draftId: string }`

## Откуда / куда
- [[OsagoLossesResultantScreen]] → «Продолжить», если выбран ущерб ТС
- «Продолжить» → [[OsagoLossesSelfInspectionVinScreen]]
- Назад → хаб

## Общая логика самоосмотра (`useSelfInspectionPhotos`)
Используется на всех трёх экранах, отличаются только ключи секций.

- Секции = ключи `stepPhotoDamage`: здесь `frontView`, `backView`.
- Фото: камера или файл. Не больше 5 на секцию, ≤ 10 МБ суммарно на секцию, JPG/JPEG/PDF.
- Минимум **2** фото на секцию (на Vin-экране 1). Иначе инлайн-ошибка или тост.
- Предзаполнение из `GET drafts/{id}.steps.stepPhotoDamage`. Серверные фото показываются с auth-заголовками.
- **«Продолжить»:** если ничего не изменилось, сразу переход. Иначе:
  1. `POST api/storefront/file/upload` для каждого нового фото (`categoryCode = 6906e0a8-… «Самоосмотр ТС»`), параллельно;
  2. `PATCH drafts/{id}` → `stepPhotoDamage: { [key]: { photoList } }` (`changeOsagoStepDraft`);
  3. `refetch` черновика → переход.
- Ошибка: тост «Не удалось загрузить фото».
- Есть `onDebugClear` (очистка `stepPhotoDamage: {}`).

## Аналитика
`yy_osago_view_page_self_examination` (focus), `yy_osago_click_button_send_page_self_examination` (на всех трёх экранах).

Следующие шаги: [[OsagoLossesSelfInspectionVinScreen]] → [[OsagoLossesSelfInspectionDamageScreen]].
