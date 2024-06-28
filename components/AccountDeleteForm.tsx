'use client';
import { useState } from 'react';

export default function AccountDeleteForm({
  currentUserName,
}: {
  currentUserName: string;
}) {
  const [userName, setUserName] = useState('');

  return (
    <div>
      <h1>We are sorry to see you go 😢</h1>
      <form>
        Please enter your userName to confirm deleting your DeleteAccount
        <input
          value={userName}
          name='user-confirmation'
          onChange={(event) => setUserName(event.target.value)}
          placeholder={currentUserName}
        />
      </form>
    </div>
  );
}
