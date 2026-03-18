FROM node:20-alpine AS build

# ARG для переменных сборки
ARG VITE_API_URL=https://dummyjson.com
ENV VITE_API_URL=$VITE_API_URL

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Собираем приложение
RUN npm run build

# Проверяем что собралось
RUN ls -la dist/ && echo "Build completed successfully"

# Финальный образ
FROM node:20-alpine

WORKDIR /app

# Копируем собранное приложение из этапа сборки
COPY --from=build /app/dist ./dist

# Устанавливаем serve ГЛОБАЛЬНО
RUN npm install -g serve

# Открываем порт
EXPOSE 3000

# Запускаем сервер
CMD ["serve", "-s", "dist", "-l", "3000"]