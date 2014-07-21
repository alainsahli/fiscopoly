/* global angular */
(function () {
    angular.module('GameBoard').directive('fieldEast', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                field: '='
            },
            templateUrl: 'app/GameBoard/templates/field-east.tpl.html',
            link: function (scope) {
                scope.showRibbon = scope.field.isSystem();
                scope.textY = scope.showRibbon ? 40 : 15;
            }
        };
    });
}());