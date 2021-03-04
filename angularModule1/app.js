(function(){
    
    'use strict';
    
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);
    LunchCheckController.$inject=['$scope'];
    function LunchCheckController($scope){
        
        $scope.dishes="";
        $scope.message="";
       
        $scope.response=function (){
             
            var count = countDishes($scope.dishes);
            
             if(count==0)
                {
                    $scope.message = "Please enter data first";
                }
            
             else if(count<=3&&count>=1)
                {
                    $scope.message = "Enjoy!";
                }else{
                   $scope.message ="Too much!";
                }
            
        };
        
        function countDishes(data){
           
            var total=0;
            
            var dish = new Array();
            
            dish = data.split(",");
             
            if(dish[0]!="")
                {
                      total = dish.length;
                }
            
            
            return total;
            
            
            
        }
        
    }
    
    
})();