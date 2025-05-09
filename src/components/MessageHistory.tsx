import React from 'react';
import { Message } from './Message';
import { Response } from './Response';
import { Typing } from './Typing';
import { MessagesType } from '../messagesData/MessagesType';

export type Message = {
  id: string;
  from: { name: string };
  type: MessagesType;
  time: string;
  text?: string;
};

export const MessageHistory: React.FC<{ list: Message[] }> = ({ list = [] }) => {
  if (list.length === 0) return null;

  return (
    <ul>
      {list.map((item) =>
        item.type === MessagesType.Message ? (
          <Message key={item.id} from={item.from} message={item} />
        ) : item.type === MessagesType.Response ? (
          <Response key={item.id} from={item.from} message={item} />
        ) : item.type === MessagesType.Typing ? (
          <Typing key={item.id} from={item.from} message={item} />
        ) : null,
      )}
    </ul>
  );
};
