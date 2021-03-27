(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'src/Menu/templates/categories.template.html',
      bindings: {
        categories: '<'
      }
    });
    
    })();
