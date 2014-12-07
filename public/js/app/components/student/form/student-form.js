define(['../module', '../student-service', '../klass-service'], function(module) {

  module.controller('StudentFormCtrl', ['$scope', 'Students', 'Klass', function($scope, Students, Klass) {

    $scope.student = {};
    $scope.klasses = Klass.query();

    $scope.submit = function() {
      console.log($scope.student);
      Students.save($scope.student);
    };

  }]);

});