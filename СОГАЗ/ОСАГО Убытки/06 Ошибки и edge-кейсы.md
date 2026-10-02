---
tags: [osago-losses, errors]
---
# Ошибки и edge-кейсы

## Как экраны реагируют на ошибки

> [!important] RTK Query без `.unwrap()`
> Промис мутации RTK Query **не реджектится** при ошибке, он резолвится в `{ error }`. Поэтому `mutation(...).then(next).catch(toast)` без `.unwrap()` всегда идёт в `next`, и тост не показывается. В модуле так вызываются: CheckProfile (оба PATCH), HealthDamage (все 3), AddVehicleForm, второй PATCH (файлы) в IncidentData и DocumentSign.

| Экран | Ситуация | Что видит пользователь |
|---|---|---|
| [[OsagoLossesInitialScreen]] | `POST draft` или `GET draft` упал | Тост `showRequestError` + полноэкранный `ErrorView` «Ошибка создания страхового случая» с ретраем (refetch или повторный create) |
| [[OsagoLossesRouterBottomSheet]] | `DELETE` упал | Тост «Ошибка удаления заявления» → `replace Initial{старый draftId}` → снова хаб с шторкой |
| RouterBottomSheet | `DELETE` ок, `POST` упал | Тост «Ошибка создания заявления» → `goBack`. ⚠️ Старый черновик уже удалён |
| [[OsagoLossesCheckProfileDataScreen]] | профиль или `info/driver` упал | Тост, форма пустая, но работает |
| CheckProfile | PATCH упал | ⚠️ **Ничего не видно.** Мутации вызваны без `.unwrap()`, `.catch` не сработает, `.then` выполнится: переход на хаб без `stepApplicant` |
| [[OsagoLossesResultantScreen]], SecondParticipant, VehicleDamage, Property, Health, DocumentSign | `GET draft` упал | `ErrorView` с refetch |
| VehicleDamage | `GET polices` упал | `ErrorView` «…полисов» с refetch |
| VehicleDamage | `info/transport/{policyId}` упал | Тихо → попытка дозаполнить СТС/ПТС, иначе AddVehicleForm |
| VehicleDamage | PATCH `stepVehicleDamage` упал | Тост, **но цепочка продолжается** (selected → signType → files → `goBack`). Пользователь уходит на хаб, хотя данные ТС не сохранились |
| PropertyDamage | PATCH `stepPropertyDamage` упал | Так же: тост, цепочка продолжается. Ошибки остальных шагов **глотаются** пустым `catch {}` |
| HealthDamage | любой из 3 PATCH упал | ⚠️ **Ничего не видно**: все три без `.unwrap()`, цепочка доходит до `navigate(Resultant)` |
| IncidentData | PATCH accident упал | Тост, остаёмся на экране (с `.unwrap()`) |
| IncidentData | PATCH accident ок, files упал | ⚠️ Тихо: без `.unwrap()`, `goBack` выполнится, файлы не сохранятся |
| DocumentSign | PATCH printForm ок, PATCH сертификатов упал | ⚠️ Тихо: без `.unwrap()`, `submit` всё равно уходит |
| AddVehicleForm | PATCH упал | ⚠️ Тихо: без `.unwrap()`, `popTo VehicleDamage` выполнится |
| SecondParticipant, AddVehicle | `info/transport` упал или пусто | Тост `coloredAttention` «Не нашли данные ТС…», поля открываются для ручного ввода |
| SecondParticipant | словарь страховых упал | Тост, селект пустой |
| [[OsagoLossesAccidentMapScreen]] | геокодер упал / не нашёл | Шторка «Ошибка» с ретраем / «Адрес не найден» |
| [[OsagoLossesBankDetailsScreen]] | `bank-requisites` упал | Список содержит только «Почтовый перевод» и локально добавленные |
| BankDetails | БИК не найден | Тост «БИК не найден», поля нужно заполнить вручную (полная форма) |
| BankDetails | PATCH упал | Тост, остаёмся на экране |
| Самоосмотр | upload или PATCH упал | Тост «Не удалось загрузить фото» |
| [[OsagoLossesDocumentSignScreen]] | PATCH printForm упал | Тост |
| DocumentSign | `submit` упал | → [[OsagoLossesFailureScreen]] («Повторить попытку» = назад на подписание) |
| Загрузка файла | неверное расширение, > 10 МБ, > 5 файлов | Инлайн-ошибка под полем |
| Загрузка файла | `POST file/upload` упал | Тост «Не удалось загрузить {имя}» |

## Edge-кейсы и поведение, которое надо знать

1. **Черновик создаётся при каждом открытии Initial без `draftId`.** Пользователь, который трижды открыл флоу и закрыл его на первом вопросе, оставит 3 пустых черновика.
2. **Нет поиска «моего незавершённого черновика».** Продолжить можно только по deeplink с `draftId` или после ЕСИА-редиректа.
3. **«Начать заново» удаляет черновик до создания нового.** Если создание упадёт, у пользователя не останется ни одного.
4. **Android back на хабе.** В [[OsagoLossesRouterBottomSheet]] стоит `useBackHandler(() => { close(); goBack(); return true })`, а шторка смонтирована на хабе всегда. Аппаратная «назад» поэтому уходит с хаба **без** шторки «Закрыть заявку?» (её показывает только стрелка в TopBar). Нужно проверить на устройстве.
5. **Крестик на формах (`onPressCloseStep`).** При `!isDirty` вызывается `goBack()`, а потом **ещё и** `onPressOutFlow()` (нет `return`). Повторяется на SecondParticipant, IncidentData, VehicleDamage, Property, Health.
6. **Свитчи «имущество» и «здоровье» на хабе не сохраняются на бэк.** Если пользователь заполнил имущество и выключил свитч, на бэке остаётся `isPropertyApplicationSelected=true`. Печатная форма по имуществу, скорее всего, всё равно сформируется. Сверить с бэком.
7. **`signType` перезаписывает последний сохранённый экран ущерба.** Пример: ТС у юрлица (`ukep`), потом пользователь сохраняет имущество с собственником «я» и с `oid` → `goskey`. HealthDamage signType не трогает.
8. **AddVehicleForm перезаписывает `stepVehicleDamage.damagedVehicle` целиком**, без собственника, водителя, способа возмещения и `policyNumber`. Если до этого шаг был заполнен, данные теряются до следующего сохранения VehicleDamage.
9. **Полисы е-ОСАГО** (`product === 'е-ОСАГО'`) отфильтрованы из списка ТС пострадавшего. При этом «виртуальный» полис из черновика помечается `product: 'еОСАГО'` (без дефиса), и фильтр его не отсекает.
10. **Госключ.** Отдельной интеграции с приложением Госключ на клиенте нет. При `goskey` кнопка «Подписать через Госключ» делает тот же PATCH и `submit`. Само подписание, видимо, на стороне бэка или ЕСИА. Кнопка «Установить ГосКлюч» в шторке InitialGU просто закрывает шторку.
11. **`userId` при submit** берётся как `profile?.id ?? 0`. Если профиль не загрузился, уйдёт `userId: 0`.
12. **ServiceMap** (выбор СТОА) недостижим, поэтому `compensationMethods.stoaName/address` всегда `null`.
13. **HealthDamage, смерть:** `applicantRelation` заполняется из поля формы `injuryDetails`. Одно поле UI используется под два смысла.
14. **Хаб после сохранения Property/Health** открывается через `navigation.navigate('OsagoLossesResultantScreen')`, а не `goBack`. В react-navigation 7 `navigate` к экрану, который уже есть в стеке, должен вернуть к нему, но это стоит проверить (в других местах для этого явно используется `popTo`).

Связанное: [[08 Тех долг и странности]].
