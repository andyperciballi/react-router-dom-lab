import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId),
  );

  if (!selectedBox) {
    return <p>Mailbox Not Found!</p>;
  }

  const selectedLetters = letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId),
  );

  return (
    <div>
      <h1>Mailbox {mailboxId}</h1>
      <p>
        <strong>Boxholder:</strong> {selectedBox.boxOwner}
      </p>
      <p>
        <strong>Box Size:</strong> {selectedBox.boxSize}
      </p>

      <h3>Letters:</h3>
      {selectedLetters.length === 0 ? (
        <p>No letters yet!</p>
      ) : (
        <ul>
          {selectedLetters.map((letter) => (
            <li key={letter._id}>
              <strong>To:</strong> {letter.recipient} <br />
              <strong>Message:</strong> {letter.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MailboxDetails;