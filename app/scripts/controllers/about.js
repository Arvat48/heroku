'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
    .controller('AboutCtrl', AboutCtrl)

AboutCtrl.$inject = ['$scope'];
function AboutCtrl($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
}