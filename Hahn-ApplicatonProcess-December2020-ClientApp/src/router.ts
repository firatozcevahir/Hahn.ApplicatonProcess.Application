import { PLATFORM } from 'aurelia-pal';

export default [
  {
    route: ['/','', 'home'],
    name: 'home',
    moduleId: PLATFORM.moduleName('./components/home/home'),
    nav: true, // to show/hide link in navigation property of router
    title: 'header.routes.home'
  },
  {
    route: 'about',
    name: 'about',
    moduleId: PLATFORM.moduleName('./components/about/about'),
    nav: true,
    title: 'header.routes.about'
  },
  {
    route: 'applicant/edit',
    name: 'addapplicant',
    moduleId: PLATFORM.moduleName('./components/applicant/edit-applicant'),
    nav: true,
    title: 'header.routes.addapplicant'
  },
  {
    route: 'applicant/edit/:id',
    name: 'editapplicant',
    moduleId: PLATFORM.moduleName('./components/applicant/edit-applicant'),
    nav: false,
    title: 'header.routes.editapplicant'
  }
];
