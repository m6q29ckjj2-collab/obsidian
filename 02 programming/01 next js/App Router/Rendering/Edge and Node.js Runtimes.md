---
создал заметку: 2024-07-12
tags:
  - app_router
  - next_js
---
В контексте Next.js под средой выполнения понимается набор библиотек, API и общих функций, доступных вашему коду во время выполнения.

 На сервере есть две среды выполнения, в которых могут отображаться части кода вашего приложения:
- Среда выполнения Node.js (по умолчанию) имеет доступ ко всем API-интерфейсам Node.js и совместимым пакетам из экосистемы.
- Edge Runtime основан на веб-API.

## [Runtime Differences](https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes#runtime-differences)
При выборе среды выполнения необходимо учитывать множество факторов. В этой таблице кратко показаны основные различия. Если вам нужен более глубокий анализ различий, ознакомьтесь с разделами ниже.
![[Pasted image 20240712120313.png]]
### [Edge Runtime](https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes#edge-runtime)

В Next.js облегченная среда Edge Runtime представляет собой подмножество доступных API Node.js.

Edge Runtime идеально подходит, если вам нужно доставлять динамичный персонализированный контент с низкой задержкой с помощью небольших простых функций. Скорость Edge Runtime обусловлена ​​минимальным использованием ресурсов, но во многих сценариях это может быть ограничением.

Например, размер кода, выполняемого в Edge Runtime на Vercel, [on Vercel cannot exceed between 1 MB and 4 MB](https://vercel.com/docs/concepts/limits/overview#edge-middleware-and-edge-functions-size). Этот предел включает импортированные пакеты, шрифты и файлы и будет варьироваться в зависимости от вашей инфраструктуры развертывания. Кроме того, среда выполнения Edge поддерживает не все API-интерфейсы Node.js, а это означает, что некоторые пакеты npm могут не работать. Например, «Модуль не найден: невозможно разрешить «fs»» или подобные ошибки. Мы рекомендуем использовать среду выполнения Node.js, если вам нужно использовать эти API или пакеты.

### [Node.js Runtime](https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes#nodejs-runtime)
Использование среды выполнения Node.js дает вам доступ ко всем API-интерфейсам Node.js и всем пакетам npm, которые на них полагаются. Однако его запуск происходит не так быстро, как маршруты, использующие среду выполнения Edge.

Развертывание приложения Next.js на сервере Node.js потребует управления, масштабирования и настройки вашей инфраструктуры. Альтернативно вы можете рассмотреть возможность развертывания приложения Next.js на бессерверной платформе, такой как Vercel, которая сделает это за вас.

### [Serverless Node.js](https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes#serverless-nodejs)
Бессерверное решение идеально подходит, если вам нужно масштабируемое решение, способное обрабатывать более сложные вычислительные нагрузки, чем Edge Runtime. Например, при использовании бессерверных функций на Vercel общий размер кода составляет 50 МБ, включая импортированные пакеты, шрифты и файлы.

Недостатком по сравнению с маршрутами, использующими Edge, является то, что бессерверным функциям могут потребоваться сотни миллисекунд для загрузки, прежде чем они начнут обрабатывать запросы. В зависимости от объема трафика, который получает ваш сайт, это может быть частым явлением, поскольку функции не часто бывают «горячими».

## [Examples](https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes#examples)
### [Segment Runtime Option](https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes#segment-runtime-option)
Вы можете указать время выполнения для отдельных сегментов маршрута в приложении Next.js. Для этого  [declare a variable called `runtime` and export it](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config). Переменная должна быть строкой и иметь значение времени выполнения «nodejs» или «edge».

В следующем примере показан сегмент маршрута страницы, который экспортирует среду выполнения со значением «edge»:

![[Pasted image 20240712120815.png]]
Вы также можете определить время выполнения на уровне макета, что приведет к тому, что все маршруты в макете будут выполняться во время выполнения пограничного уровня:

![[Pasted image 20240712120835.png]]

> [!faq] 
> Полный список доступных API см. в документации  [Node.js Docs](https://nodejs.org/docs/latest/api/) and [Edge Docs](https://nextjs.org/docs/app/api-reference/edge). Обе среды выполнения также могут поддерживать  [streaming](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming) в зависимости от вашей инфраструктуры развертывания. 