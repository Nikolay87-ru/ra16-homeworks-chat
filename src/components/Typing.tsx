import type { Message as MessageType } from './MessageHistory';

export const Typing = ({ from, message }: { from: { name: string }; message: MessageType }) => (
  <li className="clearfix">
    <div className="message-data">
      <span className="message-data-name">
        <i className="fa fa-circle online"></i> {from.name}
      </span>
      <span className="message-data-time">{message.time}</span>
    </div>
    <div className="message my-message">
      <span className="typing-dots">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </span>
    </div>
  </li>
);
