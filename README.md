# Guitar Choice Landing

Промо-лендінг для гітарного магазину з інтеграцією Headless CMS (Payload 3.0) та інтерактивною 3D-моделлю гітари.

## Структура проєкту

- **`frontend/`** — клієнтська частина на Vite та Vanilla JS (модульна архітектура блоків).
- **`cms/`** — Payload CMS 3 на базі Next.js з базою даних PostgreSQL.
- **`backend/`** — Express mock-сервер для швидкої розробки без CMS.

## Швидкий запуск

### 1. Фронтенд

```bash
cd frontend
npm install
npm run dev
```

Сайт буде доступний за адресою: `http://localhost:5173`

### 2. CMS (Payload 3.0 + PostgreSQL)

```bash
cd cms
npm install
npm run dev
```

- Адмін-панель: `http://localhost:3000/admin`
- Ініціалізація початкових даних: `http://localhost:3000/api/seed`

### 3. Mock Backend (опціонально)

```bash
cd backend
npm install
npm start
```

Працює на `http://localhost:3000`

## Стек технологій

- **Frontend:** Vanilla JS, Vite, CSS3, `<model-viewer>` (WebGL 3D)
- **CMS:** Payload CMS 3.x, Next.js, React
- **Database:** PostgreSQL
