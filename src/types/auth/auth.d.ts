import { T_PositionType, T_VariantType } from '../toast/toast';

export interface I_AuthStore {
  isLogin: boolean;
  accessToken: string | null;
  refreshToken: string | null;
}
export interface I_JSONError {
  error: string;
  message: string;
  statusCode: number;
}
export interface I_SignInError extends SignInResponse {
  error: string;
  status: number;
  ok: boolean;
  url: null;
}

export interface I_ResPonse_SignUp_200 {
  statusCode: number;
  message: string;
  user: {
    name: string;
    email: string;
    password: string;
    registration_information: string;
    id: number;
    role: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: boolean;
  };
}
/** 
 * @type 성공시 type
 * {
    "statusCode": 201,
    "message": "회원가입에 성공했습니다.",
    "user": {
        "name": "최태영",
        "email": "1452a@naver.com",
        "password": "$2b$12$fYpZPSp1U6groER2Z.ccx.m0rbecEqoyPsi0HjcT0qpC9wrGc5C56",
        "registration_information": "SITE",
        "id": 10,
        "role": 0,
        "createdAt": "2024-05-13T00:36:07.060Z",
        "updatedAt": "2024-05-13T00:36:07.060Z",
        "deletedAt": null
    }
}
 */

/**
 * @type Error
 * {
    "message": [
        "This Email is already in SITE use"
    ],
    "error": "Bad Request",
    "statusCode": 400
}
 */
export interface I_ResPonse_SignUp_400 {
  message: string[];
  error: string;
  statusCode: number;
}

/**
 * @explain auth관련 react-query 실행 이후 콜백함수 타입입니다.
 */
export interface I_AuthCallback {
  title: string;
  path: string;
  variant?: T_VariantType;
  position?: T_PositionType;
}
