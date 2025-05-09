import React from 'react';

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

const MessageHistory = (React.FC<{ list: Message[] }> = ({ list = [] }) => {
  if (list.length === 0) return null;
  return (
    <ul>
      {list.map((item) => (
        item.type === MessageType.Message ?
          return <Message key={item.id} from={item.from} message={item} /> : null;
  
        item.type === MessageType.Response ?
          return <Response key={item.id} from={item.from} message={item} /> : null;
        
        item.type === MessageType.Typing ?
          return <Typing key={item.id} from={item.from} message={item} /> : null;
      ))}
    </ul>
  );
});

export default MessageHistory;
