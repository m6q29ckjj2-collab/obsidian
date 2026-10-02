---
tags: [osago-losses, screen, final]
route: OsagoLossesSuccessScreen
file: src/modules/OsagoLosses/screens/OsagoLossesSuccessScreen.tsx
title: Заявление отправлено!
---
# OsagoLossesSuccessScreen

> [!summary] Назначение
> Успешная отправка заявления. Показывает анимацию, номер заявки (`extDocNumber`, можно скопировать) и ведёт к убытку.

**Параметры:** `{ claimId: string; extDocNumber: string }`

## Откуда / куда
- Откуда: [[OsagoLossesDocumentSignScreen]] (submit ок)
- «Перейти к убытку» → `GenericWebviewScreen` «Детали убытка», `uri = buildClaimWebviewUri(claimId, INSURANCE_CASES_LINK_PATH, 'auto')`
- «На главную» → `RootTabs → Health → HealthScreen`
- Копировать номер → `copyToClipboard(extDocNumber)`

## Замечания
- Стек модуля не сбрасывается: после «На главную» экраны остаются в истории под табами.
- Нет view-события (`…application_sent` отправляется на DocumentSign).
