import authReducer from '../redux/slice';

export type PortalStore = ReturnType<typeof authReducer>;

export type getUserAuthThunkRequestType = {
  email: string;
  pass: string;
};

export type initialStateType = {
  email: string;
  isLoggedIn: boolean;
  error: string | null;
};
