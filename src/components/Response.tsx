import type { Message as MessageType } from './MessageHistory';

export const Response = ({ from, message }: { from: { name: string }; message: MessageType }) => (
  <li className="clearfix">
    <div className="message-data align-right">
      <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
      <span className="message-data-name">{from.name}</span>
      <i className="fa fa-circle me"></i>
    </div>
    <div className="message other-message float-right">{message.text}</div>
  </li>
);
