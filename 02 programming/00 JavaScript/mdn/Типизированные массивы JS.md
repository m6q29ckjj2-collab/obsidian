---
создал заметку: 2024-06-11
tags:
  - js
---
Типизированные массивы в JavaScript являются массивоподобными объектами, предоставляющими механизм доступа к сырым двоичным данным. Как вы уже можете знать, массив [`Array`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array) растёт и обрезается динамически, и может содержать элементы любого типа JavaScript. Благодаря оптимизациям JavaScript движков, массивы остаются быстрыми. Однако, со временем, веб-приложения становятся все более и более мощными, появляется необходимость работы с аудио- и видео-данными, требуется доступ к сырым данным WebSocket, и так далее. Становится очевидным, что возможность быстрой и эффективной работы с двоичными данными в JavaScript будет очень полезной, для чего типизированные массивы и предназначены

Не следует путать типизированные массивы с обычными массивами: так, например, вызов [`Array.isArray()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) для типизированного массива вернёт `false`. Более того, не все методы, доступные для обычных массивов поддерживаются типизированными массивами (например, push и pop).

## [Буферы и представления: архитектура типизированных массивов](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Typed_arrays#%D0%B1%D1%83%D1%84%D0%B5%D1%80%D1%8B_%D0%B8_%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%B0_%D1%82%D0%B8%D0%BF%D0%B8%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D1%85_%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%BE%D0%B2)
Для достижения максимальной гибкости и производительности, реализация типизированных массивов в JavaScript разделена на **буферы** и **представления**. Буфер ([`ArrayBuffer`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)) –– это объект, представляющий из себя набор данных. Он не имеет формата и не предоставляет возможности доступа к своему содержимому. Для доступа к памяти буфера вам нужно использовать представление. Представление предоставляет контекст: тип данных, начальную позицию в буфере и количество элементов. Это позволяет представить данные в виде типизированного массива.
![[Pasted image 20240611125621.png]]
### [ArrayBuffer](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Typed_arrays#arraybuffer)
Объект [`ArrayBuffer`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) –– это набор бинарных данных с фиксированной длиной. Вы не можете манипулировать содержимым `ArrayBuffer` напрямую. Вместо этого, необходимо создать типизированное представление [`DataView`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/DataView), которое будет отображать буфер в определённом формате, и даст доступ на запись и чтение его содержимого.
### [Типизированные представления](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Typed_arrays#%D1%82%D0%B8%D0%BF%D0%B8%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5_%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F)
Название типизированного представления массива говорит само за себя. Оно представляет массив в распространённых числовых форматах, таких как `Int8`, `Uint32`, `Float64` и так далее. Среди прочих, существует специальное представление `Uint8ClampedArray`. Оно ограничивает значения интервалом от 0 до 255. Это полезно, например, при [Обработке данных изображения в Canvas](https://developer.mozilla.org/ru/docs/Web/API/ImageData).

### [DataView](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Typed_arrays#dataview)
Объект [`DataView`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/DataView) –– это низкоуровневый интерфейс, предоставляющий API для записи/чтения произвольных данных в буфер. Это полезно при работе с различными типами данных, например. В то время как типизированные представления всегда имеют порядок байт (смотрите [Endianness](https://developer.mozilla.org/en-US/docs/Glossary/Endianness "В настоящее время эта страница доступна только на английском языке")) соответствующий используемому в вашей операционной системе, `DataView` позволяет контроллировать порядок байт (byte-order). По умолчанию это big-endian, но через API можно установить little-endian.

## [Веб API, использующие типизированные массивы](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Typed_arrays#%D0%B2%D0%B5%D0%B1_api_%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D1%8E%D1%89%D0%B8%D0%B5_%D1%82%D0%B8%D0%BF%D0%B8%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5_%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D1%8B)

[`FileReader.prototype.readAsArrayBuffer()`](https://developer.mozilla.org/ru/docs/Web/API/FileReader#readasarraybuffer())

Метод `FileReader.prototype.readAsArrayBuffer()` читает содержимое заданного [`Blob`](https://developer.mozilla.org/ru/docs/Web/API/Blob) или [`File`](https://developer.mozilla.org/ru/docs/Web/API/File).

[`XMLHttpRequest.prototype.send()`](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest#send())

Метод `send()` экземпляра `XMLHttpRequest` теперь поддерживает в качестве аргумента [`ArrayBuffer`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

[`ImageData.data`](https://developer.mozilla.org/ru/docs/Web/API/ImageData)

Имеет тип [`Uint8ClampedArray`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray) и представляет изображение в виде одномерного массива, где цветовые компоненты расположены в порядке RGBA, и их значения принудительно ограничены диапазоном от 0 до 255.

## [Примеры](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Typed_arrays#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B)
### [Использование представлений с буферами](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Typed_arrays#%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B9_%D1%81_%D0%B1%D1%83%D1%84%D0%B5%D1%80%D0%B0%D0%BC%D0%B8)

Прежде всего, необходимо создать буфер с фиксированной длиной 16 байт:

![[Pasted image 20240611130007.png]]
На данном этапе мы имеем область памяти в 16 байт, инициализированной нулевыми значениями. Всё, что мы можем сделать сейчас, это убедиться, что длина буфера действительно 16 байт:
![[Pasted image 20240611130021.png]]
Прежде чем мы сможем приступить к полноценной работе с памятью, нам нужно создать представление. Давайте создадим представление, которое отображает буфер как массив из 32-битных целочисленных значений со знаком:
![[Pasted image 20240611130036.png]]
Теперь мы можем получить доступ к элементам представления как к элементам обычного массива:
![[Pasted image 20240611130253.png]]
Этот код поместит 4 элемента в буфер (4 элемента по 4 байта даст 16 байт) со следующими значениям: `0`, `2`, `4` и `6`.
### [Множество представлений для одних и тех же данных](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Typed_arrays#%D0%BC%D0%BD%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%BE_%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B9_%D0%B4%D0%BB%D1%8F_%D0%BE%D0%B4%D0%BD%D0%B8%D1%85_%D0%B8_%D1%82%D0%B5%D1%85_%D0%B6%D0%B5_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85)
Всё становится намного интереснее, если создать несколько разных представлений для одного и того же буфера. Например, приведённый выше код можно дополнить следующим образом:

![[Pasted image 20240611130348.png]]

Здесь мы создаём 16-битное целочисленное представление, которое ссылается на тот же самый буфер, что и 32-битное представление, и затем выводим все 16-битные элементы этого представления. Мы получим следующий вывод: 0, 0, 2, 0, 4, 0, 6, 0.

Можно пойти дальше. Оцените этот код:
![[Pasted image 20240611130426.png]]
Результатом выполнения станет текст: "Элемент 0 в 32-битном представлении теперь равен 32". Другими словами, два массива на самом деле являются лишь разными представлениями одного и того же буфера данных в разных форматах. Вы можете повторить это с [представлениями](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) любого типа.
### [Работа со сложными структурами данных](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Typed_arrays#%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0_%D1%81%D0%BE_%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D1%8B%D0%BC%D0%B8_%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0%D0%BC%D0%B8_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85)
Комбинируя буфер и множество представлений разного формата, имеющих разные смещения относительно начала буфера, можно управляться с объектами содержащими разнородные данные. Это позволяет, к примеру, взаимодействовать со сложными структурам из [WebGL](https://developer.mozilla.org/ru/docs/Web/API/WebGL_API), файлами данных или структурами языка C ([сопоставление данных JS и C](https://developer.mozilla.org/ru/docs/Mozilla/js-ctypes "This is a link to an unwritten page")).

Рассмотрим следующую структуру из языка C:
![[Pasted image 20240611130447.png]]
Получить доступ к полям этой структуры можно следующим образом:
![[Pasted image 20240611130500.png]]
Теперь получить или изменить значение поля `amountDue`, к примеру, можно путём обращения к `amountDueView[0]`.
> [!info] 
> **Примечание:** [Выравнивание данных](https://ru.wikipedia.org/wiki/%D0%92%D1%8B%D1%80%D0%B0%D0%B2%D0%BD%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85) в языке C является платформозависимым. Принимайте меры по вычислению правильных отступов в данных с учётом выравнивания.

 ### [Преобразование в обычные массивы](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Typed_arrays#%D0%BF%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B2_%D0%BE%D0%B1%D1%8B%D1%87%D0%BD%D1%8B%D0%B5_%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D1%8B)

Иногда после обработки типизированного массива бывает полезно конвертировать его в обычный массив, чтобы получить доступ к методам прототипа [`Array`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array). Для этих целей существует метод [`Array.from`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/from). А в тех случаях, когда `Array.from` не поддерживается, используйте следующий код:
![[Pasted image 20240611130526.png]]
## [Смотрите также](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Typed_arrays#%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B8%D1%82%D0%B5_%D1%82%D0%B0%D0%BA%D0%B6%D0%B5)

- [Получение `ArrayBuffer`s и типизированных массивов из _Base64 кодировки_](https://developer.mozilla.org/en-US/docs/Glossary/Base64#appendix.3a_decode_a_base64_string_to_uint8array_or_arraybuffer "В настоящее время эта страница доступна только на английском языке")
- [`StringView` – библиотека для работы со строками в стиле языка С, основанная на типизированных массивах](https://developer.mozilla.org/ru/docs/Code_snippets/StringView "This is a link to an unwritten page")
- [Быстрая работа с пикселями Canvas через типизированные массивы](https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays)
- [Типизированные массивы: Двоичные данные в браузере](https://www.html5rocks.com/en/tutorials/webgl/typed_arrays)
- [Endianness](https://developer.mozilla.org/en-US/docs/Glossary/Endianness "В настоящее время эта страница доступна только на английском языке")
