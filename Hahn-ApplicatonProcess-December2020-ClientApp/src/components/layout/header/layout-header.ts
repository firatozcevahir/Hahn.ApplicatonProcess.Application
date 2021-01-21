import { I18N } from "aurelia-i18n";
import { bindable } from 'aurelia-framework';
import { Router } from 'aurelia-router';

export class LayoutHeader {

  @bindable router: Router;
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
