---
tags: [osago-losses, screen, form]
route: OsagoLossesIncidentDataScreen
file: src/modules/OsagoLosses/screens/OsagoLossesIncidentDataScreen.tsx
title: Данные о ДТП
---
# OsagoLossesIncidentDataScreen

> [!summary] Назначение
> Когда, где и как произошло ДТП, способ оформления (ГИБДД или европротокол) и документы о ДТП. Пишет `stepAccidentDetails` и `stepUploadedDocuments.claimCaseFileListAccidentDetails`.

**Параметры:** `{ draftId: string }`

## Откуда / куда
- Из [[OsagoLossesResultantScreen]] (карточка «Данные о ДТП»)
- «Указать на карте» (пункт в выпадающих подсказках адреса) → [[OsagoLossesAccidentMapScreen]] `{ draftId, initialPlace }`
- Возврат с карты: на `useFocusEffect` читает Redux `selectedMapAddress/Place`, подставляет в форму и очищает Redux
- Сохранить → `goBack` на хаб
- Закрыть → OutFlow BS → `goBack`

## Форма

| Поле | Правило |
|---|---|
| Дата ДТП | обязательна, ≤ сегодня |
| Время | `ЧЧ:ММ` (маска из цифр) |
| Адрес | из подсказок DaData или с карты; `place` = координаты `"lat, lon"`, если есть у подсказки |
| Обстоятельства | textarea, обязательно |
| Кол-во участников | ≥ 1, по умолчанию `2` |
| Способ оформления | `GIBDD` (по умолчанию) / `euroProtocol` |
| Файлы ГИБДД | постановление/определение (**обязательно** при GIBDD), протокол (опц.) |
| Файлы европротокола | лицевая и оборотная стороны (**обязательно** при euroProtocol) |

## API
- `GET drafts/{id}`: предзаполнение (accident + файлы из `stepUploadedDocuments` через `useGetIncidentUploadFileLists`)
- `POST file/upload`: на выбор файла, категории см. [[09 Документы и UUID]]
- Сохранение:
  1. `PATCH stepAccidentDetails { accident }`
  2. `PATCH stepUploadedDocuments.claimCaseFileListAccidentDetails = [...все 4 массива]`
  3. `goBack`

## Аналитика
`yy_osago_view_page_accident_data`, `yy_osago_click_button_save_page_accident_data`.

## Замечания
- Шаг 2 вызван без `.unwrap()`: при ошибке файлы не сохранятся, а `goBack` всё равно выполнится.
- Файлы ГИБДД и европротокола хранятся в одном ключе. При смене `protocolType` файлы другого типа тоже уйдут в PATCH.
