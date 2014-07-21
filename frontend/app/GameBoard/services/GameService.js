/* global angular */
(function () {
    angular.module('GameBoard').service('GameService', function GameService(PlayersService) {
        var currentPlayer = 1;

        this.rollDiceAndMove = function () {
            var die1 = Math.floor(Math.random() * 6) + 1,
                die2 = Math.floor(Math.random() * 6) + 1;

            var player = PlayersService.getPlayers()[currentPlayer - 1];
            player.fieldNumber = (player.fieldNumber + die1 + die2) % 40;
            return { die1: die1, die2: die2};
        }
    });
}());