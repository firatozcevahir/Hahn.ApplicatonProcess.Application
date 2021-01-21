import { I18N } from 'aurelia-i18n';
import routes from 'router';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  static inject = [I18N];
  public message = 'Hello World!';
  public router: Router;

  constructor(private i18n: I18N) {
    this.i18n = i18n;
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
