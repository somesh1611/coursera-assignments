(function () {
    'use strict';
    
    angular.module('data')
    .service('MenuDataService', MenuDataService);
    
    
    MenuDataService.$inject = ['$q','$http']
    function ShoppingListService($q,$http) {
      var service = this;
    
      // List of shopping items
      var categories = [];

     
    
     
    
      // Simulates call to server
      // Returns a promise, NOT items array directly
      service.getAllCategories = function () {
        
        var deferred = $q.defer();

        var response = $http({
            method:"GET",
            url:("https://davids-restaurant.herokuapp.com/categories.json")
            
        });

        deferred.resolve(response);
    
        
    
        return deferred.promise;
      };
    }
    
    })();
    