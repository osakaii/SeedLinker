export enum AuthRoutesPath {
  SignUp = "/sign-up",
  SignUpFinish = "/sign-up/finish",
  SignIn = "/sign-in",
}

export type SignUpForm = {
  username: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  birthday?: string;
  note?: string;
  city?: number;
  show_phone_number?: boolean;
  password: string;
  passwordRepeat: string;
};

export type SignInForm = {
  username: string;
  password: string;
};
