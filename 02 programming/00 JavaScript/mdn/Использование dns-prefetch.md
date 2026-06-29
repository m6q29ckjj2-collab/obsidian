---
создал заметку: 2024-06-12
tags:
  - web_performance
---
**`DNS-prefetch`** (предзагрузка DNS) - это попытка определить IP адрес по имени домена до того, как ресурс с этого домена будет фактически запрошен. Это может быть загрузчик файлов, который используется позже или ссылка, по которой, вероятно, перейдёт пользователь.

## [Зачем использовать dns-prefetch?](https://developer.mozilla.org/ru/docs/Web/Performance/dns-prefetch#%D0%B7%D0%B0%D1%87%D0%B5%D0%BC_%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C_dns-prefetch)
Бывают случаи, когда в вашем приложении используются ссылки на домены, отличные от основного домена приложения. Например, внутри вашего приложения на "a.com" есть ссылка на домен "b.org". Для того, чтобы пройти по этой ссылке, пользовательский клиент должен сначала выяснить, какой адрес в интернете соответствует доменному имени "b.org". Этот процесс называется `DNS resolution.` И хотя механизмы кеширования DNS помогают сократить время запросов, DNS Resolution заметно влияет на время ожидания запроса из-за того, что первый клиентский запрос уходит сначала на DNS сервера и дожидается ответа от них. Для приложений, которые открывают соединения ко многим сторонним доменам, влияние DNS Resolution может сильно уменьшить производительность загрузки.

`dns-prefetch` помогает разработчикам замаскировать ожидание DNS resolution. [HTML `<link>`элемент](https://developer.mozilla.org/ru/docs/Web/HTML/Element/link) предлагает подобную функциональность с помощью атрибута [`rel`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel "В настоящее время эта страница доступна только на английском языке"), значение которого может содержать `dns-prefetch`. В этом случае, предзагрузка DNS произойдёт для домена, указанного в атрибуте [href](https://developer.mozilla.org/ru/docs/Web/HTML/Attributes):
## [Синтаксис](https://developer.mozilla.org/ru/docs/Web/Performance/dns-prefetch#%D1%81%D0%B8%D0%BD%D1%82%D0%B0%D0%BA%D1%81%D0%B8%D1%81)
![[Pasted image 20240612173137.png]]
## [Примеры](https://developer.mozilla.org/ru/docs/Web/Performance/dns-prefetch#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B)
![[Pasted image 20240612173151.png]]
Вы должны помещать `dns-prefetch` подсказки в элемент [`<head>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/head) для каждого уникального стороннего домена, с которого могут быть запрошены ресурсы, но нужно держать некоторые детали в голове.
## [Лучшие практики](https://developer.mozilla.org/ru/docs/Web/Performance/dns-prefetch#%D0%BB%D1%83%D1%87%D1%88%D0%B8%D0%B5_%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B8)

Необходимо учитывать 3 вещи:
**Во-первых,** `dns-prefetch` эффективен только для выполнения DNS запросов на сторонние [cross-origin](https://developer.mozilla.org/ru/docs/Web/HTTP/CORS) домены, поэтому следует избегать этой инструкции при попытке загрузить ресурсы с текущего домена. Связано это с тем, что IP вашего домена уже был определён к тому времени, когда браузер увидел эту инструкцию.

**Во-вторых,** существует возможность добавить `dns-prefetch` (и другие подсказки) как [HTTP заголовок](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers) с помощью [HTTP Link field](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link "В настоящее время эта страница доступна только на английском языке"):
![[Pasted image 20240612173322.png]]
**В третьих,** хорошей практикой считается использование `dns-prefetch` в паре с `preconnect`. В то время, как `dns-prefetch` срабатывает только при DNS поиске, `preconnect` устанавливает соединение к нужному серверу. Этот процесс включает в себя DNS resolution, установку TCP соединения и установление безопасного соединения ([TLS](https://developer.mozilla.org/ru/docs/Glossary/TLS) рукопожатие), если оно доступно. Комбинирование этих двух инструкций даёт возможность ещё больше сократить время ожидания для кросс-доменных запросов. Вы можете использовать их вместе таким образом:
![[Pasted image 20240612173343.png]]
> [!info] 
> Примечание если приложению необходимо установить соединение со множеством доменов, использование preconnect контрпродуктивно. `preconnect` лучше использовать для наиболее критических соединений. Для менее важных достаточно использовать `<link rel="dns-prefetch">` для сокращения времени DNS запроса. 

В совместном использовании этих двух техник есть логика. Она заключается в том, что dns-prefetch поддерживается большим количеством браузеров, чем preconnect. Клиенты, которые ещё не поддерживают preconnect, все ещё будут получать бонусы от работы dns-prefetch. Так как эти инструкции относятся к HTML, они очень толерантны к ошибкам. Если какой-то устаревший браузер встречает dns-prefetch, ваш сайт не сломается. Вы просто не получите улучшений от этой инструкции.

Некоторые ресурсы, например, шрифты, загружаются в анонимном режиме. В подобных случаях вы должны указывать [crossorigin](https://developer.mozilla.org/ru/docs/Web/HTML/Attributes/crossorigin) атрибут с инструкцией preconnect. Если вы пропустите её, то браузер выполнит только DNS запрос
## [Смотрите также](https://developer.mozilla.org/ru/docs/Web/Performance/dns-prefetch#%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B8%D1%82%D0%B5_%D1%82%D0%B0%D0%BA%D0%B6%D0%B5)

- [\<link>](https://developer.mozilla.org/ru/docs/Web/HTML/Element/link)
- [HTML атрибут: rel](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel "В настоящее время эта страница доступна только на английском языке")
- [crossorigin](https://developer.mozilla.org/ru/docs/Web/HTML/Attributes/crossorigin)
- [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/ru/docs/Web/HTTP/CORS)
- [HTTP заголовки](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers)
- [HTTP заголовок Link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link "В настоящее время эта страница доступна только на английском языке")
