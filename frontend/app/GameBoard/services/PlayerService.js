/* global angular */
(function () {
    angular.module('GameBoard').service('PlayersService', function PlayersService() {
        var Player = function (playerId, name, color) {
            this.playerId = playerId;
            this.name = name;
            this.color = color;
            this.money = 1500;
            this.fieldNumber = 0;
        };

        var players =
            [
                new Player(1, "Anton", 'blue'),
                new Player(2, "Berta", 'red'),
                new Player(3, "Carl", 'pink'),
                new Player(4, "Dora", 'yellow')
            ];

        players[1].fieldNumber = 4;

        this.getPlayers = function () {
            return players;
        };

    });
}());