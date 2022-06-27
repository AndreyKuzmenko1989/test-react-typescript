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

export type GetTokenParam = {
  token: string;
};

export type initialStateType = {
  email: string;
  isLoggedIn: boolean;
  error: string | null;
};
