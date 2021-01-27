import { PLATFORM } from 'aurelia-pal';

export default [
  {
    route: ['/','', 'home'],
    name: 'home',
    moduleId: PLATFORM.moduleName('./components/home/home'),
    nav: true, // to show/hide link in navigation property of router
    title: 'routes.home'
  },
  {
    route: 'about',
    name: 'about',
    moduleId: PLATFORM.moduleName('./components/about/about'),
    nav: false,
    title: 'routes.about'
  },
  {
    route: 'applicant/edit',
    name: 'addapplicant',
    moduleId: PLATFORM.moduleName('./components/applicant/edit-applicant'),
    nav: true,
    title: 'routes.addapplicant'
  },
  {
    route: 'applicant/edit/:id',
    name: 'editapplicant',
    moduleId: PLATFORM.moduleName('./components/applicant/edit-applicant'),
    nav: false,
    title: 'routes.editapplicant'
  },
  {
    route: 'operation/confirm',
    name: 'operationconfirm',
    moduleId: PLATFORM.moduleName('./components/shared/confirm-operation/confirm-operation'),
    nav: false,
    title: 'routes.confirmoperation'
  }
];
