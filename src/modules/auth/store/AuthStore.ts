
import { makeAutoObservable } from "mobx";

export type UserTokens = {
  accessToken: string;
  refreshToken: string;
};
export default class AuthStore {
  accessToken: string | null = "";
  refreshToken: string | null = "";

  setAccessToken(token: string) {
    this.accessToken = token;
  }
  setUserTokens(tokens: UserTokens) {
    this.refreshToken = tokens.refreshToken;
    this.accessToken = tokens.accessToken;
  }
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  async logout() {
    this.refreshToken = null;
    this.accessToken = null;
  }

  async init() {
  }
}
