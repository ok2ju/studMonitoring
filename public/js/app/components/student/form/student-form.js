define(['../module'], function(module) {

  module.controller('StudentFormCtrl', ['$scope', 'Students', 'Klass', function($scope, Students, Klass) {

    $scope.klasses = Klass.query();

    $scope.submit = function() {
      if($scope.studentForm.$valid) {
        console.log($scope.student);
        Students.save($scope.student);
      }
    };

  }]);

});