---
создал заметку: 2024-06-08
tags:
  - next_js
---
Формы позволяют создавать и обновлять данные в веб-приложениях. Next.js предоставляет мощный способ обработки отправки форм и изменения данных с помощью API-маршрутов.
> [!important] 
>  Good to know
>  - Вскоре мы порекомендуем [incrementally adopting](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration) App Router и использовать действия сервера для обработки отправки форм и изменения данных. Действия сервера позволяют вам определять асинхронные функции сервера, которые можно вызывать непосредственно из ваших компонентов без необходимости вручную создавать маршрут API.
>  - Маршруты API не указывают заголовки CORS, то есть они имеют одно и то же происхождение только по умолчанию.
>  - Поскольку маршруты API выполняются на сервере, мы можем использовать конфиденциальные значения (например, ключи API) через переменные среды, не раскрывая их клиенту. Это критично для безопасности вашего приложения.

## [Examples](https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations#examples)
### [Server-only form](https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations#server-only-form)
With the Pages Router, you need to manually create API endpoints to handle securely mutating data on the server.
![[Pasted image 20240608233331.png]]
Then, call the API Route from the client with an event handler:
![[Pasted image 20240609110947.png]]
## [Form validation](https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations#form-validation)
We recommend using HTML validation like `required` and `type="email"` for basic client-side form validation.
Для более продвинутой проверки на стороне сервера вы можете использовать библиотеку проверки схемы, например zod, для проверки полей формы перед изменением данных:
![[Pasted image 20240609111210.png]]
### [Error handling](https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations#error-handling)
You can use React state to show an error message when a form submission fails:
![[Pasted image 20240609111255.png]]
## [Displaying loading state](https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations#displaying-loading-state)
![[Pasted image 20240609111437.png]]
### [Redirecting](https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations#redirecting)
f you would like to redirect the user to a different route after a mutation, you can [`redirect`](https://nextjs.org/docs/pages/building-your-application/routing/api-routes#response-helpers) to any absolute or relative URL:
![[Pasted image 20240609111511.png]]
### [Setting cookies](https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations#setting-cookies)
You can set cookies inside an API Route using the `setHeader` method on the response:
![[Pasted image 20240609111610.png]]
### [Reading cookies](https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations#reading-cookies)
You can read cookies inside an API Route using the [`cookies`](https://nextjs.org/docs/pages/building-your-application/routing/api-routes#request-helpers) request helper:
![[Pasted image 20240609111705.png]]
### [Deleting cookies](https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations#deleting-cookies)
You can delete cookies inside an API Route using the `setHeader` method on the response:
![[Pasted image 20240609111846.png]]
