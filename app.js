(function (){
'use strict';
    angular.module('LunchCheck',[])

    .controller('LunchCheckController',LunchCheckController);
    LunchCheckController.$inject = ['$scope']

    function LunchCheckController ($scope){
        $scope.items = '';
        $scope.checked = false;
      


        $scope.Check = function(){
            if($scope.items.trim().length === 0){
                $scope.empty = true;
                $scope.message = 'Please Enter data first';
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

  
})();