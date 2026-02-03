import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h1>Mailbox List</h1>

      {mailboxes.length === 0 ? (
        <p>No mailboxes yet!</p>
      ) : (
        <ul>
          {mailboxes.map((mailbox) => (
            <li key={mailbox._id}>
              <Link to={`/mailboxes/${mailbox._id}`}>
                Mailbox {mailbox._id}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MailboxList;