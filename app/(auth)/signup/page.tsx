import AuthForm from '@/components/AuthForm';
import insertRow from '@/utils/supabase/insertRow';
import { createClient } from '@/utils/supabase/server';
import { PartialProfile } from '@/utils/supabase/types';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function SignUp({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signUp = async (formData: FormData) => {
    'use server';

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const username = formData.get('user_name') as string;
    const postcode = formData.get('postcode') as string;
    const refugee = formData.get('refugee') as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    let refugeeBool: boolean = true;

    if (refugee === 'true') {
      refugeeBool = true;
    } else {
      refugeeBool = false;
    }
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return redirect('/signup?message=Could not authenticate user');
    }

    // Get userId and insert it as ID in Profiles table
    const userId = data?.user?.id as string | number;
    insertRow('profiles', {
      id: userId && userId,
      email: email,
      postcode: postcode,
      username: username,
      refugee: refugeeBool,
    } as PartialProfile);

    return redirect('/login?message=Check email to continue sign in process');
  };

  return (
    <div className=' flex flex-col  items-center  px-8  '>
      <AuthForm
        onSubmit={signUp}
        buttonText='REGISTER'
        searchParams={searchParams}
        isSignUp={true}
      />
    </div>
  );
}
