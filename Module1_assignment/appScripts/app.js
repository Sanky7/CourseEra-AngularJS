(function (){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject =['$scope'];
  function LunchCheckController($scope){
      $scope.message = "";
      $scope.color = "";
      $scope.menuList = "";

      $scope.checkQuantity = function(){
        $scope.splitMenu = $scope.menuList.split(",");
        // Eliminate empty space
        $scope.splitMenu = $scope.splitMenu.filter(function(entry) { return entry.trim() != ''; });
        if($scope.splitMenu.length <= 0){
          $scope.message = "Please enter data first!";
          $scope.menuList = " ";//replace multiple spaces with empty
          $scope.color = "red";
        }
        if($scope.splitMenu.length >0 && $scope.splitMenu.length <=3){
          $scope.message = "Enjoy!";
          $scope.color = "green";
          return;
        }
        if($scope.splitMenu.length > 3){
          $scope.message = "Too much!";
          $scope.color = "green";
            return;
        }

      };

      $scope.clear = function(){
        $scope.message = "";
        $scope.menuList = "";//replace multiple spaces with empty
        $scope.color = "";
      };
  }
})();
