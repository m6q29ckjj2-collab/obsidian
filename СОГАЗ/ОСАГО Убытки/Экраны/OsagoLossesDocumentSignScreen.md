---
tags: [osago-losses, screen, sign]
route: OsagoLossesDocumentSignScreen
file: src/modules/OsagoLosses/screens/OsagoLossesDocumentSignScreen.tsx
title: Подписание документов
---
# OsagoLossesDocumentSignScreen

> [!summary] Назначение
> Финальный экран: показывает сформированные бэком **печатные формы** заявления, собирает согласия, (для УКЭП) принимает файлы подписи и **отправляет заявление** (`submit`).

**Параметры:** `{ draftId: string }`

## Откуда / куда
- [[OsagoLossesBankDetailsScreen]] → «Продолжить»
- [[OsagoLossesSelfInspectionDamageScreen]] (только ремонт ТС)
- [[OsagoLossesFailureScreen]] → «Повторить попытку» (`goBack`)
- submit ок → [[OsagoLossesSuccessScreen]] `{ claimId, extDocNumber }`
- submit ошибка → [[OsagoLossesFailureScreen]]

## Режимы по `steps.stepApplicant.signType`

| signType | Контент | Основная кнопка | Вторичная |
|---|---|---|---|
| `pep` | список PDF (`DownloadableFileCard`) | «Продолжить» | — |
| `goskey` | список PDF + подпись под кнопкой | «Подписать через Госусключ» | «Подписать ПЭП» → `switchToPep` |
| `ukep` | `UkepScreenContent`: к каждой печатной форме (vehicle, property, life) загрузить `.sig` | «Отправить» | — |

Согласия (общие): «Данные верны» (обязательно), «Согласие на обработку ПДн» (обязательно, ссылка), «Согласие на рекламу» (опц., ссылка на `direct.health-and-care.ru/…/Soglasie_na_reklamu.pdf`).

## Сохранение и отправка
```
validate: оба обязательных чекбокса (+ .sig для каждой формы при ukep)
1. PATCH stepPrintForm { dataConfirmation, personalDataConsent, marketingConsent, printForm[] }
   (+ stepApplicant.signType = 'pep', если нажата «Подписать ПЭП»)
2. PATCH stepUploadedDocuments.claimCaseFileListPrintFormCertificates = [...sig-файлы]   (без .unwrap)
3. POST api/storefront/claims/applications/submit { userId: profile.id ?? 0, draftId }
   → { applicationId, claimId, extClaimId, extDocNumber }
```

## API
- `GET drafts/{id}`: `signType`
- `GET claims/osago/{draftId}/preview/print-form`: печатные формы (перезапрашиваются при инвалидации тега)
- `GET {BASE_API}/api/storefront/claims/osago/documentum/{documentumId}`: открыть PDF (`downloadAndOpenFile`)
- `POST file/upload`: `.sig` (`categoryCode = PRINT_FORM_CERTIFICATE`, `type = vehicle|property|life`)
- 2 × `PATCH drafts/{id}`, `POST applications/submit`

## Аналитика
`yy_osago_view_page_generate_statement`, `yy_osago_click_button_next_page_generate_statement`, `yy_osago_view_page_application_sent {number}`, `yy_osago_view_page_application_not_sent`.

## Замечания
- Отдельного вызова Госключа на клиенте нет. При `goskey` идёт тот же submit.
- Пока печатные формы грузятся, кнопки заблокированы. Если форм нет, PATCH уйдёт с пустым `printForm`.
