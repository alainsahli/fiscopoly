/* global angular */
(function () {
    angular.module('GameBoard').directive('fieldWest', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                field: '='
            },
            templateUrl: 'app/GameBoard/templates/field-west.tpl.html',
            link: function (scope) {
                scope.showRibbon = scope.field.isSystem();
                scope.textY = scope.showRibbon ? -56 : -81;
            }
        };
    });
}());