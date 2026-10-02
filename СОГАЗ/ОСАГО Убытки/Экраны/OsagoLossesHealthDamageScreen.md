---
tags: [osago-losses, screen, form]
route: OsagoLossesHealthDamageScreen
file: src/modules/OsagoLosses/screens/OsagoLossesHealthDamageScreen.tsx
title: Вред жизни и здоровью
---
# OsagoLossesHealthDamageScreen

> [!summary] Назначение
> Вред **жизни** (смерть) или **здоровью** пострадавшего: заявитель или другое лицо. Пишет `stepHealthDamage`, `stepApplicationSelected.isLife`, `claimCaseFileListHealthDamage`.

**Параметры:** `{ draftId: string }`. Карточка на хабе видна при флаге `osago_losses_property_damage` (⚠️ должна быть `…_health_damage`).

## Откуда / куда
- Из [[OsagoLossesResultantScreen]]
- Сохранить → `navigate('OsagoLossesResultantScreen', { draftId })`
- Крестик → OutFlow BS → `goBack`

## Форма

| Поле | Значения / логика |
|---|---|
| `victim` | `myself` (данные из профиля) / `individual` (`OtherPersonForm`) |
| `harmType` | `life` (по умолчанию) / `health` |
| ФИО, ДР, документ, адрес | черновик → профиль |
| `injuryDetails` | при `health` описание травм; при `life` уходит в `applicantRelation` (степень родства) |
| `isLostEarning`, `hasAdditionExpenses` | чекбоксы |
| Документы при `life` | свидетельство о смерти, справка о причине смерти, прочие (`DeathDocumentCardList`) |
| Документы при `health` | оплата мед. услуг, мед. заключение (`HurtDocumentCardList`) |

Схема `healthDamageFormSchema`, режим `onSubmit`. Обязательных файлов в схеме нет. UUID документов не финализированы (TODO).

## Сохранение (без `.unwrap()`)
```
1. PATCH stepHealthDamage { injured }
2. PATCH stepApplicationSelected { isLifeApplicationSelected: true }
3. PATCH stepUploadedDocuments.claimCaseFileListHealthDamage
4. navigate Resultant
```
⚠️ Ошибки не видны пользователю, см. [[06 Ошибки и edge-кейсы]]. `signType` **не обновляется**.

## Аналитика
Нет.
