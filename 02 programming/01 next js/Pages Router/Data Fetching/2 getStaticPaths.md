---
создал заметку: 2024-06-06
tags:
  - next_js
  - pages_router
---
If a page has [Dynamic Routes](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes) and uses `getStaticProps`, it needs to define a list of paths to be statically generated.
Когда вы экспортируете функцию getStaticPaths (генерация статического сайта) со страницы, использующей динамические маршруты, Next.js статически предварительно визуализирует все пути, указанные getStaticPaths.
![[Pasted image 20240606220738.png]]
The [`getStaticPaths` API reference](https://nextjs.org/docs/pages/api-reference/functions/get-static-paths) covers all parameters and props that can be used with `getStaticPaths`.

## [When should I use getStaticPaths?](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths#when-should-i-use-getstaticpaths)
You should use `getStaticPaths` if you’re statically pre-rendering pages that use dynamic routes and:
- The data comes from a headless CMS
- The data comes from a database
- The data comes from the filesystem
- The data can be publicly cached (not user-specific)
- The page must be pre-rendered (for SEO) and be very fast — `getStaticProps`generates `HTML` and `JSON` files, both of which can be cached by a CDN for performance
## [When does getStaticPaths run](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths#when-does-getstaticpaths-run)
`getStaticPaths` will only run during build in production, it will not be called during runtime. You can validate code written inside `getStaticPaths` is removed from the client-side bundle [with this tool](https://next-code-elimination.vercel.app/).
### [How does getStaticProps run with regards to getStaticPaths](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths#how-does-getstaticprops-run-with-regards-to-getstaticpaths)
- `getStaticProps` runs during `next build` for any `paths` returned during build
- `getStaticProps` runs in the background when using `fallback: true`
- `getStaticProps` is called before initial render when using `fallback: blocking`

## [Where can I use getStaticPaths](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths#where-can-i-use-getstaticpaths)
- `getStaticPaths` **must** be used with `getStaticProps`
- You **cannot** use `getStaticPaths` with [`getServerSideProps`](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props)
- You can export `getStaticPaths` from a [Dynamic Route](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes) that also uses `getStaticProps`
- You **cannot** export `getStaticPaths` from non-page file (e.g. your `components`folder)
- You must export `getStaticPaths` as a standalone function, and not a property of the page component

## [Runs on every request in development](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths#runs-on-every-request-in-development)
In development (`next dev`), `getStaticPaths` will be called on every request.

## [Generating paths on-demand](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths#generating-paths-on-demand)
`getStaticPaths` allows you to control which pages are generated during the build instead of on-demand with [`fallback`](https://nextjs.org/docs/pages/api-reference/functions/get-static-paths#fallback-blocking). Generating more pages during a build will cause slower builds.

Вы можете отложить создание всех страниц по требованию, вернув пустой массив для путей. Это может быть особенно полезно при развертывании приложения Next.js в нескольких средах. Например, вы можете ускорить сборку, генерируя все страницы по запросу для предварительного просмотра (но не для рабочих сборок). Это полезно для сайтов с сотнями/тысячами статических страниц.
![[Pasted image 20240606222012.png]]
