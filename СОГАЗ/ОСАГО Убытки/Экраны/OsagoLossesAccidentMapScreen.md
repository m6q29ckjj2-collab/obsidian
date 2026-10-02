---
tags: [osago-losses, screen, map]
route: OsagoLossesAccidentMapScreen
file: src/modules/OsagoLosses/screens/OsagoLossesAccidentMapScreen.tsx
---
# OsagoLossesAccidentMapScreen

> [!summary] Назначение
> Выбор места ДТП на Яндекс-карте: тапом по точке или поиском адреса. Возвращает адрес и координаты в [[OsagoLossesIncidentDataScreen]] через Redux.

**Параметры:** `{ draftId: string; initialPlace?: string }`. `initialPlace` — `"lat, lon"` для центра карты, fallback на Redux `selectedMapPlace`.

## Откуда / куда
- Из [[OsagoLossesIncidentDataScreen]] (пункт «Указать на карте» в подсказках адреса)
- «Сохранить» в шторке точки → `dispatch(setSelectedMapAddress, setSelectedMapPlace)` → `goBack`
- Назад (`AccidentMapHeader`) → `goBack` без сохранения

## Логика
- Тап по карте → `POST /api/storefront/suggestions/geolocate/address { lat, lon }` → первая подсказка = адрес точки.
- Поиск: шторка `AddressSuggestionsBottomSheetContent` (DaData) → выбор → фокус карты на координатах.
- Шторки: `SelectedPointBottomSheetContent` (адрес + «Сохранить»), `NotFoundBottomSheetContent`, `ErrorBottomSheetContent` (ретрай).

## API
- `POST /api/storefront/suggestions/geolocate/address` (`useLazyGetDadataAddressByCoordinatesQuery`, `keepUnusedDataFor: 0`)
- Подсказки адресов через общий `useAddressSuggestions`

## Замечания
- Использует строки `osagoLossesServiceMapScreen`, общие с мёртвым [[OsagoLossesServiceMapScreen]].
- Нет аналитики.
