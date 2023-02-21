// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let cookie = request.cookies.get('user');
  return cookie ? NextResponse.next() : NextResponse.redirect('http://localhost:3000/login/');
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
}