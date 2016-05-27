// import necessary angular modules
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// import config functions
import {routing} from './app.config';
import home from './modules/home/home-module';

angular.module('app', [uiRouter, home])
  .config(routing);
