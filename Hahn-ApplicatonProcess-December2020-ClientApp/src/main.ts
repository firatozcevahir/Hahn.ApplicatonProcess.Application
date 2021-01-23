import { Aurelia } from 'aurelia-framework';
import * as environment from '@environment';
import { PLATFORM } from 'aurelia-pal';

import { I18N, TCustomAttribute } from 'aurelia-i18n';
import Backend from 'i18next-xhr-backend';

import { AppRouter } from 'aurelia-router';
import { EventAggregator } from 'aurelia-event-aggregator';
import { ValidationMessageProvider } from 'aurelia-validation';
import { BootstrapFormRenderer } from '@helpers/bootstrap-form-renderer';

export function configure(aurelia: Aurelia): void {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));
  console.log(environment.debug);

  aurelia.use
    .developmentLogging(environment.debug ? 'debug' : 'warn')
    .plugin(PLATFORM.moduleName('aurelia-validation'))
    .plugin(PLATFORM.moduleName('aurelia-dialog'), (config) => {
      config.useDefaults();
    })
    .plugin(PLATFORM.moduleName('aurelia-i18n'), (instance: I18N) => {
      const aliases = ['t', 'i18n'];
      TCustomAttribute.configureAliases(aliases);

      instance.i18next.use(Backend);
      return instance
        .setup({
          backend: {
            // <-- configure backend settings
            loadPath: './assets/i18n/locales/{{lng}}.json', // <-- XHR settings for where to get the files from
          },
          attributes: aliases,
          lng: 'en',
          fallbackLng: 'en',
          debug: false,
        })
        .then(() => {
          const router = aurelia.container.get(AppRouter);
          router.transformTitle = (title) => instance.tr(title);
          const eventAggregator = aurelia.container.get(EventAggregator);
          eventAggregator.subscribe('i18n:locale:changed', () => {
            router.updateTitle();
          });
        });
    });

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
