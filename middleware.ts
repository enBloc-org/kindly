import { NextResponse, NextRequest } from 'next/server';
import { createClient } from '@/supabase/utils/middleware';

export async function middleware(request: NextRequest) {
  try {
    const { supabase } = createClient(request);
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      const newHeaders = new Headers(request.headers);
      newHeaders.set('k-active-user', user!.id);

      return NextResponse.next({
        request: {
          headers: newHeaders,
        },
      });
    }
    return NextResponse.redirect(
      new URL('/login?message=Please login to use this feature', request.url)
    );
    return NextResponse.redirect(
      new URL('/login?message=Please login to use this feature', request.url)
    );
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(
      new URL(
        '/login?message=Something has gone wrong. Please try again later.',
        request.url
      )
    );
    return NextResponse.redirect(
      new URL(
        '/login?message=Something has gone wrong. Please try again later.',
        request.url
      )
    );
  }
}

export const config = {
  matcher: [
    '/conversations',
    '/item/:id*',
    '/profile',
    '/add-item',
    '/delete-account',
  ],
};
