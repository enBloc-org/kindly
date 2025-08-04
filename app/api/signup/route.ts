import newServerClient from '@/supabase/utils/newServerClient';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password, username, isRefugee } = body;
  const supabase = newServerClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    let message = 'Signup failed';

    if (error.code === 'user_already_exists') {
      message = 'User already registered. Please try logging in instead.';
    } else if (error.code === 'weak_password') {
      message =
        'Password must include at least one uppercase character, one number, and one special character.';
    } else {
      message = error.message || error.code?.replaceAll(/_/g, ' ') || message;
    }

    return NextResponse.json({ error: message }, { status: 400 });
  }

  const userId = data && data.user?.id;
  if (!userId) {
    return NextResponse.json(
      { error: 'User ID not found after signup.' },
      { status: 500 }
    );
  }
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .insert({
      id: userId,
      email: email,
      username: username,
      refugee: isRefugee,
    })
    .select('*')
    .single();

  if (profileError) {
    console.error('Profile insert error:', profileError);
    return NextResponse.json(
      { error: 'Failed to create user profile.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ profile });
}
