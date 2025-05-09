import { Message } from './MessageHistory';

const Message = ({ from, message }: { from: { name: string }, message: Message }) => (
  <div className="message my-message">{message.text}</div>
);