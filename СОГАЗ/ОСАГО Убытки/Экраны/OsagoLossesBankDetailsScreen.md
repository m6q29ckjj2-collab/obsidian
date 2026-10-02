---
tags: [osago-losses, screen, form]
route: OsagoLossesBankDetailsScreen
file: src/modules/OsagoLosses/screens/OsagoLossesBankDetailsScreen.tsx
title: Банковские реквизиты
---
# OsagoLossesBankDetailsScreen

> [!summary] Назначение
> Способ получения выплаты: **банковские реквизиты** (сохранённые или новые) или **почтовый перевод**, а также получатель выплаты. Пишет `stepBankDetails`.

**Параметры:** `{ draftId: string }`

## Откуда / куда
- [[OsagoLossesResultantScreen]] → «Продолжить», если ТС не выбран
- [[OsagoLossesSelfInspectionDamageScreen]], если не «только ремонт ТС»
- «Продолжить» → [[OsagoLossesDocumentSignScreen]]

## UI и логика
- **Список карточек:** локально добавленные реквизиты + `GET bank-requisites` + «Почтовый перевод» (элемент добавляется в `transformResponse`, `imageUrl = 'postIcon'`). Первая сохранённая карточка выбирается автоматически.
- Выбрана **банковская** карточка → полная форма (`BankDetailForm`): БИК, ИНН банка, название, КПП, к/с, счёт. По умолчанию поля заблокированы, «Редактировать» снимает блокировку (`disableEdit`).
- Выбран **почтовый перевод** → `SimpleBankDetailForm`: индекс и адрес получателя (`postalTransferFormSchema`).
- **Добавить счёт** → BS `AddBankDetailBottomSheet`:
  - короткая форма (`ShortBankDetailForm`): БИК, счёт, получатель;
  - БИК → `GET suggestions/bank?query={bik}` → найден: карточка добавляется **локально** (`localId`); не найден: тост и переход на полную форму.
  - Новые реквизиты **не сохраняются на бэк** (FIXME).
- **Получатель выплаты** (`AccountOwnerNameField`): выбор из `getPotentialBeneficiaryNames` — ФИО профиля, собственник ТС, собственник имущества, пострадавший. Учитываются только типы ущерба, выбранные на хабе (Redux override).

## Сохранение
```
PATCH drafts/{id} stepBankDetails = {
  bankDetails (если банк) | postalAddress (если почта),
  beneficiary: { fullName, lastName, firstName, middleName, type, inn, legalName }
}
→ navigate DocumentSign
```
`beneficiary.type`, `inn` и `legalName` вычисляются в `prepareOsagoLossesBeneficiaryOwnerData` сравнением ФИО получателя без учёта регистра:
1. совпало с ФИО профиля → `type: 'myself'`;
2. совпало с ФИО или названием собственника ТС → тип, ИНН и название берутся у собственника ТС;
3. то же для собственника имущества;
4. совпало с пострадавшим → `individual`;
5. ни с кем не совпало (ввели вручную) → `myself`, если есть ФИО профиля, иначе данные собственника ТС или имущества, иначе `individual`. ⚠️ Чужое имя, введённое вручную, уходит как `myself`.

## API
`GET drafts/{id}`, `GET /api/v1/profile`, `GET bank-requisites`, `GET suggestions/bank`, `PATCH drafts/{id}`.

## Аналитика
`yy_osago_view_page_bank_requisites`, `yy_osago_click_button_next_page_bank_requisites`.

## Замечания
- 652 строки, три `useForm` на одном экране (основная, новая, короткая). В коде прямо помечено как экран под рефакторинг.
- «Продолжить» ничего не делает, если выбран «новый счёт» без карточки (`isNewAccountSelected`).
