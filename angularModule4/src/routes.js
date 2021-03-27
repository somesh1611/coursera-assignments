(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
    
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/Menu/templates/home.template.html'
        
      })
    
      // Premade list page
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/Menu/templates/main_categories.template.html',
        controller: 'MainCategoriesController as mainCategory',
        resolve: {
          icategories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      });
    
    //   .state('mainList.itemDetail', {
    //     url: '/item-detail/{itemId}',
    //     templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
    //     controller: "ItemDetailController as itemDetail"
    //   });
    
    }
    
    })();
    