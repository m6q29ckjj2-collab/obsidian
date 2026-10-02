---
tags: [osago-losses, screen, dead-code]
route: OsagoLossesServiceMapScreen
file: src/modules/OsagoLosses/screens/OsagoLossesServiceMapScreen.tsx
---
# OsagoLossesServiceMapScreen ⚠️

> [!warning] Недостижимый экран
> Зарегистрирован в стеке, но **никто на него не навигирует**. Работает на моках: `yandexMapMock` (FIXME «replace with actual data») и `MOCK_SERVICE_DETAILS` («"Ангар" ООО», Барнаул).

**Задумка:** выбор **СТОА** на карте для способа возмещения «ремонт» (`compensationMethods.vehicleCompensation[].stoaName/address`). Сейчас эти поля всегда `null`.

**UI:** поиск, Яндекс-карта с маркерами, шторка с деталями СТОА (название, адрес, телефон → звонок).

**API:** нет.

Связанное: [[08 Тех долг и странности]], [[OsagoLossesVehicleDamageScreen]].
