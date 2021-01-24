import * as environment from '@environment';
import { ValidationRules } from 'aurelia-validation';

export const config = {

  api: environment.debug
    ? 'http://localhost:7000'
    : location.protocol +
      '//' +
      location.hostname +
      (location.port ? ':' + location.port : ''),



  validationRules: ValidationRules.ensure('name')
    .required()
    .withMessage('data.errors.name_required')
    .minLength(5)
    .withMessage('data.errors.name_greater_than|5')
    .ensure('familyName')
    .required()
    .withMessage('data.errors.familyname_required')
    .minLength(5)
    .withMessage('data.errors.familyname_greater_than|5')
    .ensure('age')
    .range(20, 60)
    .withMessage('data.errors.age_between|20-60')
    .satisfies((p) => /^[1-9]\d*$/.test(p))
    .withMessage('data.errors.age_invalid')
    .ensure('address')
    .required()
    .withMessage('data.errors.address_required')
    .minLength(10)
    .withMessage('data.errors.address_greater_than|10')
    .ensure('emailAddress')
    .required()
    .withMessage('data.errors.email_address_required')
    .satisfies((p) => p === '' ? true : /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(p))
    .withMessage('data.errors.invalid_email_address')
    .ensure('countryOfOrigin')
    .required()
    .withMessage('data.errors.country_required')
    .minLength(2)
    .withMessage('data.errors.country_greater_than|2')
    .rules,
};
