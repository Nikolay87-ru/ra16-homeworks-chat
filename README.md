# Домашнее задание: "Состояние компонентов - История чата"

## Технологический стек
- **Vite** + **React** + **TypeScript** (базовый стек)
- **ESLint** + **Prettier** (линтинг и форматирование)

## Выполненные задачи

### 1. Настройка проекта
- [x] Инициализация проекта на Vite + React + TypeScript
- [x] Подключение ESLint и Prettier

### 2. Реализация компонентов

#### Компонент `MessageHistory`
- [x] Приём массива сообщений через пропс `list`
- [x] Обработка пустого списка сообщений
- [x] Динамический рендеринг разных типов сообщений:
  - `message` - обычное сообщение
  - `response` - ответ собеседника
  - `typing` - индикатор набора

#### Компоненты сообщений
- [x] `Message` (сообщение пользователя):
  - Выравнивание слева
  - Зелёный фон (`my-message`)
  
- [x] `Response` (ответ собеседника):
  - Выравнивание справа (`align-right`)
  - Синий фон (`other-message`)
  
- [x] `Typing` (индикатор набора):
  - Анимация точек через CSS

#### Типы данных
- [x] `Message` (строгая типизация свойств):
  - `id`, `from`, `type`, `time`, `text`
- [x] `MessageType` (enum):
  - `response`, `message`, `typing`

  
 
