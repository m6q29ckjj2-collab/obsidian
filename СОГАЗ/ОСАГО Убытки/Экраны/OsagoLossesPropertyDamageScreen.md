---
tags: [osago-losses, screen, form]
route: OsagoLossesPropertyDamageScreen
file: src/modules/OsagoLosses/screens/OsagoLossesPropertyDamageScreen.tsx
title: Ущерб имуществу
---
# OsagoLossesPropertyDamageScreen

> [!summary] Назначение
> Ущерб **имуществу, кроме ТС**: список повреждённого имущества, собственник, подтверждающие документы. Пишет `stepPropertyDamage`, `stepApplicationSelected.isProperty`, `stepApplicant.signType`, `claimCaseFileListPropertyDamage`.

**Параметры:** `{ draftId: string }`. Карточка на хабе видна только при флаге `osago_losses_property_damage`.

## Откуда / куда
- Из [[OsagoLossesResultantScreen]]
- Сохранить → `navigate('OsagoLossesResultantScreen', { draftId })`
- Крестик → OutFlow BS → `goBack`

## Форма

| Блок | Компонент | Содержимое |
|---|---|---|
| Имущество | `PropertyList` + `PropertyBottomSheet` | список `{ property, documentType (свободный текст), documentNumber }`, добавление в шторке |
| Собственник | `OwnerForm` | `myself` (из профиля: `getPropertyOwnerFromProfile`) / `individual` (ФИО, ДР, документ, адрес) / `legal_entity` (ИНН, название, адрес) |
| Документы | `PropertyFiles` | файлы `OTHER_EXPENSES_DOCS`, до 5, JPG/PNG/PDF, до 10 МБ |

Значения по умолчанию: `usePropertyOwnerDefaultValues` (черновик → профиль). Схема `propertyDamageFormSchema`.

## Сохранение

```
signType = owner === 'legal_entity' ? 'ukep' : profile.oid ? 'goskey' : 'pep'
1. PATCH stepPropertyDamage { lostProperty, propertyOwner }  ← ошибка: тост, цепочка продолжается
2. PATCH stepApplicationSelected { isPropertyApplicationSelected: true }
3. PATCH stepApplicant.signType
4. PATCH stepUploadedDocuments.claimCaseFileListPropertyDamage
5. navigate Resultant
   catch {} — ошибки шагов 2–4 молча глотаются
```

## Аналитика
`yy_osago_view_page_damage_property`, `yy_osago_click_button_save_page_damage_property`.
