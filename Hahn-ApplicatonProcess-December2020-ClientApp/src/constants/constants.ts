import * as environment from '@environment';
import { ValidationRules } from 'aurelia-validation';

export const config = {

  api: environment.debug
    ? 'http://localhost:7000'
    : location.protocol +
    '//' +
    location.hostname +
    (location.port ? ':' + location.port : '')
};
