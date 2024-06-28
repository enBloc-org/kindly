'use client';
import { FormEvent, useState } from 'react';

export default function AccountDeleteForm({
  currentUserName,
  submitHandler,
}: {
  currentUserName: string;
  submitHandler: () => void;
}) {
  const [userName, setUserName] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (userName === currentUserName) {
      submitHandler();
    } else {
      alert('The username you submitted is incorrect');
    }
  };

  return (
    <div>
      <h1>We are sorry to see you go 😢</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        Please enter your userName to confirm deleting your DeleteAccount
        <input
          value={userName}
          name='user-confirmation'
          onChange={(event) => setUserName(event.target.value)}
          placeholder={currentUserName}
        />
        <button>Delete my account forever</button>
      </form>
    </div>
  );
}
