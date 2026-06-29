---
создал заметку: 2024-06-11
tags:
  - js
  - web_performance
---
**Lazy loading (ленивая загрузка)** - это стратегия, направленная на определение ресурсов как неблокирующих (не критических) для того, чтобы отложить загрузку этих ресурсов на тот момент, когда они действительно необходимы. Так можно сократить длину [критических этапов рендеринга](https://developer.mozilla.org/ru/docs/Web/Performance/Critical_rendering_path), что приводит к уменьшению времени загрузки приложения.

Ленивая загрузка может происходить в разные моменты работы приложения, но, как правило, она запускается во время взаимодействия пользователя и системы, например, при скроллинге или навигации.

## [Обзор](https://developer.mozilla.org/ru/docs/Web/Performance/Lazy_loading#%D0%BE%D0%B1%D0%B7%D0%BE%D1%80)

Вместе с ростом web-приложений драматически вырос объем и размеры ресурсов, отправляемых клиентскому приложению. С 2011 по 2019 медианный рост размеров ресурсов вырос с **~100KB** до **~400KB** для настольных компьютеров и с **~50KB** до **~350KB** для мобильных. А размер изображений вырос с **~250KB** до **~900KB** для настольных компьютеров и со **~100KB** до **~850KB** для мобильных.

Очевидно, что такое повышение объёмов способствует увеличению длительности загрузки приложения. Один из способов её сократить - это отложить загрузку ресурсов, которые не являются критически важными для приложения. Например, вы посещаете приложение интернет-магазина, которое состоит из списка товаров и корзины. Очевидно, что вам не нужны изображения товаров, которые сейчас находится за пределами экрана; очевидно так же, что вам не нужно грузить все данные о содержимом корзины до тех пор, пока пользователь не перешёл к ней.

## [Стратегии](https://developer.mozilla.org/ru/docs/Web/Performance/Lazy_loading#%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%B5%D0%B3%D0%B8%D0%B8)

Ленивая загрузка (Lazy loading) может применяться к разным ресурсам и разными подходами.

### [Общий подход](https://developer.mozilla.org/ru/docs/Web/Performance/Lazy_loading#%D0%BE%D0%B1%D1%89%D0%B8%D0%B9_%D0%BF%D0%BE%D0%B4%D1%85%D0%BE%D0%B4)

**Разделение кода (code splitting)** JavaScript, CSS и HTML могут быть разделены на небольшие части, называемые чанками (chunks). При первоначальной загрузке приложения вы можете отправлять не цельное приложение, а только необходимые части, например, только каркас разметки. Данные для заполнения этого каркаса могут быть подгружены позже, например, с помощью AJAX. Есть два вида разделения кода:

- Разделение по точкам входа (entrypoint)
- Динамическое ([dynamic import()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/import))

### [JavaScript](https://developer.mozilla.org/ru/docs/Web/Performance/Lazy_loading#javascript)

**Указание типа "module**" Любой тег скрипта с `type="module"` рассматривается как [JavaScript module](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Modules), а его загрузка откладывается по умолчанию.

### [CSS](https://developer.mozilla.org/ru/docs/Web/Performance/Lazy_loading#css)

По умолчанию CSS считается ресурсом, блокирующим рендеринг ([render blocking](https://developer.mozilla.org/ru/docs/Web/Performance/Critical_rendering_path)). Это означает, что браузер не будет отображать контент до тех пор, пока не будет построена объектная модель CSS ([CSSOM](https://developer.mozilla.org/ru/docs/Web/API/CSS_Object_Model)). Поэтому CSS-файл должен быть небольшим, чтобы он был доставлен так быстро, насколько это возможно. Рекомендуется использовать медиавыражения, для того чтобы вместо одного монолитного CSS-файла грузить специализированные.

![[Pasted image 20240612130318.png]]
Также в целях ускорения CSS можно применять оптимизации ([CSS optimizations](https://developer.mozilla.org/en-US/docs/Learn/Performance/CSS "В настоящее время эта страница доступна только на английском языке")).

### [Шрифты](https://developer.mozilla.org/ru/docs/Web/Performance/Lazy_loading#%D1%88%D1%80%D0%B8%D1%84%D1%82%D1%8B)

По умолчанию, загрузка шрифтов откладывается на тот момент, пока дерево рендера (render tree) не сформировано полностью. Это приводит к тому, что текст страницы может появиться не сразу.

Вы можете переопределить такое поведение и загрузить шрифты заранее, используя `<link rel="preload">`, [CSS font-display свойство](https://developer.mozilla.org/ru/docs/Web/CSS/@font-face/font-display) или [Font Loading API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API "В настоящее время эта страница доступна только на английском языке").

Смотрите также: [Element Link](https://developer.mozilla.org/ru/docs/Web/HTML/Element/link)

### [Изображения](https://developer.mozilla.org/ru/docs/Web/Performance/Lazy_loading#%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F)
Очень часто веб-страницы содержат множество изображений, загрузка которых заметно нагружает канал передачи данных и увеличивает длительность загрузки. Подавляющая часть этих изображений находятся за видимой областью экрана и не являются необходимым ([non-critical](https://developer.mozilla.org/ru/docs/Web/Performance/Critical_rendering_path)), а для взаимодействия с пользователем требуют действия (например, прокрутки до них).

**Атрибут Loading** Атрибут [`loading`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/img#loading) элемента [`<img>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/img) (или [`loading`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe "В настоящее время эта страница доступна только на английском языке") атрибут для [`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe "В настоящее время эта страница доступна только на английском языке")) могут быть использованы, чтобы указать браузеру на необходимость отложить загрузку изображений / iframe до тех пор, пока пользователь не доскроллит до них.

![[Pasted image 20240612130512.png]]
Событие `load` запускается, когда все другие необходимые ресурсы были загружены. В это время, возможно (или даже наиболее вероятно), что изображения не будут загружены, даже если пользователь доскроллит до изображений и они будут в [visual viewport](https://developer.mozilla.org/en-US/docs/Glossary/Visual_Viewport "В настоящее время эта страница доступна только на английском языке").

Вы можете определить, было ли загружено то или иное изображение, проверив Boolean значение [`complete`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/complete "В настоящее время эта страница доступна только на английском языке").

**Полифил** Для использованиях в браузерах, которые не поддерживают данную технологию, рекомендуется использовать полифил: [loading-attribute-polyfill](https://github.com/mfranzke/loading-attribute-polyfill)

**Intersection Observer API** [Intersection Observers](https://developer.mozilla.org/ru/docs/Web/API/IntersectionObserver) позволяют вам узнать, как наблюдаемый вами элемент входит или выходит из зоны видимости браузера (viewport).

**Обработчики событий (Event handlers)** Intersection Observer API - относительно молодая технология, которая может не поддерживаться некоторыми устаревшими браузерами. Если поддержка браузеров важна для вас, есть несколько способов получить её:

- [polyfill intersection observer](https://github.com/w3c/IntersectionObserver)
- вы можете вычислять, находится ли элемент во viewport каждый раз при срабатывании событий scroll, resize или orientation change.

## [Смотрите также](https://developer.mozilla.org/ru/docs/Web/Performance/Lazy_loading#%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B8%D1%82%D0%B5_%D1%82%D0%B0%D0%BA%D0%B6%D0%B5)

- [Render blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css)
- [Optimizing loading and rendering](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization#optimizing_loading_and_rendering)
- [Lazy loading images and video](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video)



