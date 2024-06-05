import axios from 'axios';
import { clsx, type ClassValue } from 'clsx';
import { signOut } from 'next-auth/react';

import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => resolve(<string>reader.result);
    reader.onerror = error => reject(error);
  });
}

export function formattedGroupByKey<T extends { [key: string | number]: unknown }>(array: T[], key: keyof T) {
  return array.reduce((acc, cur) => {
    const stringkey = cur[key] as string;
    if (acc.get(stringkey)) {
      acc.get(stringkey)?.push(cur);
    } else {
      acc.set(stringkey, [cur]);
    }
    return acc;
  }, new Map<keyof T, T[]>());
}

/**
 * 토큰이 없다는 에러가 올 시 로그인 페이지로 리다이렉션하는 함수
 */
export const RedirectLoginPage = async (isError: Boolean, error: Error | null) => {
  if (!isError || !error) return false;
  if (!axios.isAxiosError(error)) return false;
  if (error.response?.data.message.includes('accessToken') || error.response?.data.message.includes('토큰')) {
    await signOut();
    return true;
  }
  return false;
};
