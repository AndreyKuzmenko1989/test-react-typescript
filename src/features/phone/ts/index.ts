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
