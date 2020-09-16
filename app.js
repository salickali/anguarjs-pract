(function (){
'use strict';


var l1 = ["salick ali",'ali','salman','aamina'];
var l2 = [

    {
        name: 'juice',
        qty: "2liter"
    },
    {
        name: 'ice',
        qty: "2liter"
    },
    {
        name: 'water',
        qty: "2liter"
    }
];
    angular.module('LunchCheck',[])

    .controller('LunchCheckController',LunchCheckController)
    .controller('Pctrl',Pctrl)
    .controller('Cctrl',Cctrl)
    .filter('rz',zerotrunFilter);

    Pctrl.$inject = ['$scope'];
    function Pctrl(){
        var parent = this;
        parent.value = 1;

    }
    Cctrl.$inject = ['$scope']
    function Cctrl($scope){

        var child = this;
        child.value = 5;
    }
    LunchCheckController.$inject = ['$scope','rzFilter']

    function LunchCheckController ($scope, rzFilter){
        $scope.items = '';
        $scope.checked = false;

        $scope.l1 = l1;
        $scope.l2 = l2;

        $scope.Add_to_cart = function(){
          var ad =  { name: $scope.nameitem,
            qty: $scope.qitem};
            // alert(ad.name)

           
               
            $scope.l2.push(ad);
           
        };
        
        
        $scope.original =function(){
            var msg = 'salick';
            return msg;
          };
        
      $scope.change =function(){
        var msg = 'salick';
        return rzFilter(msg);
      };


        $scope.Check = function(){
            
            if($scope.items.trim().length === 0){
                $scope.empty = true;
                $scope.messagee = 'Please Enter data first';
            }
            else{
                $scope.checked = true;
                $scope.emtpy =false;

                var it = $scope.items.split(',');
                var itWithoutEmptys = it.filter(function(e) {
                    return e.trim() !== '';
                });
                if(itWithoutEmptys.length >3 ){
                    $scope.message = 'Too Much';
                }
                else{
                    $scope.message = 'Enjoy'
                }

            }
          
           
        };

    }

    function zerotrunFilter(){
        return function(input, from ,to){
           input  = input.replace(from,to);
            return input;

        }
    }

  
})();