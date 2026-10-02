---
tags: [osago-losses, screen]
route: OsagoLossesInitialScreenGU
file: src/modules/OsagoLosses/screens/OsagoLossesInitialScreenGU.tsx
title: Страховой случай ОСАГО (вход через Госуслуги)
---
# OsagoLossesInitialScreenGU

> [!summary] Назначение
> Предлагает войти через Госуслуги, чтобы потом подписать заявление Госключом. Если пользователь отказывается, флоу продолжается без ЕСИА (подпись ПЭП или УКЭП).

**Параметры:** `{ draftId: string }`

## Откуда попадают
- [[OsagoLossesInitialScreen]]: пострадавший без `profile.oid` (`replace`)

## Куда ведёт

| Действие | Куда | Навигация |
|---|---|---|
| «Войти через Госуслуги» | `GenericWebviewScreen` с ЕСИА (`{LK_BASE_URL}/webview/esia…`). Перед этим сохраняется `postLoginRedirect = /losses/osago/{draftId}`: native → Redux `auth.setPostLoginRedirect`, web → `localStorage[postLogin]` | `navigate` |
| После успешного входа | deeplink → `reset([RootTabs, Initial{draftId}])`, см. [[01 Внешние входы]] | — |
| «Продолжить» | [[OsagoLossesCheckProfileDataScreen]] | `replace` |
| «Что потребуется для обращения» | BS со списком документов: реквизиты, ВУ, СТС/ПТС, паспорт собственника, документы о ДТП, Госключ/УКЭП | — |

## API
Нет.

## Аналитика
`yy_osago_view_page_log_in_through_gosuslugi`, `…click_button_login_page_log_in_through_gosuslugi`, `…click_button_next_page_page_log_in_through_gosuslugi`.

## Замечания
- Обе кнопки в BS («Установить ГосКлюч» и «Понятно») только закрывают шторку, ссылки на установку нет.
- `if (postLoginRedirect)` всегда истинно (строка-шаблон).
- Разные ESIA URL для web (`?backurl=…`) и native.
