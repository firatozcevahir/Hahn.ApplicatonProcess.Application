import { I18N } from 'aurelia-i18n';

export class App {
  static inject = [I18N];
  public message = 'Hello World!';

  constructor(private i18n: I18N) {
    this.i18n = i18n;
    this.i18n
      .setLocale('en')
      .then(() => {
        console.log('locale is set');
      });
  }
}
