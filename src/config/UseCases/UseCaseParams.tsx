import { AuthActionType } from "../../core/utils/AppEnums";

export class NoParams {}
export class LoginWithEmailParams {
  email: string;
  password: string;
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

export class LoginActionParams {
  loginType: AuthActionType;
  email: string;
  password: string;
  constructor(email: string, password: string, loginType: AuthActionType) {
    this.loginType = loginType;
    this.email = email;
    this.password = password;
  }
}
