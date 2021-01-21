import { I18N } from "aurelia-i18n";

export class LayoutHeader {

  static inject = [I18N];
  constructor(private i18n: I18N) {

  }

  public changeLang(val: string): void {
    this.i18n.setLocale(val)
      .then(() => {
        //
      });
  }


}
