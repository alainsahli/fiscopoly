/* global angular */
(function () {
    angular.module('GameBoard').controller('BoardCtrl', function BoardCtrl($scope, fields, PlayersService, GameService) {
        $scope.fields = fields;
        $scope.fieldsExceptCorners = _.reject($scope.fields, { type: 'corner' });
        $scope.fieldsByNumber = _.indexBy($scope.fields, 'number');
        $scope.players = PlayersService.getPlayers();

        $scope.rollDiceAndMove = function () {
            $scope.lastDices = GameService.rollDiceAndMove();
        }
    });
}());