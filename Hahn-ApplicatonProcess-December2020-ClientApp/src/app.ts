
import { inject } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { I18N } from 'aurelia-i18n';
import routes from 'router';

@inject(I18N)
export class App {
  public message = 'Hello World!';
  public router: Router;

  constructor(
    private i18n: I18N
  ) {
    this.i18n = i18n;
    console.log('i18n', this.i18n);
    this.i18n
      .setLocale('en')
      .then(() => {
        console.log('locale is set');
      });
  }

  public configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = 'Aurelia';
    config.map(routes);
    this.router = router;
  }
}
