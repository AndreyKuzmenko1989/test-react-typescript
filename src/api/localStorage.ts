import { Nullable } from '../ts';
import { LoginResponse } from '../features/auth/ts';

export const STORAGE_KEYS = {
  accessToken: 'access_token',
};

export const getStorageValue = (key: keyof typeof STORAGE_KEYS) => localStorage.getItem(STORAGE_KEYS[key]);

export const removeStorageValue = (key: keyof typeof STORAGE_KEYS) => localStorage.removeItem(STORAGE_KEYS[key]);

export const setStorageValue = (key: keyof typeof STORAGE_KEYS, value: string) =>
  localStorage.setItem(STORAGE_KEYS[key], value);

export const getAuthData = () => ({
  access_token: getStorageValue('accessToken'),
});

export const preserveAuthData = (data?: Nullable<Partial<LoginResponse>>) => {
  data?.accessToken && setStorageValue('accessToken', data.accessToken);
};

export const removeAuthData = () => {
  removeStorageValue('accessToken');
};
