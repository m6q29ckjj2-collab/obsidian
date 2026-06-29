---
создал заметку: 2024-06-06
tags:
  - next_js
  - pages_router
---
Если вы экспортируете функцию getStaticProps (генерация статического сайта) со страницы, Next.js предварительно отобразит эту страницу во время сборки, используя реквизиты, возвращаемые getStaticProps.
![[Pasted image 20240606215253.png]]
> [!note] 
> Обратите внимание, что независимо от типа рендеринга любые реквизиты будут переданы компоненту страницы и их можно будет просмотреть на стороне клиента в исходном HTML. Это необходимо для правильного увлажнения страницы. Убедитесь, что вы не передаете конфиденциальную информацию, которая не должна быть доступна на клиенте, в реквизитах.

 The [`getStaticProps` API reference](https://nextjs.org/docs/pages/api-reference/functions/get-static-props) covers all parameters and props that can be used with `getStaticProps`.
 
 ## [When should I use getStaticProps?](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props#when-should-i-use-getstaticprops)
 
 You should use `getStaticProps` if:

- Данные, необходимые для отображения страницы, доступны во время сборки до запроса пользователя.
- The data comes from a headless CMS
- The page must be pre-rendered (for SEO) and be very fast — `getStaticProps`generates `HTML` and `JSON` files, both of which can be cached by a CDN for performance
- Данные могут быть публично кэшированы (не для конкретного пользователя). Это условие можно обойти в определенной конкретной ситуации, используя промежуточное программное обеспечение для перезаписи пути.

## [When does getStaticProps run](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props#when-does-getstaticprops-run)
`getStaticProps` always runs on the server and never on the client. You can validate code written inside `getStaticProps` is removed from the client-side bundle [with this tool](https://next-code-elimination.vercel.app/).
`getStaticProps` always runs on the server and never on the client. You can validate code written inside `getStaticProps` is removed from the client-side bundle [with this tool](https://next-code-elimination.vercel.app/).
- `getStaticProps` always runs during `next build`
- `getStaticProps` runs in the background when using [`fallback: true`](https://nextjs.org/docs/pages/api-reference/functions/get-static-paths#fallback-true)
- `getStaticProps` is called before initial render when using [`fallback: blocking`](https://nextjs.org/docs/pages/api-reference/functions/get-static-paths#fallback-blocking)
- `getStaticProps` runs in the background when using `revalidate`
- `getStaticProps` runs on-demand in the background when using

В сочетании с инкрементной статической регенерацией getStaticProps будет работать в фоновом режиме, пока устаревшая страница проходит повторную проверку, а новая страница передается браузеру.

getStaticProps не имеет доступа к входящему запросу (например, параметрам запроса или заголовкам HTTP), поскольку он генерирует статический HTML. Если вам нужен доступ к запросу вашей страницы, рассмотрите возможность использования промежуточного программного обеспечения в дополнение к getStaticProps.

## [Using getStaticProps to fetch data from a CMS](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props#using-getstaticprops-to-fetch-data-from-a-cms)
![[Pasted image 20240606215749.png]]
The [`getStaticProps` API reference](https://nextjs.org/docs/pages/api-reference/functions/get-static-props) covers all parameters and props that can be used with `getStaticProps`.

## [Write server-side code directly](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props#write-server-side-code-directly)
Поскольку getStaticProps работает только на стороне сервера, он никогда не будет работать на стороне клиента. Он даже не будет включен в пакет JS для браузера, поэтому вы можете писать прямые запросы к базе данных без их отправки в браузеры.

Это означает, что вместо получения маршрута API из getStaticProps (который сам извлекает данные из внешнего источника) вы можете написать серверный код непосредственно в getStaticProps.

Возьмите следующий пример. Маршрут API используется для получения некоторых данных из CMS. Этот маршрут API затем вызывается непосредственно из getStaticProps. Это приводит к дополнительному вызову, снижающему производительность. Вместо этого логику получения данных из CMS можно использовать совместно с помощью каталога lib/. Затем его можно будет использовать с помощью getStaticProps.

![[Pasted image 20240606220044.png]]
![[Pasted image 20240606220100.png]]
В качестве альтернативы, если вы не используете маршруты API для получения данных, API fetch() можно использовать непосредственно в getStaticProps для получения данных.
Чтобы проверить, что Next.js исключает из клиентского пакета, вы можете использовать [next-code-elimination tool](https://next-code-elimination.vercel.app/).
## [Statically generates both HTML and JSON](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props#statically-generates-both-html-and-json)
Когда страница с getStaticProps предварительно отображается во время сборки, в дополнение к HTML-файлу страницы Next.js создает файл JSON, содержащий результат запуска getStaticProps.

Этот файл JSON будет использоваться при маршрутизации на стороне клиента через next/link или next/router. Когда вы переходите на страницу, предварительно обработанную с помощью getStaticProps, Next.js извлекает этот файл JSON (предварительно вычисленный во время сборки) и использует его в качестве реквизита для компонента страницы. Это означает, что переходы страниц на стороне клиента не будут вызывать getStaticProps, поскольку используется только экспортированный JSON.

При использовании добавочной статической генерации getStaticProps будет выполняться в фоновом режиме для генерации JSON, необходимого для навигации на стороне клиента. Вы можете увидеть это в виде нескольких запросов к одной и той же странице, однако это предназначено и не влияет на производительность конечного пользователя.

## [Where can I use getStaticProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props#where-can-i-use-getstaticprops)
getStaticProps можно экспортировать только со страницы. Вы не можете экспортировать его из нестраничных файлов, _app, _document или _error.

Одна из причин этого ограничения заключается в том, что React должен иметь все необходимые данные перед отображением страницы.

Также необходимо использовать экспорт getStaticProps как отдельную функцию — он не будет работать, если вы добавите getStaticProps как свойство компонента страницы.

> [!hint] 
> Если вы создали собственное приложение, убедитесь, что вы передаете pageProps компоненту страницы, как показано в связанном документе, иначе реквизиты будут пустыми.

 ## [Runs on every request in development](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props#runs-on-every-request-in-development)
 In development (`next dev`), `getStaticProps` will be called on every request.
 ## [Preview Mode](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props#preview-mode)
 You can temporarily bypass static generation and render the page at **request time** instead of build time using [**Preview Mode**](https://nextjs.org/docs/pages/building-your-application/configuring/preview-mode). For example, you might be using a headless CMS and want to preview drafts before they're published.
 