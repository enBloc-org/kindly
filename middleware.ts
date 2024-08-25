import { NextResponse, NextRequest } from 'next/server';
import { createClient } from '@/supabase/utils/middleware';

export async function middleware(request: NextRequest) {
  // This `try/catch` block is only here for the interactive tutorial.
  // Feel free to remove once you have Supabase connected.
  const { supabase } = createClient(request);
  // Refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    console.log('HAS USER');
    const newHeaders = new Headers(request.headers);
    newHeaders.set('k-active-user', user!.id);

    return NextResponse.next({
      request: {
        headers: newHeaders,
      },
    });
  }
  console.log('DOES NOT HAVE USER');
  return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: [
    // '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).)*',
    '/conversations',
  ],
};
