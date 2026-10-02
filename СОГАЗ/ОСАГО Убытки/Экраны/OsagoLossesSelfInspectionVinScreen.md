---
tags: [osago-losses, screen, self-inspection]
route: OsagoLossesSelfInspectionVinScreen
file: src/modules/OsagoLosses/screens/selfInspection/vinMileage/OsagoLossesSelfInspectionVinScreen.tsx
title: Самоосмотр (2/3)
---
# OsagoLossesSelfInspectionVinScreen

> [!summary] Назначение
> Самоосмотр, шаг 2 из 3: фото **VIN-номера** и **пробега**.

**Параметры:** `{ draftId: string }`

- Откуда: [[OsagoLossesSelfInspectionScreen]]
- Куда: «Продолжить» → [[OsagoLossesSelfInspectionDamageScreen]], назад → шаг 1
- Секции: `vinView`, `mialeageView` (опечатка в ключе API). Минимум **1** фото на секцию.
- API и логика такие же, как в [[OsagoLossesSelfInspectionScreen#Общая логика самоосмотра (`useSelfInspectionPhotos`)]].
- Аналитика: только `…click_button_send_page_self_examination`.
