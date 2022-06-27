export type getUserAuthThunkRequestType = {
  email: string;
};
export type GetUserParams = {
  email: string;
  password: string;
};

export type getTokenRequestType = {
  token: string;
};

export type GetTokenParams = {
  token: string;
};

export type LoginResponse = {
  accessToken: string;
};

export type initialStateType = {
  email: string;
  isLoggedIn: boolean;
  error: string | null;
};
