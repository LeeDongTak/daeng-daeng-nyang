import 'next-auth';

/**
 * @type DefaultUser : export interface DefaultUser {
  id: string
  name?: string | null
  email?: string | null
  image?: string | null
}
 * @type User : export interface User extends DefaultUser {}
 */
declare module 'next-auth' {
  // 여기서 재 정의한 타입이 callbacks의 user의 타입으로 정의됨
  interface User {
    accessToken: string;
    refreshToken: string;
  }

  // 여기서 재정의한 타입이 session의 타입으로 재정의 됨
  interface Session {
    user: {
      accessToken: string;
      refreshToken: string;
    };
  }
}

/**
 * JWT는 next-auth의 subModule입니다.
 * https://next-auth.js.org/getting-started/typescript#submodules
 */

declare module 'next-auth/jwt' {
  // 여기서 재정의한 JWT는 callbacks의 jwt의 인자 값인 token의 type을 재정의 하여 타입추론이 되게끔합니다.
  interface JWT {
    accessToken: string;
    refreshToken: string;
    role: string;
  }
}
