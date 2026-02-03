import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ addBox }) => {
  const [boxOwner, setBoxOwner] = useState('');
  const [boxSize, setBoxSize] = useState('Small');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ boxOwner, boxSize });
    navigate('/mailboxes');
  };

  return (
    <div>
      <h1>New Mailbox Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Enter a Box Owner:
            <input
              type="text"
              placeholder="Boxholder name"
              value={boxOwner}
              onChange={(e) => setBoxOwner(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Select a Box Size:{' '}
            <select
              value={boxSize}
              onChange={(e) => setBoxSize(e.target.value)}
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </label>
        </div>
        <button type="submit">Add Mailbox</button>
      </form>
    </div>
  );
};

export default MailboxForm;