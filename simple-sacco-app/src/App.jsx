// src/App.jsx
import { useState } from 'react';
import { Member } from './models/Member';
import './App.css'; // You can keep the default styling for now

function App() {
  const [members, setMembers] = useState([]);
  const [newName, setNewName] = useState('');
  const [initialDeposit, setInitialDeposit] = useState('');

  const handleAddMember = (e) => {
    e.preventDefault();
    if (!newName.trim()) return;

    // Instantiate a new Member object
    const newMember = new Member(newName, initialDeposit);

    // Update state
    setMembers([...members, newMember]);

    // Reset form
    setNewName('');
    setInitialDeposit('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>SACCO Management System</h1>

      <form onSubmit={handleAddMember} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Member Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          required
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="number"
          placeholder="Initial Deposit (UGX)"
          value={initialDeposit}
          onChange={(e) => setInitialDeposit(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button type="submit" style={{ padding: '5px 15px' }}>Add Member</button>
      </form>

      <h2>Members Directory</h2>
      {members.length === 0 ? (
        <p>No members yet. Add someone above!</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {members.map((member) => (
            <li key={member.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px', borderRadius: '5px' }}>
              <strong>{member.name}</strong>
              <br />
              Balance: {member.savingsBalance} UGX
              <br />
              <small>Joined: {member.joinDate}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;