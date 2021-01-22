
import routes from 'router';
import { Router, RouterConfiguration } from 'aurelia-router';
import { inject } from "aurelia-framework";
import { I18N } from 'aurelia-i18n';
import { DataService } from '@services/data-service';

// @inject(DataService, I18N)
@inject(I18N, DataService)
export class App {
  public message = 'Hello World!';
  public router: Router;

  constructor(
    private i18n: I18N,
    private dataService: DataService
  ) {
    this.i18n = i18n;
    console.log('i18n', this.i18n);
    this.i18n
      .setLocale('en')
      .then(() => {
        console.log('locale is set');
      });

    this.dataService.get('app/applicant/get').then((response) => {
      console.log(response.content);
    }).catch((error) => {
      console.log('this will be fired', error);
    });
  }

  public configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = 'Aurelia';
    config.map(routes);
    this.router = router;
  }
}
