---
создал заметку: 2024-07-13
tags:
  - next_js
  - app_router
---
[Lazy loading](https://developer.mozilla.org/docs/Web/Performance/Lazy_loading) in Next.js helps improve the initial loading performance of an application by decreasing the amount of JavaScript needed to render a route.

It allows you to defer loading of **Client Components** and imported libraries, and only include them in the client bundle when they're needed. For example, you might want to defer loading a modal until a user clicks to open it.

Есть два способа реализовать отложенную загрузку в Next.js:

- Использование [Dynamic Imports](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#nextdynamic) с помощью next/dynamic
- Использование React.lazy() с приостановкой
По умолчанию серверные компоненты автоматически  [code split](https://developer.mozilla.org/docs/Glossary/Code_splitting), и вы можете использовать потоковую передачу для постепенной отправки частей пользовательского интерфейса с сервера клиенту. Отложенная загрузка применяется к клиентским компонентам.

## [`next/dynamic`](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#nextdynamic)

`next/dynamic` представляет собой смесь React.lazy() и Suspense. Он ведет себя одинаково в каталогах приложений и страниц, что позволяет выполнить инкрементную миграцию.
## [Examples](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#examples)
### [Importing Client Components](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#importing-client-components)
![[Pasted image 20240713160825.png]]
### [Skipping SSR](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#skipping-ssr)
При использовании React.lazy() и Suspense клиентские компоненты по умолчанию будут предварительно обработаны (SSR).

Если вы хотите отключить предварительную отрисовку для клиентского компонента, вы можете использовать параметр ssr, для которого установлено значение false:

![[Pasted image 20240713160919.png]]
### [Importing Server Components](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#importing-server-components)
Если вы динамически импортируете серверный компонент, ленивой загрузке будут подвергаться только клиентские компоненты, являющиеся дочерними по отношению к серверному компоненту, а не сам серверный компонент.
![[Pasted image 20240713160953.png]]
### [Loading External Libraries](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#loading-external-libraries)
Внешние библиотеки можно загружать по требованию с помощью функции import(). В этом примере для нечеткого поиска используется внешняя библиотека Fuse.js. Модуль загружается на клиенте только после того, как пользователь вводит данные для поиска.
![[Pasted image 20240713161110.png]]
### [Adding a custom loading component](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#adding-a-custom-loading-component)
![[Pasted image 20240713161127.png]]
### [Importing Named Exports](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#importing-named-exports)
Чтобы динамически импортировать именованный экспорт, вы можете вернуть его из обещания, возвращаемого функцией import():
![[Pasted image 20240713161257.png]]
