import { type Message } from '../components/MessageHistory';
import { MessagesType } from './MessagesType';

export const messages: Message[] = [
  {
    id: 'chat-5-1090',
    from: { name: 'Ольга' },
    type: MessagesType.Response,
    time: '10:10',
    text: 'Привет, Виктор. Как дела? Как идёт работа над проектом?',
  },
  {
    id: 'chat-5-1091',
    from: { name: 'Виктор' },
    type: MessagesType.Message,
    time: '10:12',
    text: 'Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.',
  },
  {
    id: 'chat-5-1092',
    from: { name: 'Ольга' },
    type: MessagesType.Response,
    time: '10:14',
    text: 'Не уверена, что сегодня получится. Всё ещё в офисе. Давай уточню через час. Возникли ли какие-либо проблемы на последней стадии проекта?',
  },
  {
    id: 'chat-5-1093',
    from: { name: 'Виктор' },
    type: MessagesType.Message,
    time: '10:20',
    text: 'Нет, всё прошло гладко. Очень хочу показать всё команде.',
  },
  {
    id: 'chat-5-1094',
    from: { name: 'Виктор' },
    type: MessagesType.Typing,
    time: '10:31',
  },
];
