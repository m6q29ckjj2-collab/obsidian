---
создал заметку: 2024-05-23
tags:
  - next_js
---
## Project Structure
Охватывает файлы конфигурации на верхнем уровне.

### Top level folders
Папки верхнего уровня используются для организации кода вашего приложения и статических ресурсов.
![[Pasted image 20240523200035.png]]
[[app]] - App router 
[[pages]] - Pages router
[[public]] - Статические объекты, которые будут обслуживаться
[[src]] - Дополнительная папка с исходным кодом приложения

### Top level files
Файлы верхнего уровня используются для настройки вашего приложения, управления зависимостями, запуска промежуточного программного обеспечения, интеграции инструментов мониторинга и определения переменных среды.
[[next.config.js]] - Configuration file for Next.js
[[package.json]] - Project dependencies and scripts
[[instruments.ts]] - OpenTelemetry and Instrumentation file
[[middleware.ts]] - Next.js request middleware
[[.env]] - Environment variables
[[.env-local]] - Local environment variables
[[.env-production]] - Production environment variables
[[.env-development]] - Development environment variables
[[.eslint.json]] - Configuration file for ESLint
.gitignore - Git files and folders to ignore
next-env.d.ts - TypeScript declaration file for Next.js
tsconfig.json - Configuration file for TypeScript
jsconfig.json - Configuration file for JavaScript

### app Routing Conversation
Следующие файловые соглашения используются для определения маршрутов и обработки метаданных в маршрутизаторе приложений.
[[layout]] - Layout
[[page]] - Page
[[loading]] - Loading UI
[[not-found]] - Not found UI
[[error]] - Error UI
[[global-error]] - Global error UI
[[route]] - API endpoint
[[template]] - Re-rendered layout
[[default]] - Parallel route fallback page

### Nested routes 
[[folder]] - Route segment
[[folder/folder]] - Nested route segment

### Dynamic routes 
[[[folder]]] - Dynamic route segment
[[[...folder]]] - Catch-all route segment
[[[[...folder]]]] - Optional catch-all route segment

### Route Groups and Private Folders
[[(folder)]] - Group routes without affecting routing
[[_folder]] - Opt folder and all child segments out of routing

### Parallel and Intercepted Routes
[[@folder]] - Named slot
[[(.)folder]] - Intercept same level
[[(..)folder]] - Intercept one level above
[[(..)(..)folder]] -Intercept two levels above
[[(...)folder]] - Intercept from root

### Metadata File Conversation 
#### App icons
[[favicon]] - Favicon file(.ico)
[[icon]] - App Icon file (`.ico` `.jpg` `.jpeg` `.png` `.svg`)
[[icon]] - Generated App Icon (`.js` `.ts` `.tsx`)
[[apple-icon]] - Apple App Icon file (`.jpg` `.jpeg`, `.png`)
[[apple-icon]] - Generated Apple App Icon (``.js` `.ts` `.tsx``)

#### Open Graph and Twitter Images
[[opengraph-image]] - Open Graph image file (`.jpg` `.jpeg` `.png` `.gif`)
[[opengraph-image]] - Generated Open Graph image (``.js` `.ts` `.tsx``)
[[twitter-image]] - Twitter image file (`.jpg` `.jpeg` `.png` `.gif`)
[[twitter-image]] - Generated Twitter image(``.js` `.ts` `.tsx``)
#### SEO
[[sitemap]] - Sitemap file(.xml)
[[sitemap]] - Generated Sitemap (`.js` `.ts`)
[[robots]] - Robots file(.txt)
[[robots]] - Generated Robots file (`.js` `.ts`)

### pages Routing Coversations
Следующие файловые соглашения используются для определения маршрутов в маршрутизаторе страниц.

### Special Files
[[_app]]  - Custom App
[[_document]] - Custom Document 
[[_error]] - Custom Document 
[[404]] - 404 Error Page
[[500]] - 500 Error Page

### Routes

#### Folder convention
[[index]] - Home page
[[folder/index]] - Nested page
#### Folder convention
[[index]] - Home page
[[file]] - Nested page

### Dynamic Routes

#### Folder convention
[[[folder]/index]] - Dynamic route segment
[[[... folder]/index]] - Catch-all route segment
[[[[... folder]\]/index]] - Catch-all route segment

#### File convention
[[[file]]] - Dynamic route segment
[[[... file]]] - Catch-all route segment
[[[[... file]]]] - Catch-all route segment







