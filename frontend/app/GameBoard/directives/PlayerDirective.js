/* global angular */
(function () {
    angular.module('GameBoard').directive('player', function ($log, fields) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                player: '='
            },
            templateUrl: 'app/GameBoard/templates/player.tpl.html',
            link: function (scope) {
                scope.$watch('player.fieldNumber', function () {
                    var field = _.find(fields, { number: scope.player.fieldNumber}),
                        coords = field.getPlayerPosition(scope.player.playerId);
                    $log.log(scope.player.playerId + " " + coords);
                    scope.x = coords.x;
                    scope.y = coords.y;
                });
            }
        };
    });
}());