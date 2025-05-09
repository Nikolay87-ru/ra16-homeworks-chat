import React, { useMemo } from 'react';

export type Message = {
  id: string;
  from: { name: string };
  type: MessageType;
  time: string;
  text?: string;
};

enum MessageType {
  Response = 'response',
  Message = 'message',
  Typing = 'typing',
}

const messages = [{
  id: 'chat-5-1090',
  from: { name: 'Ольга' },
  type: 'response',
  time: '10:10',
  text: 'Привет, Виктор. Как дела? Как идёт работа над проектом?'
}, {
  id: 'chat-5-1091',
  from: { name: 'Виктор' },
  type: 'message',
  time: '10:12',
  text: 'Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.'
}, {
  id: 'chat-5-1092',
  from: { name: 'Ольга' },
  type: 'response',
  time: '10:14',
  text: 'Не уверена, что сегодня получится. Всё ещё в офисе. Давай уточню через час. Возникли ли какие-либо проблемы на последней стадии проекта?'
}, {
  id: 'chat-5-1093',
  from: { name: 'Виктор' },
  type: 'message',
  time: '10:20',
  text: 'Нет, всё прошло гладко. Очень хочу показать всё команде.'
}, {
  id: 'chat-5-1094',
  from: { name: 'Виктор' },
  type: 'typing',
  time: '10:31'
}];

const MessageHistory = (React.FC<{ list: Message[] }> = ({ list = [] }) => {
  if (list.length === 0) return null;
  return (
    <ul>
      {/* {list.map((item) => (
        <li className="clearfix" key={item.id}>
          <div className="message-data align-right">
            <span className="message-data-time">{item.time}</span> &nbsp; &nbsp;
            <span className="message-data-name">{item.from.name}</span>
            <i className="fa fa-circle me"></i>
          </div>
          <div className="message other-message float-right">{item.text}</div>
        </li>
      ))} */}
    </ul>
  );
});

export default MessageHistory;
