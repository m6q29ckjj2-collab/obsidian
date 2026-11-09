# react-native-keyboard-controller — дёрганье скролла при закрытии клавиатуры

Проект: sogaz-mobile, ветка `pwa-1121`. Версия библиотеки: `1.22.7`. Платформа: iOS.
Статус: фикс применён **временно** в `node_modules`, постоянный патч (`yarn patch`) не оформлен. Когда вставим, нужно проверить на устройстве ещё раз.

## Симптом

Открыли клавиатуру на форме (экран прокручен вниз, например поле «Адрес постоянной регистрации»), закрыли её и сразу крутите список вверх: контент дёргается назад-вперёд.

## Причина (по логам)

В `KeyboardAwareScrollView/index.tsx`, в конце закрытия клавиатуры (`onEnd`, `e.height === 0`), вызывается `removeGhostPadding`. Он делает `scrollTo` на абсолютную позицию, посчитанную в самом начале закрытия (`scrollPosition - ghostViewSpace`). Если пользователь за это время уже прокрутил дальше, скролл рывком возвращается на устаревшую позицию.

Лог до фикса (позиция `pos`):

```
onStart h 0 pos 320
scroll pos 221.5  (ghost 98)        ← возврат из запаса под клавиатурой
onMove h ... pos 222
scroll pos 216.5 → ... → 197.5      ← пользователь крутит (user true)
onEnd h 0 pos 198
scroll pos 221.5                    ← рывок назад: устаревший scrollTo из onEnd
```

Пропс `disableScrollOnKeyboardHide` не помогает: он отключает только `maybeScroll`, а `removeGhostPadding` продолжает вызывать `scrollTo`.

## Что не сработало

- `mode='layout'` вместо `insets`: убрало дёрганье не полностью и добавило другое — пустое место под последним полем и прыжок через ~0,4 с после закрытия клавиатуры.
- `disableScrollOnKeyboardHide` — см. выше.
- Меньший `bottomOffset` (68 → 24) на дёрганье не влияет, только на зазор над клавиатурой.
- Отключить `KeyboardAwareScrollView` для проверки — бессмысленно: без него контент не поднимается, и дёргаться нечему.

## Фикс

Файл: `node_modules/react-native-keyboard-controller/src/components/KeyboardAwareScrollView/index.tsx`

Идея: если пользователь начал скроллить, пока клавиатура скрывается, библиотека не делает свои `scrollTo` до конца этого закрытия.

1. Импорты типов:

```ts
import type {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from "react-native";
```

2. Рядом с остальными `useSharedValue` (после `scrollViewPageY`):

```ts
const userScrolledDuringHide = useSharedValue(false);
const userScrollHandlers = {
  onScrollBeginDrag: (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (keyboardWillHide.value) {
      userScrolledDuringHide.value = true;
    }
    rest.onScrollBeginDrag?.(e);
  },
};
```

3. В `onStart` (в начале обработчика):

```ts
userScrolledDuringHide.value = false;
```

4. В `onMove`, перед `if (removeGhostPadding(e.height))`:

```ts
if (keyboardWillHide.value && userScrolledDuringHide.value) {
  return;
}
```

5. В `onEnd`:

```ts
if (e.height === 0 && !userScrolledDuringHide.value) {
  removeGhostPadding(e.height);
}
```

6. Передать обработчики в обе ветки рендера (`mode === "layout"` и по умолчанию), сразу после `{...rest}`:

```tsx
{...rest}
{...userScrollHandlers}
```

## Результат

По логам после фикса рывка после `onEnd` нет: позиция идёт плавно (213 → 201.5 → … → 157.5), новых `scroll pos` после `onEnd` не приходит. На устройстве визуально подтверждает пользователь.

## Остаётся

- Ступенчатый сдвиг в начале закрытия: `onStart h 0 pos 320` → `scroll pos 221.5` (−98, равно `ghost`). Это возврат из запаса под клавиатурой, не от жеста пользователя. Можно сгладить, если будет заметно.
- Оформить как постоянный патч: `yarn patch react-native-keyboard-controller`, правки выше, `yarn patch-commit -s <папка>`. Появятся изменения в `package.json`, `yarn.lock` и `.yarn/patches/…`.
- Проверить, не починено ли это в новых версиях библиотеки, прежде чем патчить.

## Связанное в проекте

- `src/components/ScreenComponent.tsx`: `KEYBOARD_BOTTOM_OFFSET = 24` (зазор между полем и клавиатурой), `KeyboardAwareScrollView` только на iOS/Android, `mode` по умолчанию (`insets`).
- Как `KeyboardAwareScrollView` считает зазор: точка скролла — `absoluteY + height` поля, у мультистрочных вместо высоты берётся положение курсора (`selection.end.y`, `updateLayoutFromSelection`).
