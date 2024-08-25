import { NextResponse, NextRequest } from 'next/server';
import { createClient } from '@/supabase/utils/middleware';

export async function middleware(request: NextRequest) {
  try {
    const { supabase } = createClient(request);
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
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: [
    // '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).)*',
    '/conversations',
    '/item/:id*',
    '/profile',
    '/add-item',
  ],
};
