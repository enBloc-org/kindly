import newServerClient from '@/supabase/utils/newServerClient';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const baseURL = request.nextUrl;
  const body = await request.json();
  const { email, password, username, isRefugee } = body;
  const supabase = newServerClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    if (error.code === 'user_already_exists')
      return NextResponse.redirect(
        new URL(
          '/login?message=User already registered. Please try logging in instead.',
          baseURL
        )
      );

    if (error.code === 'weak password')
      return NextResponse.redirect(
        new URL(
          '/signup?message=Your password must include at least one uppercase character, one number and one special character.',
          baseURL
        )
      );

    return NextResponse.redirect(
      new URL(`/signup?message=${error.code?.replaceAll(/_/g, ' ')}`, baseURL)
    );
  }

  const userId = data && data.user?.id;
  const { error: profileError } = await supabase.from('profiles').insert({
    id: userId,
    email: email,
    username: username,
    refugee: isRefugee,
  });

  if (profileError) console.error(profileError);

  return NextResponse.next();
}
