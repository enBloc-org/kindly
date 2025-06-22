'use client';
import { useState } from 'react';
import PopupWrapper from './PopupWrapper';
import ButtonRounded from '../buttons/ButtonRounded';
import newClient from '@/supabase/utils/newClient';

export default function SignupConfirmationPopup({
  targetEmail,
}: {
  targetEmail: string;
}) {
  const [hasResent, setHasResent] = useState<boolean>(false);

  const resendEmail = async () => {
    const supabase = newClient();
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email: targetEmail,
    });

    if (error) console.error(error);

    setHasResent((previous) => !previous);
    setTimeout(() => setHasResent((previous) => !previous), 2000);
  };

  return (
    <>
      {hasResent && (
        <p className='error-message left-[calc(50% - 45px)] absolute top-[50%] z-50'>
          Confirmation email has been resent
        </p>
      )}
      <PopupWrapper>
        <h3>Verify your email</h3>
        <p>
          Please verify your email by clicking the link sent to{' '}
          <span className='error-message'>
            {targetEmail.replace(/\w+(?=@)/i, '**')}
          </span>
        </p>
        <ButtonRounded type='button' clickHandler={resendEmail}>
          Resend verification email
        </ButtonRounded>
      </PopupWrapper>
    </>
  );
}
