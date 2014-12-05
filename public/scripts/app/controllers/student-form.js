angular.module('smAngular').controller('StudentFormCtrl', ['$scope', 'Students', function($scope, Students) {

  $scope.student = {};

  $scope.submit = function() {
    console.log($scope.student);
    Students.save($scope.student);
  };

}]);