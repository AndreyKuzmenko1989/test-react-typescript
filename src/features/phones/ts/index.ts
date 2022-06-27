export type PhoneState = {
  id: string;
  isActive: boolean;
  age: number;
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  phone: string;
  address: string;
  registered?: string;
};

export type getPhonesThunkRequestType = {
  phones: Array<PhoneState>;
};

export type initialStateType = {
  phones: Array<PhoneState>;
  isLoading: boolean;
  error: string | null;
};
