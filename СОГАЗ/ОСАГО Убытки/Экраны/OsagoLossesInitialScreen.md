---
tags: [osago-losses, screen]
route: OsagoLossesInitialScreen
file: src/modules/OsagoLosses/screens/OsagoLossesInitialScreen.tsx
title: Страховой случай ОСАГО
---
# OsagoLossesInitialScreen

> [!summary] Назначение
> Единственная точка входа в модуль. Создаёт новый черновик или загружает существующий, задаёт два квалифицирующих вопроса и направляет пользователя дальше.

**Параметры:** `{ draftId?: string } | undefined`

## Откуда попадают
- Все внешние входы, см. [[01 Внешние входы]] (SOS, Connect, полис, deeplink-и, возврат из ЕСИА)
- [[OsagoLossesRouterBottomSheet]] → «Начать заново» (`replace`, новый `draftId`) или ошибка удаления (`replace`, старый `draftId`)

## Куда ведёт

| Условие / действие | Куда | Навигация |
|---|---|---|
| В черновике уже есть `stepApplicant` | [[OsagoLossesResultantScreen]] + `scheduleShowDraftRouterBottomSheet()` | `replace` |
| Q1 «Вы уже оформили документ по ДТП?» → **Нет** | BS «Сначала оформите ДТП»: «Оформить Европротокол» (`gosuslugi.ru/europrotokol`) / «Позвонить 112» | — |
| Q1 → **Да** | Q2 | локальный `step` |
| Q2 → **Я виновный** | BS «Важно: если вы виновник, сообщать не нужно…»: «Понятно» / «Вернуться на главную» (`goBack`) | — |
| Q2 → **Я пострадавший**, `profile.oid` есть | [[OsagoLossesCheckProfileDataScreen]] | `replace` |
| Q2 → **Я пострадавший**, `oid` нет | [[OsagoLossesInitialScreenGU]] | `replace` |

## Данные и API
- `useOsagoLossesDraftResolver(draftId)`:
  - если `draftId` передан → `GET claims/drafts/{draftId}`;
  - иначе → `POST claims/draft { productType: 'OSAGO' }` сразу на маунте;
  - `continuationDraftId` = текущий `draftId`, если в ответе есть `steps.stepApplicant`.
- `GET /api/v1/profile` → `oid`.
- Пока профиль или черновик грузятся, кнопки в `loading`.

## Ошибки
`ErrorView` «Ошибка создания страхового случая» с ретраем: `refetch` для GET, повторный create для POST.

## Аналитика
`yy_osago_view_page_main`, `…click_button_yes_page_main`, `…click_button_no_page_main`, `…view_popup_register_accident_page_main`, `…click_button_register_popup_…`, `…click_button_call_popup_…`. Подробнее в [[07 Аналитика]].

## Замечания
- Черновик создаётся ещё до ответа на вопросы, поэтому виновник или «не оформил ДТП» оставляют пустой черновик.
- На ветке Q2 «Я пострадавший» нет события аналитики.
