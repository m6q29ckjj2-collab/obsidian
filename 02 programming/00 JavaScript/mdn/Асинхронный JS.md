---
создал заметку: 2024-06-10
tags:
  - js
---
## [Промисы](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Asynchronous/Introducing#%D0%BF%D1%80%D0%BE%D0%BC%D0%B8%D1%81%D1%8B)
![[Pasted image 20240610210529.png]]
В примере видно, как `fetch()` принимает один параметр — URL ресурса, который нужно получить из сети, — и возвращает [промис](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise). Промис — это объект, представляющий асинхронную операцию, выполненную удачно или неудачно. Он представляет собой как бы промежуточное состояние. По сути, это способ браузера сказать: "я обещаю вернуться к вам с ответом как можно скорее", поэтому в дословном переводе "промис" (promise) означает "обещание".
> [!important] 
> - Два [`then()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) блока. Оба включают в себя функцию обратного вызова, которая запустится, если предыдущая операция закончилась успешно, и каждая колбэк-функция принимает на вход результат предыдущей успешно выполненной операции, таким образом вы можете выполнять операции последовательно. <mark style="background: #FF5582A6;">Каждый `.then()` блок возвращает новый promise</mark>, это значит что вы можете объединять в цепочки блоки `.then()`, таким образом можно выполнить несколько асинхронных операций по порядку, одну за другой.
> - [`catch()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) блок описывается в конце и будет запущен если какой-либо `.then()` блок завершится с ошибкой — это аналогично синхронному [`try...catch`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/try...catch), ошибка становится доступной внутри `catch()`, что может быть использовано для сообщения пользователю о типе возникшей ошибки. Однако <mark style="background: #FF5582A6;">синхронный `try...catch` не будет работать с promise, хотя будет работать с [async/await](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Asynchronous/Promises)</mark>, с которыми вы познакомитесь позже.

### [Очередь событий](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Asynchronous/Introducing#%D0%BE%D1%87%D0%B5%D1%80%D0%B5%D0%B4%D1%8C_%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B9)
Асинхронные операции, такие как промисы, помещаются в **очередь событий**, которая запускается после завершения обработки основного потока, чтобы они _не блокировали_выполнение JavaScript-кода. Поставленные в очередь операции завершатся как можно скорее, а затем вернут свои результаты в среду JavaScript.

### [Промисы и колбэк-функции](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Asynchronous/Introducing#%D0%BF%D1%80%D0%BE%D0%BC%D0%B8%D1%81%D1%8B_%D0%B8_%D0%BA%D0%BE%D0%BB%D0%B1%D1%8D%D0%BA-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8)
Промисы имеют некоторое сходство со старомодными колбэк-функциями. По сути, они являются возвращаемым объектом, к которому вы присоединяете колбэк-функции, вместо того, чтобы передавать колбэки в функцию.

Тем не менее, промисы сделаны специально для обработки асинхронных операций, и имеют много преимуществ по сравнению с колбэками:

- Вы можете объединить несколько асинхронных операций вместе, используя несколько операций`.then()`, передавая результат одного в следующий в качестве входных данных. Это гораздо сложнее сделать с колбэками, которые часто заканчиваются массивным «адом колбэков» (также известным как [callback hell](http://callbackhell.com/)).
- Обратные вызовы Promise всегда вызываются в строгом порядке, который они помещают в очередь событий..
- Обработка ошибок намного лучше — все ошибки обрабатываются одним блоком `.catch ()`в конце блока, а не обрабатываются индивидуально на каждом уровне «пирамиды».
- Промисы избегают инверсии управления, в отличие от колбэков, которые теряют полный контроль над тем, как будет выполняться функция при передаче колбэка в стороннюю библиотеку.

## async and await
На самом деле, эти функции есть ничего иное как синтаксический сахар над Promises и Generator functions
### [Ключевое слово async](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Asynchronous/Promises#%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%B2%D0%BE%D0%B5_%D1%81%D0%BB%D0%BE%D0%B2%D0%BE_async)
Ключевое слово `async` позволяет сделать из обычной функции (function declaration или function expression) асинхронную функцию ([async function](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/async_function)). Такая функция делает две вещи: - Оборачивает возвращаемое значение в Promise - Позволяет использовать ключевое слово await (см. дальше)

Чтобы получить значение, которое возвращает Promise, мы как обычно можем использовать метод `.then()`:

![[Pasted image 20240610222511.png]]
Итак, ключевое слово `async`, превращает обычную функцию в асинхронную и результат вызова функции оборачивает в Promise. Также асинхронная функция позволяет использовать в своём теле ключевое слово `await`, о котором далее.

### [Ключевое слово await](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Asynchronous/Promises#%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%B2%D0%BE%D0%B5_%D1%81%D0%BB%D0%BE%D0%B2%D0%BE_await)
Асинхронные функции становятся по настоящему мощными, когда вы используете ключевое слово [`await`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/await) — по факту, **`await` работает только в асинхронных функциях**. Мы можем использовать `await` перед promise-based функцией, чтобы остановить поток выполнения и дождаться результата её выполнения (результат Promise). В то же время, остальной код нашего приложения не блокируется и продолжает работать.

Вы можете использовать `await` перед любой функцией, которая возвращает Promise, включая Browser API функции.
![[Pasted image 20240610222612.png]]
## [Переписываем Promises с использованием async/await](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Asynchronous/Promises#%D0%BF%D0%B5%D1%80%D0%B5%D0%BF%D0%B8%D1%81%D1%8B%D0%B2%D0%B0%D0%B5%D0%BC_promises_%D1%81_%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%D0%BC_asyncawait)

### [Минуточку, а как это все работает?](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Asynchronous/Promises#%D0%BC%D0%B8%D0%BD%D1%83%D1%82%D0%BE%D1%87%D0%BA%D1%83_%D0%B0_%D0%BA%D0%B0%D0%BA_%D1%8D%D1%82%D0%BE_%D0%B2%D1%81%D0%B5_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82)
Вы могли заметить, что мы обернули наш код в функцию и сделали её асинхронной с помощью `async`. Это было обязательно – нам надо создать контейнер, внутри которого будет запускаться асинхронный код, и будет возможность дождаться его результата с помощью await, не блокируя остальной код нашего скрипта.

Внутри `myFetch()` находится код, который слегка напоминает версию на Promise, но есть важные отличия. Вместо того, чтобы писать цепочку блоков `.then()` мы просто использует ключевое слово `await` перед вызовом promise-based функции и присваиваем результат в переменную. Ключевое слово `await` говорит JavaScript runtime приостановить код в этой строке, не блокируя остальной код скрипта за пределами асинхронной функции. Когда вызов promise-based функции будет готов вернуть результат, выполнение продолжится с этой строки дальше.

![[Pasted image 20240610222839.png]]

## [Await и Promise.all()](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Asynchronous/Promises#await_%D0%B8_promise.all)
Как вы помните, асинхронные функции построены поверх [promises](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise), поэтому они совместимы со всеми возможностями последних. Мы легко можем подождать выполнение [`Promise.all()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), присвоить результат в переменную и все это сделать используя синхронный стиль.

Версия с `async`/`await` (смотрите [live demo](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/promise-all-async-await.html) и [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/promise-all-async-await.html)) выглядит так:

Взгляните на строку с `Promise.all()`:
![[Pasted image 20240610223052.png]]
С помощью `await` мы ждём массив результатов всех трёх Promises и присваиваем его в переменную `values`. Это асинхронный код, но он написан в синхронном стиле, за счёт чего он гораздо читабельнее.

Мы должны обернуть весь код в асинхронную функцию, `displayContent()`, и мы не сильно сэкономили на количестве кода, но мы извлекли код блока `.then()`, за счёт чего наш код стал гораздо чище.

Для обработки ошибок мы добавили блок `.catch()` для функции `displayContent()`; Это позволило нам отловить ошибки в обоих функциях.
> [!info] 
> **Примечание:** Мы также можем использовать синхронный блок [`finally`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_clause) внутри асинхронной функции, вместо асинхронного `.finally()`, чтобы получить информацию о результате нашей операции — смотрите в действии в нашем [live example](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/promise-finally-async-await.html)(смотрите [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/promise-finally-async-await.html)).

 ## [Недостатки async/await](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Asynchronous/Promises#%D0%BD%D0%B5%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D1%82%D0%BA%D0%B8_asyncawait)
 Асинхронные функции с `async`/`await` бывают очень удобными, но есть несколько замечаний, о которых полезно знать.
 
 `async`/`await` позволяет вам писать код в синхронном стиле. Ключевое слово `await` блокирует приостанавливает выполнение promise-based функции до того момента, пока promise примет статус fulfilled. Это не блокирует код за пределами вашей асинхронной функции, тем не менее важно помнить, что внутри асинхронной функции поток выполнения блокируется.

Ваш код может стать медленнее за счёт большого количества awaited promises, которые идут один за другим. Каждый `await` должен дождаться выполнения предыдущего, тогда как на самом деле мы хотим, чтобы наши Promises выполнялись одновременно, как если бы мы не использовали async/await.

Есть подход, который позволяет обойти эту проблему — сохранить все выполняющиеся Promises в переменные, а уже после этого дожидаться (awaiting) их результата. Давайте посмотрим на несколько примеров.

Мы подготовили два примера — [slow-async-await.html](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/slow-async-await.html) (см. [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/slow-async-await.html)) и [fast-async-await.html](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/fast-async-await.html) (см. [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/fast-async-await.html)). Они оба начинаются с функции возвращающей promise, имитирующей асинхронность процессов при помощи вызова [`setTimeout()`](https://developer.mozilla.org/ru/docs/Web/API/setTimeout):
![[Pasted image 20240610223307.png]]
Далее в каждом примере есть асинхронная функция `timeTest()` ожидающая три вызова `timeoutPromise()`:
![[Pasted image 20240610223327.png]]
В каждом примере функция записывает время начала исполнения и сколько времени понадобилось на исполнение `timeTest()` промисов, вычитая время в момент запуска функции из времени в момент разрешения промисов:
![[Pasted image 20240610223404.png]]
Далее представлена асинхронная функция `timeTest()` различная для каждого из примеров.

В случае с медленным примером `slow-async-await.html`, `timeTest()` выглядит:
![[Pasted image 20240610223421.png]]
Здесь мы просто ждём все три `timeoutPromise()` напрямую, блокируя выполнение на данного блока на 3 секунды при каждом вызове. Все последующие вызовы вынуждены ждать пока разрешится предыдущий. Если вы запустите первый пример ([`slow-async-await.html`](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/slow-async-await.html)), то увидите `alert` сообщающий время выполнения около 9 секунд.

Во втором [`fast-async-await.html`](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/fast-async-await.html) примере, функция `timeTest()` выглядит так:
![[Pasted image 20240610223502.png]]
В данном случае мы храним три объекта `Promise` в переменных, каждый из которых может разрешиться независимо от других.

Ниже мы ожидаем разрешения промисов из объекта в результат. Так как они были запущенны одновременно, блокируя поток, то и разрешатся одновременно. Если вы запустите второй пример вы увидите `alert`, сообщающий время выполнения около 3 секунд.

Важно не забывать о быстродействии применяя `await`, проверяйте количество блокировок.

## [Async/await class methods](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Asynchronous/Promises#asyncawait_class_methods)
В качестве последнего замечания, вы можете использовать `async` перед методами классов или объектов, вынуждая их возвращать promises. А также `await` внутри методов объявленных таким образом. Посмотрите на пример [ES class code, который мы видели в статье object-oriented JavaScript](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#ecmascript_2015_classes) и сравните его с модифицированной (асинхронной) `async` версией ниже:

![[Pasted image 20240610223622.png]]
Первый метод класса теперь можно использовать таким образом:
![[Pasted image 20240610224355.png]]
# How to implement a promise-based API
В прошлой статье мы обсуждали, как использовать API, которые возвращают promises. В этой статье мы рассмотрим другую сторону — как реализовать API, которые возвращают promises. Это гораздо менее распространенная задача, чем использование API, основанных на promise, но все же о ней стоит знать.

## [Implementing an alarm() API](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API#implementing_an_alarm_api)
In the example below, we call `setTimeout()` with a callback function and a delay of 1000 milliseconds:
![[Pasted image 20240611113113.png]]
### [The Promise() constructor](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API#the_promise_constructor)
Наша функция Alarm() вернет обещание, которое будет выполнено по истечении времени таймера. Пройдёт «Просыпайся!» сообщение в обработчик then() и отклонит обещание, если вызывающая сторона предоставит отрицательное значение задержки.

The key component here is the [`Promise()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) constructor. The `Promise()` constructor takes a single function as an argument. We'll call this function the `executor`. When you create a new promise you supply the implementation of the executor.

This executor function itself takes two arguments, which are both also functions, and which are conventionally called `resolve` and `reject`. In your executor implementation, you call the underlying asynchronous function. If the asynchronous function succeeds, you call `resolve`, and if it fails, you call `reject`. If the executor function throws an error, `reject` is called automatically. You can pass a single parameter of any type into `resolve` and `reject`.

So we can implement `alarm()` like this:
![[Pasted image 20240611113405.png]]

Эта функция создает и возвращает новое `Promise`. Внутри исполнителя обещания мы:

- check that `delay` is not negative, and throw an error if it is.
- вызов `setTimeout()`, передача обратного вызова и `delay`. Обратный вызов будет вызван по истечении таймера, и в обратном вызове мы вызываем `resolve`, передавая наш `"Wake up!"`сообщение

## [Using the alarm() API](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API#using_the_alarm_api)
Эта часть должна быть вам хорошо знакома из прошлой статьи. Мы можем вызвать Alarm(), а по возвращенному обещанию вызвать then() и catch(), чтобы установить обработчики для выполнения и отклонения обещания.

![[Pasted image 20240611113610.png]]

## [Using async and await with the alarm() API](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API#using_async_and_await_with_the_alarm_api)
Since `alarm()` returns a `Promise`, we can do everything with it that we could do with any other promise: promise chaining, `Promise.all()`, and `async` / `await`:

![[Pasted image 20240611113756.png]]
## See also
- [[Using Promises]]
- 