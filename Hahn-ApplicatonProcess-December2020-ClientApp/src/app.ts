import { I18N } from 'aurelia-i18n';
import routes from 'router';
import { Router, RouterConfiguration } from 'aurelia-router';
import { inject } from "aurelia-framework";
import {  DataService } from './services/data-service';

// @inject(DataService, I18N)
@inject(DataService)
export class App {
  public message = 'Hello World!';
  public router: Router;

  constructor(
    // private i18n: I18N,
    private dataService: DataService
    ) {
    // this.i18n = i18n;
    // this.i18n
    //   .setLocale('en')
    //   .then(() => {
    //     console.log('locale is set');
    //   });

      this.dataService.GetApplicants();
  }

  public configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = 'Aurelia';
    config.map(routes);
    this.router = router;
  }
}
