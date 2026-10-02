---
tags: [osago-losses, screen, form]
route: OsagoLossesCheckProfileDataScreen
file: src/modules/OsagoLosses/screens/OsagoLossesCheckProfileDataScreen.tsx
title: Страховой случай ОСАГО (проверьте данные)
---
# OsagoLossesCheckProfileDataScreen

> [!summary] Назначение
> Проверка и дозаполнение данных **заявителя**: ФИО, дата рождения, паспорт, адрес регистрации. Создаёт `stepApplicant`, после чего черновик считается «начатым».

**Параметры:** `{ draftId: string }`

## Откуда попадают
- [[OsagoLossesInitialScreen]] (есть `oid`), `replace`
- [[OsagoLossesInitialScreenGU]] → «Продолжить», `replace`

## Куда ведёт
- Сохранить → [[OsagoLossesResultantScreen]] (`replace`). Назад вернуться нельзя: оба предыдущих экрана заменены.

## Данные и API

| Что | Источник |
|---|---|
| Предзаполнение формы | `GET api/storefront/claims/info/driver` → fallback `GET /api/v1/profile` (`useCheckProfileDataForm`) |
| Контакты (не на форме) | `info/driver.communicationMethod` → `profile.phone/email` (`useApplicantCommunicationMethods`) |
| Адрес | `useAddressSuggestions` (DaData) |

**Сохранение** (`onSubmitForm`):
1. `PATCH drafts/{id}` → `stepApplicant = { role:'victim', type:'OSAGO', status:'draft', signType:'pep', oid: profile.oid, applicant }`
2. `PATCH drafts/{id}` → `stepApplicationSelected = { isLife:false, isVehicle:false, isProperty:false }`
3. `replace Resultant`

`applicant`: `{ fullName, birthDate(ISO), identityDocument{ docType: PASSPORT_UUID, docSeries, docNumber, issueDate, issuedBy, filialCode }, registrationAddress, communicationMethods }`.

## Форма
- `fullName`, `birthDate`, `documentType` — **disabled** (только из профиля).
- Редактируемые: `seriesAndNumber` (маска паспорта), `issueDate`, `issuedBy`, `departmentCode`, `registrationAddress`.
- Схема `checkProfileDataFormSchema`: 10 цифр серии и номера, 6 цифр кода подразделения, адрес из подсказок. Режим `onBlur`, скролл к первой ошибке.

## Замечания
- 🔴 Оба PATCH вызваны **без `.unwrap()`**: при ошибке `.catch` не сработает, а цепочка дойдёт до `replace Resultant`. Пользователь попадёт на хаб без `stepApplicant`.
- Нет аналитики.
- Тип документа захардкожен — паспорт.
