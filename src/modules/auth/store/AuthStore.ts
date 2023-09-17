import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

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
    await makePersistable(this, {
      name: "AuthStore",
      properties: ["refreshToken"],
      storage: window.localStorage,
    });
  }
}
