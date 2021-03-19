(function(){
    
    'use strict';
    
    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController',NarrowItDownController)
  
    .service('MenuSearchService',MenuSearchService)
    .directive('foundItems', foundItemsDirective);

    function foundItemsDirective() {
        var ddo = {
             scope: {
                items: '<',
             
                onRemove: '&'
            },
            templateUrl: 'foundItems.html',
           
            controller: foundItemsDirectiveController,
            controllerAs: 'menu',
            bindToController: true
        };

        return ddo;
    }

    function foundItemsDirectiveController() {
        var menu = this;
    }
    
    
    NarrowItDownController.$inject=['MenuSearchService'];
    
    function NarrowItDownController(MenuSearchService)
    {
       var menu = this;
        menu.searchTerm="";
        menu.items = "";
        menu.narrow=function(){
            
            menu.nothingFound = "";
            
        if(menu.searchTerm)
        {
                     var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm.toLowerCase());
            
                     promise.then(function(response){
                        if (response.length == 0) {
                        menu.nothingFound = "Nothing found";
                        }   
                            menu.items=response;
             
                         console.log(menu.items);    
       
                });
        }else {
            
                menu.nothingFound = "Nothing found";
                menu.items = "";
        }
            
           
           
        
       
        
            
        };
        
         menu.removeItem = function(itemIndex) {
            menu.items.splice(itemIndex, 1);
        };

        
        
    }

    
    
    
    MenuSearchService.inject=['$http'];
    function MenuSearchService($http)
    {
        var service=this;
        service.getMatchedMenuItems=function(searchTerm)  //
        {
            
           var response = $http({
                method:"GET",
                url:("https://davids-restaurant.herokuapp.com/menu_items.json")
                
            });

            
              return response.then(function(result) {
                var menuData = result.data;
                var foundItems = [];
                menuData.menu_items.forEach(function(item) {
                    if (item.description.indexOf(searchTerm) != -1) {
                        foundItems.push({
                            name: item.name,
                            short_name: item.short_name,
                            description: item.description
                        });
                    }
                });
                return foundItems;
            });
                
                
      
            
        };

        
       }

})();