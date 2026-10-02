---
tags: [osago-losses, screen, form]
route: OsagoLossesSecondParticipantScreen
file: src/modules/OsagoLosses/screens/OsagoLossesSecondParticipantScreen.tsx
title: Виновник ДТП
---
# OsagoLossesSecondParticipantScreen

> [!summary] Назначение
> Данные **виновника ДТП**: его ТС, страховая, полис ОСАГО, персональные данные и документ. Пишет `stepSecondParticipant`.

**Параметры:** `{ draftId: string }`

## Откуда / куда
- Из [[OsagoLossesResultantScreen]] (карточка «Виновник ДТП»)
- Сохранить → `goBack` на хаб
- Крестик → OutFlow BS «Закрыть форму? Изменения будут потеряны» → `goBack`
- Страховая «Полиса нет» + Сохранить → BS «**У виновника нет ОСАГО**»: выплата по ОСАГО невозможна; советы обратиться в ГИБДД. Кнопки: «Продолжить заполнение» (закрыть BS + `goBack`) / «Закрыть форму». Данные **не сохраняются**.

## Форма (3 блока-компонента)

| Блок | Поля | Компонент |
|---|---|---|
| ТС виновника | тип номера (`Госномер` / `Номер VIN`), номер, марка, модель, год, тип документа (СТС/ПТС/ЭПТС), серия и номер, дата выдачи | `OsagoLossesSecondParticipantVehicleForm` |
| Персональные данные | страховая (select из словаря + «Полиса нет»), номер полиса, ФИО, дата рождения, адрес, телефон | `OsagoLossesSecondParticipantPersonalForm` |
| Документ | тип (по умолчанию ВУ), серия и номер, дата выдачи | `OsagoLossesSecondParticipantDocumentForm` |

Валидация: `secondParticipantFormSchema`, режим `onSubmit`, затем `onChange`.

## API
- `GET drafts/{id}`: предзаполнение
- `GET claims/osago/dictionary?category=insurance_company`: список страховых
- `POST claims/info/transport { queryType: 'GRZ'|'VIN', query }`: на **blur** номера ТС (`useSecondParticipantVehicleInfo`)
  - пока номер невалиден (ГРЗ по `validateGosNumber`, VIN 17 символов), блок ТС скрыт;
  - найдено → автозаполнение марки, модели, года и документа; если данные неполные — тост «Не нашли данные»;
  - смена номера или типа номера очищает автозаполненные поля.
- `PATCH drafts/{id}` → `stepSecondParticipant.secondParticipant`

## Трансформация при сохранении
- `policyNumber` → `normalizeOsagoPolicyNumber` (из модуля Osago)
- серия и номер документа разбиваются по пробелу
- `vinNumber` или `licensePlate` в зависимости от типа номера, `isVinNumberNotExists = тип !== 'Номер VIN'`
- `communicationMethods = [{ type:'phoneNumber', value }]`

## Аналитика
`yy_osago_view_page_culprit`, `yy_osago_click_button_save_page_culprit` (в `finally`).
