import { NextResponse, NextRequest } from 'next/server';
import { createClient } from '@/supabase/utils/middleware';

export async function middleware(request: NextRequest) {
  try {
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
    NextResponse.redirect(new URL('/', request.url));
  } catch (e) {
    // If you are here, a Supabase client could not be created!
    // This is likely because you have not set up environment variables.
    // Check out http://localhost:3000 for Next Steps.
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }
}

// export const config = {
//   matcher: [
//     '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).)*',
//   ],
// };
