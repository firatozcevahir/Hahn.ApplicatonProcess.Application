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
    route: 'applicant/add',
    name: 'addapplicant',
    moduleId: PLATFORM.moduleName('./components/applicant/add-applicant'),
    nav: false,
    title: 'header.routes.addapplicant'
  }
];
