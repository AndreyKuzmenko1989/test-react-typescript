import authReducer from '../redux/slice';

export type AuthInfoResponse = {
  email: string;
  password: string;
};

export type PortalStore = ReturnType<typeof authReducer>;
