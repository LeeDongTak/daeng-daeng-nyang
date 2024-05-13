import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';

const ROOT = '/';
const RESTRIC_ROUTE = ['/calendar', '/gallery/add', '/profile'];
const DEFAULT_REDIRECT = '/auth/login';

export default async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const token = await getToken({ req }); // client:X, Server:O

  const isAuthenticated = !!token;
  const isPublicRoute = RESTRIC_ROUTE.includes(nextUrl.pathname);

  // 로그인시 auth/login으로 넘어가지 않게 하기
  if (isAuthenticated && !isPublicRoute) return Response.redirect(new URL(ROOT, req.url));

  if (!isAuthenticated && isPublicRoute) return Response.redirect(new URL(DEFAULT_REDIRECT, req.url));
}

export const config = {
  matcher: ['/auth/login', '/calendar', '/gallery/add', '/profile'],
};
