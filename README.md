# Test Task Products Admin

## Описание

Тестовое задание по React/TypeScript: административная система управления товарами с таблицами,
сортировкой, поиском, формами и авторизацией.

Приложение позволяет:

- пройти вход (логин/пароль + обработка ошибок с уведомлениями);
- загрузить список товаров из публичного API;
- удобно взаимодействовать с данными: сортировать, искать, редактировать и добавлять новые позиции;

## Стек проекта

- React 19+
- TypeScript (строгая типизация)
- Vite (сборка и dev-сервер)
- React Router DOM (роутинг)
- TanStack Query (запросы/кэш)
- Zustand (состояние таблицы/сортировки)
- React Hook Form + Zod (валидация форм)
- Axios (HTTP-клиент)
- react-hot-toast (toast-уведомления)
- TanStack Table (таблица)
- Tailwind CSS (UI-стилизация)

## Тестовые креды

Для входа используйте:

- `username`: `emilys`
- `password`: `emilyspass`

## API

- Auth: [DummyJSON Auth](https://dummyjson.com/docs/auth)
- Products: [DummyJSON Products](https://dummyjson.com/docs/products)

Возможны проблемы с доступом к API без ВПН.

В проекте используется переменная окружения `VITE_API_URL`

## Запуск без Docker

1. Установите зависимости:
   ```bash
   npm ci
   ```
2. Запустите dev-сервер:
   ```bash
   npm run dev
   ```
   Откройте URL, который покажет терминал (Vite).

Для production-режима:

1. Сборка:
   ```bash
   npm run build
   ```
2. Предпросмотр сборки:
   ```bash
   npm run preview
   ```
   Откройте URL, который покажет терминал (Vite).

## Сборка и запуск с Docker

### Вариант 1: `docker build` + `docker run`

1. Сборка образа:
   ```bash
   docker build -t test-task-products .
   ```
2. Запуск контейнера:
   ```bash
   docker run --rm -p 3000:3000 test-task-products
   ```

Приложение будет доступно по адресу: `http://localhost:3000`.

### Вариант 2: Docker Compose

```bash
npm run docker:up
```

Открывайте: `http://localhost:3000`.

Удобные команды через `npm`:

```bash
npm run docker:up
npm run docker:stop
npm run docker:reset
```
