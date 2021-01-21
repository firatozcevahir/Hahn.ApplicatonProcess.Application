import { PLATFORM } from 'aurelia-pal';

export default [
  {
    route: ['', 'home'],
    name: 'home',
    moduleId: PLATFORM.moduleName('./components/home/home'),
    nav: true,
    title: 'header.routes.home'
  },
  {
    route: 'about',
    name: 'about',
    moduleId: PLATFORM.moduleName('./components/about/about'),
    nav: true,
    title: 'header.routes.about'
  }
];
