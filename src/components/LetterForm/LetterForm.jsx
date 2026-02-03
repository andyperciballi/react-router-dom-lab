import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LetterForm = ({ mailboxes, addLetter }) => {
  const [mailboxId, setMailboxId] = useState(
    mailboxes.length > 0 ? mailboxes[0]._id : '',
  );
  const [recipient, setRecipient] = useState(''); // Unsure if this was a typo in the assignment, recipient seems redundant since it's their mailbox, maybe should be sender instead? But left it as recipient as per lab instructions.
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter({ mailboxId: Number(mailboxId), recipient, message });
    navigate(`/mailboxes/${mailboxId}`);
  };

  return (
    <div className="letter-form">
      <h1>New Letter</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select a Mailbox:
          <select
            value={mailboxId}
            onChange={(e) => setMailboxId(e.target.value)}
            required
          >
            {mailboxes.map((mb) => (
              <option key={mb._id} value={mb._id}>
                Mailbox {mb._id} - {mb.boxOwner}
              </option>
            ))}
          </select>
        </label>

        <label>
          Recipient:
          <input
            type="text"
            value={recipient}
            placeholder="Recipient name"
            onChange={(e) => setRecipient(e.target.value)}
            required
          />
        </label>

        <label>
          Message:
          <textarea
            value={message}
            placeholder="Write your message..."
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>

        <button type="submit">Send Letter</button>
      </form>
    </div>
  );
};

export default LetterForm;