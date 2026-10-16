---
date: 2026-10-16
tags: [fastapi, python, offline]
---

# FastAPI офлайн: todo-list → магазин

Проект: `/Users/antonratnov/job-autoapply/todo-shop`

## Цель
Изучать FastAPI в дороге без интернета. Планы: сначала todo-list, потом магазин (с авторизацией).

## Что сделано

### 1. Окружение
- `todo-shop/.venv` (Python 3.14)
- Пакеты: `fastapi[standard]`, `sqlmodel`, `sqlalchemy`, `alembic`, `pydantic-settings`, `python-multipart`, `pyjwt`, `pwdlib[argon2]`, `pytest`, `faker`
- Версии зафиксированы в `requirements.txt`
- `wheels/` (18 МБ): пакеты для установки без сети
  `pip install --no-index --find-links=wheels -r requirements.txt`

### 2. Заготовка todo
- `app/main.py`: CRUD `/todos` (GET, POST, PATCH, DELETE)
- `app/models.py`, `app/db.py`: SQLModel + SQLite (`todo.db`)
- `tests/test_todos.py`: тест CRUD (проходит), `pytest.ini` ограничивает `testpaths = tests`
- Запуск: `source .venv/bin/activate && fastapi dev app/main.py`

### 3. Документация офлайн (`offline/`)
- `offline/fastapi/docs/en/docs/tutorial/`: туториал FastAPI (markdown)
- `offline/sqlmodel/`: документация и примеры SQLModel
- `offline/swagger-ui/`: `swagger-ui-bundle.js` и `swagger-ui.css`
- `offline/sqlite-doc/`: HTML-документация SQLite (открывать `index.html`)
  - `lang_select.html`, `lang_createtable.html`, `lang_insert.html`, `lang_update.html`, `lang_delete.html`, `lang_join.html`, `lang_aggfunc.html`, `datatype3.html`, `foreignkeys.html`
- `offline/python-docs-html/`: официальная документация Python 3.14 (открывать `index.html`)
  - `tutorial/index.html`: туториал (главы 3–9: типы, потоки, функции, структуры, модули, классы)
  - `library/typing.html` (аннотации типов), `library/asyncio-task.html` (async/await)
- `offline/pydantic/docs/`: документация Pydantic в markdown (`concepts/` — валидация, модели, поля; `api/` — справочник)
- Скрипт `offline/get_docs.sh` качает FastAPI, SQLModel и Swagger (SQLite, Python, Pydantic, SQLAlchemy скачаны вручную)
- `offline/sqlalchemy/doc/build/`: документация SQLAlchemy в формате .rst (читается как текст; `tutorial/` — унифицированный туториал, `orm/` — ORM, `core/` — Core и `text()`)

### 4. Референсные проекты (`reference/`, только читать)
- `fastapi_full-stack-fastapi-template`: официальный шаблон. SQLModel, JWT, users, items, alembic. Главный образец авторизации (`backend/app/core/security.py`, `api/routes/login.py`)
- `tfkhdyt_fastapi-todo`: простой todo
- `victorluisca_ecommerce-fastapi`: магазин с тестами
- `jerryszc_ecommerce-backend-api`: заказы, остатки, транзакции
- `leticia-gomes_fastapi-ecommerce-api`: компактный магазин
- Последние три: хобби-проекты, качество не проверено. Код не запускал

## Важные нюансы
- **Swagger `/docs` без сети пустой**: грузит JS/CSS с CDN. Решение: подключить локальные файлы из `offline/swagger-ui/` (раздел «Self-hosting Custom Docs Static Files», файл `offline/fastapi/docs/en/docs/how-to/custom-docs-ui-assets.md`) или тестировать через pytest/`curl`.
- Без сети не получится: оплата (Stripe), Postgres/Redis (если не в Docker заранее), новые пакеты. Оплату делать заглушкой (статус заказа `paid`).
- Старый проект `learn-fastapi` и общий `.venv` в `job-autoapply` не тронуты.

## План обучения
1. todo: модель, CRUD, SQLite, тесты
2. Пользователи и логин (JWT), у каждого свои задачи
3. Магазин: `Product`, `Cart`, `Order`, связи, миграции alembic
4. Практика чистого SQL через `sqlite3 todo.db`

## Хронология разговора
1. Спросил, что скачать для работы над FastAPI без связи → список: venv + пакеты, wheels, доки, SQLite.
2. Уточнил планы (todo → магазин) → подобран набор под них (SQLModel, JWT, alembic).
3. Попросил всё сделать → создан проект `todo-shop`, пакеты, заготовка, тест, офлайн-доки.
4. Спросил про доки по SQL → докачана документация SQLite (первая попытка оборвалась, докачал с повтором).
5. Попросил готовые проекты-референсы (todo, магазин, авторизация) → клонированы 5 репозиториев в `reference/`.
6. Попросил сохранить историю в Obsidian → эта заметка.
7. Сказал, что слабо знает Python → скачана документация Python 3.14.
8. Попросил закрыть пробелы → скачана документация Pydantic (`offline/pydantic/docs/`).
9. Скачана документация SQLAlchemy (`offline/sqlalchemy/doc/build/`). Пробелы закрыты.
