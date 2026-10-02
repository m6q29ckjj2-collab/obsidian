---
tags: [osago-losses, screen, bottom-sheet]
route: (компонент внутри OsagoLossesResultantScreen)
file: src/modules/OsagoLosses/screens/OsagoLossesRouterBottomSheet.tsx
---
# OsagoLossesRouterBottomSheet

> [!summary] Назначение
> Шторка «**Есть незавершённое заявление** — Вы уже начали оформлять страховой случай». Показывается на хабе один раз, когда пользователь пришёл в уже начатый черновик.

Это не экран стека, а компонент внутри [[OsagoLossesResultantScreen]].

## Когда показывается
[[OsagoLossesInitialScreen]] при `continuationDraftId` делает `dispatch(scheduleShowDraftRouterBottomSheet())`. На маунте шторка проверяет `selectShouldShowDraftRouterBottomSheet`, открывается и сбрасывает флаг (`draftRouterBottomSheetShown`).

## Действия

| Кнопка | Что делает |
|---|---|
| «Продолжить оформление» | Закрывает шторку, `navigate('OsagoLossesResultantScreen')` (тот же экран; FIXME «navigate to draft continuation screen») |
| «Начать заново» | `DELETE drafts/{id}` → `POST claims/draft` → `replace Initial{ newDraftId }` |
| Крестик | Закрыть + `goBack` |
| Android back | Закрыть + `goBack` (`useBackHandler`, работает **всегда**, даже когда шторка закрыта) |

## Ошибки
- DELETE упал → тост «Ошибка удаления заявления» → `replace Initial{ старый draftId }`
- POST упал → тост «Ошибка создания заявления» → `goBack`
