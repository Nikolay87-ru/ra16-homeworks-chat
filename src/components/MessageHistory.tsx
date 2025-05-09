import React from 'react';
import { Message } from './Message';
import { Response } from './Response';
import { Typing } from './Typing';

export type Message = {
  id: string;
  from: { name: string };
  type: MessageType;
  time: string;
  text?: string;
};

export enum MessageType {
  Response = 'response',
  Message = 'message',
  Typing = 'typing',
}

export const MessageHistory: React.FC<{ list: Message[] }> = ({ list = [] }) => {
  if (list.length === 0) return null;
  
  return (
    <ul>
      {list.map((item) => (
        item.type === MessageType.Message ? <Message key={item.id} from={item.from} message={item} /> :
        item.type === MessageType.Response ? <Response key={item.id} from={item.from} message={item} /> :
        item.type === MessageType.Typing ? <Typing key={item.id} from={item.from} message={item} /> :
        null
      ))}
    </ul>
  );
};

export default MessageHistory;
