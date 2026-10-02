---
tags: [osago-losses, screen, final]
route: OsagoLossesFailureScreen
file: src/modules/OsagoLosses/screens/OsagoLossesFailureScreen.tsx
title: Подписание заявления (ошибка)
---
# OsagoLossesFailureScreen

> [!summary] Назначение
> Ошибка отправки (`POST applications/submit`): «Не смогли подписать заявление».

**Параметры:** нет

- Откуда: [[OsagoLossesDocumentSignScreen]] (submit упал)
- «Повторить попытку» → `goBack` на подписание. Повтор заново выполнит PATCH печатных форм и submit.
- Ссылка на поддержку → `mailto:SUPPORT_EMAIL`
- В строках есть `operationCode(code)`, но код ошибки на экран не передаётся.
