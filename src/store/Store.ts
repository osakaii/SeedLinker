import { User } from "api/types/user";
import AuthStore from "modules/auth/store/AuthStore";

export class Store {
  auth = new AuthStore();
  user: User | null = null;

  async init() {
    await this.auth.init();
    return this;
  }
}

export const store = new Store();
