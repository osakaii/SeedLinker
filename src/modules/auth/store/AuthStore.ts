import { makeAutoObservable } from "mobx";

export default class AuthStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  async init() {}
}
