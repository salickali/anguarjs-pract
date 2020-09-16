(function() {
    'use strict';

 angular.module('SLCO',[])
.controller('Controller1', Controller1)
.controller('Controller2',Controller2)
.service('SLCOS',SLCOS);


Controller1.$inject = ['SLCOS'];
function Controller1(SLCOS){

    var toBuy = this;

    toBuy.items = SLCOS.getitem2Buy();

    toBuy.buyItem = function(itindex){
       return SLCOS.buyitem(itindex)
    };

    


};


Controller2.$inject = ['SLCOS'];
function Controller2(SLCOS){
        var Bought = this;

        Bought.items = SLCOS.getitemBought()
};


function SLCOS(){

    var service = this;

    var item2Buy = [

    ];
    var itemBought = [];

    item2Buy = InitialiseBuyList();

    service.getitem2Buy = function(){
        return item2Buy;
    };

    service.getitemBought = function(){
        return itemBought;
    };

    service.buyitem = function(itindex){
        var ri = item2Buy.splice(itindex,1)
        itemBought.push(ri[0])
    };

};

function InitialiseBuyList() {
    return [{name: "apple", qty: 5},
            {name: "banana", qty: 4},
            {name: "orange", qty: 3},
            {name: "grapefruit", qty: 2},
            {name: "pineapple", qty: 1}];
};

})();

