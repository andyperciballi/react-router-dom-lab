import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import MailboxForm from './components/MailboxForm/MailboxForm.jsx';
import MailboxList from './components/MailboxList/MailboxList.jsx';
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx';
import LetterForm from './components/LetterForm/LetterForm.jsx';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  // Function to add a new letter
  const addLetter = (newLetterData) => {
    const newLetter = {
      _id: letters.length + 1,
      ...newLetterData,
    };

    setLetters((prev) => [...prev, newLetter]);
  };

  // Function to add a new mailbox
  const addBox = (newMailboxData) => {
    const newMailbox = {
      _id: mailboxes.length + 1,
      ...newMailboxData,
    };
    setMailboxes((prev) => [...prev, newMailbox]);
    console.log('Added mailbox:', newMailbox);
  };

  return (
    <div>
      <NavBar />
      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <main>
              <h1>Mailbox List</h1>
            </main>
          }
        />

        {/* Mailbox List */}
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />

        {/* New Mailbox Form */}
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />

        {/* Mailbox Details */}
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}
        />
        {/* Add a Letter */}
        <Route
          path="/new-letter"
          element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />}
        />
      </Routes>
    </div>
  );
};

export default App;