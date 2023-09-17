import AuthStore from "modules/auth/store/AuthStore";

export class Store {
  auth = new AuthStore();

  async init() {
    await this.auth.init();
    return this;
  }
}

export const store = new Store();
