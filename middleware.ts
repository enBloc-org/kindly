import { NextResponse, NextRequest } from 'next/server';
import { createClient } from '@/supabase/utils/middleware';

const protectedRoutes = [
  '/conversations',
  '/item/:id*',
  '/profile',
  '/add-item',
  '/delete-account',
];

export async function middleware(request: NextRequest) {
  try {
    const { supabase } = createClient(request);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const newHeaders = new Headers(request.headers);

    newHeaders.delete('k-active-user');

    if (user) {
      newHeaders.set('k-active-user', user.id);
    }

    const isProtectedRoute = protectedRoutes.some((route) => {
      if (route.includes(':id')) {
        const regex = new RegExp('^' + route.replace(':id*', '.*') + '$');
        return regex.test(request.nextUrl.pathname);
      }
      return route === request.nextUrl.pathname;
    });
    if (isProtectedRoute && !user) {
      return NextResponse.redirect(
        new URL('/login?message=Please login to use this feature', request.url)
      );
    }
    return NextResponse.next({
      request: {
        headers: newHeaders,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(
      new URL(
        '/login?message=Something has gone wrong. Please try again later.',
        request.url
      )
    );
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
