---
создал заметку: 2024-07-13
tags:
  - next_js
  - app_router
---
Эта функция является экспериментальной, вам необходимо явно дать свое согласие, указав Experiment.instrumentationHook = true; в вашем next.config.js.

Наблюдаемость имеет решающее значение для понимания и оптимизации поведения и производительности вашего приложения Next.js.

Поскольку приложения становятся более сложными, становится все труднее выявлять и диагностировать проблемы, которые могут возникнуть. Используя инструменты наблюдения, такие как ведение журналов и метрики, разработчики могут получить представление о поведении своего приложения и определить области для оптимизации. Благодаря наблюдаемости разработчики могут активно решать проблемы до того, как они станут серьезными, и обеспечивать лучший пользовательский опыт. Поэтому настоятельно рекомендуется использовать возможность наблюдения в ваших приложениях Next.js, чтобы повысить производительность, оптимизировать ресурсы и улучшить взаимодействие с пользователем.

Мы рекомендуем использовать OpenTelemetry для инструментирования ваших приложений. Это независимый от платформы способ инструментирования приложений, который позволяет вам менять поставщика наблюдаемости без изменения кода. Прочтите официальную документацию  [Official OpenTelemetry docs](https://opentelemetry.io/docs/) для получения дополнительной информации об OpenTelemetry и о том, как она работает.

В этой документации используются такие термины, как Span, Trace или Exporter, все из которых можно найти в учебнике по наблюдаемости OpenTelemetry.

Next.js поддерживает инструментарий  [the OpenTelemetry Observability Primer](https://opentelemetry.io/docs/concepts/observability-primer/) «из коробки», а это означает, что мы уже оснастили сам Next.js. Когда вы включаете OpenTelemetry, мы автоматически обертываем весь ваш код, например getStaticProps, в промежутки с полезными атрибутами.

## [Getting Started](https://nextjs.org/docs/app/building-your-application/optimizing/open-telemetry#getting-started)
OpenTelemetry расширяема, но ее правильная настройка может оказаться весьма многословной. Именно поэтому мы подготовили пакет @vercel/otel, который поможет вам быстро начать работу.

### [Using `@vercel/otel`](https://nextjs.org/docs/app/building-your-application/optimizing/open-telemetry#using-vercelotel)

To get started, you must install `@vercel/otel`:
![[Pasted image 20240713172151.png]]
Затем создайте собственный файл [`instrumentation.ts`](https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation) (или .js) в корневом каталоге проекта (или в папке src, если он используется):
![[Pasted image 20240713172218.png]]
See the [`@vercel/otel` documentation](https://www.npmjs.com/package/@vercel/otel) for additional configuration options.
> [!note] Good to know
> - Файл инструментов должен находиться в корне вашего проекта, а не в каталоге приложения или страниц. Если вы используете папку src, поместите файл внутри src рядом со страницами и приложением.
> - Если вы используете [`pageExtensions` config option](https://nextjs.org/docs/app/api-reference/next-config-js/pageExtensions) для добавления суффикса, вам также потребуется обновить имя файла инструментов, чтобы оно соответствовало.
> - Мы создали базовый пример  [with-opentelemetry](https://github.com/vercel/next.js/tree/canary/examples/with-opentelemetry), который вы можете использовать.

### [Manual OpenTelemetry configuration](https://nextjs.org/docs/app/building-your-application/optimizing/open-telemetry#manual-opentelemetry-configuration)
Пакет @vercel/otel предоставляет множество вариантов конфигурации и подходит для большинства распространенных случаев использования. Но если это не соответствует вашим потребностям, вы можете настроить OpenTelemetry вручную.

Сначала вам необходимо установить пакеты OpenTelemetry:
```js
npm install @opentelemetry/sdk-node @opentelemetry/resources @opentelemetry/semantic-conventions @opentelemetry/sdk-trace-node @opentelemetry/exporter-trace-otlp-http
```
Теперь вы можете инициализировать NodeSDK в файле Instrumentation.ts. В отличие от @vercel/otel, NodeSDK несовместим с Edge Runtime, поэтому вам необходимо убедиться, что вы импортируете их только тогда, когда процесс.env.NEXT_RUNTIME === 'nodejs'. Мы рекомендуем создать новый файл Instrumentation.node.ts, который вы условно импортируете только при использовании узла:

![[Pasted image 20240713172534.png]]
![[Pasted image 20240713172601.png]]
Это эквивалентно использованию @vercel/otel, но можно изменить и расширить некоторые функции, которые не предоставляются @vercel/otel. Если необходима поддержка Edge Runtime, вам придется использовать @vercel/otel.

## [Testing your instrumentation](https://nextjs.org/docs/app/building-your-application/optimizing/open-telemetry#testing-your-instrumentation)
Вам понадобится сборщик OpenTelemetry с совместимым серверным компонентом для локального тестирования трассировок OpenTelemetry. Мы рекомендуем использовать [OpenTelemetry dev environment](https://github.com/vercel/opentelemetry-collector-dev-setup).

Если все работает хорошо, вы сможете увидеть диапазон корневого сервера, помеченный как GET /requested/pathname. Все остальные промежутки из этой конкретной трассировки будут вложены в нее.

Next.js отслеживает больше интервалов, чем выдается по умолчанию. Чтобы увидеть больше диапазонов, необходимо установить NEXT_OTEL_VERBOSE=1.

## [Deployment](https://nextjs.org/docs/app/building-your-application/optimizing/open-telemetry#deployment)
### [Using OpenTelemetry Collector](https://nextjs.org/docs/app/building-your-application/optimizing/open-telemetry#using-opentelemetry-collector)
При развертывании с помощью OpenTelemetry Collector вы можете использовать @vercel/otel. Он будет работать как на Vercel, так и при самостоятельном размещении.
#### [Deploying on Vercel](https://nextjs.org/docs/app/building-your-application/optimizing/open-telemetry#deploying-on-vercel)
Мы убедились, что OpenTelemetry работает «из коробки» на Vercel.
Follow [Vercel documentation](https://vercel.com/docs/concepts/observability/otel-overview/quickstart) to connect your project to an observability provider.
#### [Self-hosting](https://nextjs.org/docs/app/building-your-application/optimizing/open-telemetry#self-hosting)
Развертывание на других платформах также не вызывает затруднений. Вам нужно будет запустить собственный сборщик OpenTelemetry, чтобы получать и обрабатывать данные телеметрии из вашего приложения Next.js.

Для этого следуйте  [OpenTelemetry Collector Getting Started guide](https://opentelemetry.io/docs/collector/getting-started/), которое поможет вам настроить сборщик и настроить его для получения данных из вашего приложения Next.js.

После того как сборщик будет запущен и запущен, вы сможете развернуть приложение Next.js на выбранной вами платформе, следуя соответствующим руководствам по развертыванию.

### [Custom Exporters](https://nextjs.org/docs/app/building-your-application/optimizing/open-telemetry#custom-exporters)
OpenTelemetry Collector не требуется. Вы можете использовать собственный экспортер O[`@vercel/otel`](https://nextjs.org/docs/app/building-your-application/optimizing/open-telemetry#using-vercelotel) or [manual OpenTelemetry configuration](https://nextjs.org/docs/pages/building-your-application/optimizing/open-telemetry#manual-opentelemetry-configuration).
## [Custom Spans](https://nextjs.org/docs/app/building-your-application/optimizing/open-telemetry#custom-spans)
You can add a custom span with [OpenTelemetry APIs](https://opentelemetry.io/docs/instrumentation/js/instrumentation).
![[Pasted image 20240713173103.png]]
В следующем примере демонстрируется функция, которая извлекает звезды GitHub и добавляет пользовательский диапазон fetchGithubStars для отслеживания результата запроса на выборку:
![[Pasted image 20240713173122.png]]
Функция регистрации будет выполнена до того, как ваш код запустится в новой среде. Вы можете приступить к созданию новых интервалов, и они должны быть корректно добавлены в экспортируемую трассу.

## [Default Spans in Next.js](https://nextjs.org/docs/app/building-your-application/optimizing/open-telemetry#default-spans-in-nextjs)
Next.js автоматически анализирует несколько диапазонов, чтобы предоставить вам полезную информацию о производительности вашего приложения.

Атрибуты в диапазонах соответствуют  [OpenTelemetry semantic conventions](https://opentelemetry.io/docs/reference/specification/trace/semantic_conventions/). Мы также добавляем некоторые пользовательские атрибуты в следующее пространство имен:

- next.span_name — дублирует имя диапазона
- next.span_type — каждый тип диапазона имеет уникальный идентификатор.
- next.route — шаблон маршрута запроса (например, /[param]/user).
- next.rsc (true/false) — является ли запрос запросом RSC, например предварительной выборкой.
- next.page
	- Это внутреннее значение, используемое маршрутизатором приложений.
	- Вы можете думать об этом как о маршруте к специальному файлу (например, page.ts, layout.ts, loading.ts и другим).
	- Его можно использовать в качестве уникального идентификатора только в сочетании с next.route, поскольку /layout можно использовать для идентификации как /(groupA)/layout.ts, так и /(groupB)/layout.ts.

