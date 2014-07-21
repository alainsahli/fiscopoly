/* global angular */
(function () {
    angular.module('GameBoard', []).constant('uiConstants', {
        fieldWidth: 64,
        fieldHeight: 96,
        ribbonHeight: 25,
        ribbonWidth: 64,
        fieldsPerRow: 9
    });
}());