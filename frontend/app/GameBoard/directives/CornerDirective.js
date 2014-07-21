/* global angular */
(function () {
    angular.module('GameBoard').directive('corner', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                field: '='
            },
            templateUrl: 'app/GameBoard/templates/corner.tpl.html'
        };
    });
}());