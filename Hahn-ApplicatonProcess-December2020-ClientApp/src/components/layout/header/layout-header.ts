import { inject } from 'aurelia-framework';
import { I18N } from 'aurelia-i18n';
import { Router } from 'aurelia-router';
import { config } from '@constants';

@inject(I18N, Router)
export class LayoutHeader {
  public swaggerUrl = `${config.api}/swagger`;
  constructor(
    private i18n: I18N,
    private router: Router
  ) {
   }

  public changeLang(val: string): void {
    this.i18n.setLocale(val)
      .then(() => {
        // 
      });
  }
}
