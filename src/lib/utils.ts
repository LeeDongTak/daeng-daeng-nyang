import { clsx, type ClassValue } from 'clsx';

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
  }, new Map<string, T[]>());
}
