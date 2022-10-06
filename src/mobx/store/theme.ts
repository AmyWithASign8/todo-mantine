import { makeAutoObservable } from "mobx";

class Theme {
  theme = "light";
  constructor() {
    makeAutoObservable(this);
  }
  themeChanger() {
    if ((this.theme = "light")) this.theme = "dark";
    else this.theme = "light";
  }
}

export default new Theme();
