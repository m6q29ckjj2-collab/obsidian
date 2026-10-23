---
tags: [adaptive, breakpoints, tokens]
---
# Breakpoints

Взяты из Material 3 window size classes, единицы dp/pt.

| Ключ | От | Что сюда попадает |
|---|---|---|
| `compact` | 0 | все телефоны в portrait (iPhone до 440), iPad Slide Over / узкие окна |
| `medium` | 600 | планшеты portrait (iPad mini 744, iPad/Air 820, Pro 11" 834), развёрнутые foldables, телефоны в landscape |
| `expanded` | 840 | планшеты landscape, iPad Pro 13" portrait (1032), ноутбук с узким окном |
| `large` | 1200 | iPad Pro 13" landscape (1376), десктоп |
| `extraLarge` | 1600 | широкий десктоп |

## Почему так
- Названия семантические, как в M3. Так `sm`/`md` не путаются с Tailwind (640/768) и Bootstrap (576/768).
- Граница 840 разводит iPad 11" portrait (834 → medium) и landscape (1194 → expanded). Порог 768 из веба их не разделяет.
- `isTablet` / `Platform.isPad` не заводим: iPad в Split View бывает уже телефона.
- Высоту учитываем точечно: при `height < 480` двухпанельные раскладки не показываем (это телефон в landscape).

## Рекомендации M3 по классам (ориентир для дизайна)
- compact: bottom navigation bar, 1 панель, отступы 16
- medium: navigation rail, 1 панель (2 по ситуации), отступы 24
- expanded и больше: rail или постоянный drawer, 2 панели (list-detail / supporting pane), отступы 24

Ссылки: [[03 План внедрения]], [[04 Как пользоваться]]
