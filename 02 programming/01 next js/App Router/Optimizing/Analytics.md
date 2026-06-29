---
создал заметку: 2024-07-13
tags:
  - next_js
  - app_router
---
Next.js имеет встроенную поддержку для измерения показателей производительности и составления отчетов. Вы можете использовать перехватчик useReportWebVitals для самостоятельного управления отчетами или, в качестве альтернативы, Vercel предоставляет  [managed service](https://vercel.com/analytics?utm_source=next-site&utm_medium=docs&utm_campaign=next-website) для автоматического сбора и визуализации показателей.
## [Build Your Own](https://nextjs.org/docs/app/building-your-application/optimizing/analytics#build-your-own)
![[Pasted image 20240713161432.png]]
![[Pasted image 20240713161440.png]]
> [!important] 
> Поскольку для ловушки useReportWebVitals требуется директива «use client», наиболее эффективный подход — создать отдельный компонент, который импортирует корневой макет. Это ограничивает границу клиента исключительно компонентом WebVitals.
> 

View the [API Reference](https://nextjs.org/docs/app/api-reference/functions/use-report-web-vitals) for more information.
## [Web Vitals](https://nextjs.org/docs/app/building-your-application/optimizing/analytics#web-vitals)
Web Vitals — это набор полезных показателей, цель которых — оценить взаимодействие пользователя с веб-страницей. Включены следующие веб-важные данные:
- [Time to First Byte](https://developer.mozilla.org/docs/Glossary/Time_to_first_byte) (TTFB)
- [First Contentful Paint](https://developer.mozilla.org/docs/Glossary/First_contentful_paint) (FCP)
- [Largest Contentful Paint](https://web.dev/lcp/) (LCP)
- [First Input Delay](https://web.dev/fid/) (FID)
- [Cumulative Layout Shift](https://web.dev/cls/) (CLS)
- [Interaction to Next Paint](https://web.dev/inp/) (INP)

Вы можете обрабатывать все результаты этих метрик, используя свойство name.
![[Pasted image 20240713161630.png]]
## [Sending results to external systems](https://nextjs.org/docs/app/building-your-application/optimizing/analytics#sending-results-to-external-systems)
Вы можете отправлять результаты на любую конечную точку, чтобы измерять и отслеживать реальную эффективность пользователей на вашем сайте. Например:
![[Pasted image 20240713161700.png]]

> [!note] Good to know
> Если вы используете  [Google Analytics](https://analytics.google.com/analytics/web/), использование значения id может позволить вам вручную построить распределения показателей (для расчета процентилей и т. д.).
>  

![[Pasted image 20240713161759.png]]
Read more about [sending results to Google Analytics](https://github.com/GoogleChrome/web-vitals#send-the-results-to-google-analytics).
