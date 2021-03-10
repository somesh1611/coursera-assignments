(function(){
    
    'use strict';
    
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
    
    
    ToBuyController.$inject=['ShoppingListCheckOffService'];
    
    function ToBuyController(ShoppingListCheckOffService)
    {
        var buy = this;
        buy.itemsToBuy = ShoppingListCheckOffService.getBuyItems();
        
        buy.buyItem = function (index){
            
        var itemName=buy.itemsToBuy[index].name;
        var itemQuantity=buy.itemsToBuy[index].quantity;
            
        try{
                
            ShoppingListCheckOffService.buyItem(itemName,itemQuantity,index);
                
        }catch(error){
                
            buy.emptyMessage=error.message;
                
        }
            
           
        };
        
        
    }
    
    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
    
    function AlreadyBoughtController(ShoppingListCheckOffService)
    {
        var bought = this;
 
        bought.itemsBought = ShoppingListCheckOffService.getBoughtItems();
        
        bought.emptyMessage="Nothing bought yet";
                
        
    }
    
    
    
    
    function ShoppingListCheckOffService()
    {
        var service=this;
        var itemsToBuy = [
            {
                "name":"Cookies",
                "quantity":10
            },
            {
                "name":"Chips",
                "quantity":5
            },
            {
                "name":"Burger",
                "quantity":4
            },
            {
                "name":"Candy",
                "quantity":1
            },
            {
                "name":"Apple",
                "quantity":8
            },
            {
                "name":"Pen",
                "quantity":4
            },
            {
                "name":"Soap",
                "quantity":2
            },
            {
                "name":"Mango",
                "quantity":24
            }
        ];
      
        
        var itemsBought =[];

        
        service.buyItem = function(itemName,itemQuantity,index){
            
            var item = {
                "name":itemName,
                "quantity":itemQuantity
            };
            
            itemsBought.push(item);
            itemsToBuy.splice(index,1);
            
            console.log(itemsBought.length);
            
            
            if(itemsToBuy.length===0)
                {
                   throw new Error("Everything is bought!");
                }
            
           
        }
        
        service.getBuyItems = function(){
            
            return itemsToBuy;
          
            
        };
        
        
        service.getBoughtItems = function(){
            
              return itemsBought;
           
        };
        
       }

})();