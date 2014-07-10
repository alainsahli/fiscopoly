/*global angular*/

'use strict';

angular.module('fiscopolyApp', [])
    .value('uiConstants', {
        width: 64,
        height: 96,
        fieldsPerRow: 9,
        ribbonHeight: 25
    })
    .controller('BoardCtrl',
        function($scope, uiConstants) {

    function Field(name1, name2, number, type, group) {
        this.name1 = name1;
        this.name2 = name2;
        this.number = number;
        this.type = type;
        this.group = group;
        this.isSystem = function() {
            return this.type === 'system';
        }

        if(number > 30) {
            this.orientation = 'E';
            this.x = uiConstants.height + uiConstants.fieldsPerRow * uiConstants.width;
            this.y = uiConstants.height + (number - 30) * uiConstants.width;
            this.deg = 270 ;
        } else if(number > 20) {
            this.orientation = 'N';
            this.x = uiConstants.height + (number - 20) * uiConstants.width;
            this.y = uiConstants.height;
            this.deg = 180 ;
        } else if(number > 10) {
            this.orientation = 'W';
            this.x = uiConstants.height;
            this.y = uiConstants.height + (uiConstants.fieldsPerRow - (number - 10)) * uiConstants.width;
            this.deg = 90;
        } else {
            this.orientation = 'S';
            this.x = uiConstants.height + (uiConstants.fieldsPerRow - number) * uiConstants.width;
            this.y = uiConstants.height + uiConstants.fieldsPerRow * uiConstants.width;
            this.deg = 0;
        }
    }

    $scope.fields = [
        new Field("MMBU", "", 0, 'corner'),
        new Field("SYSTEM", "", 1, 'system', 'brown'),
        new Field("KAFFEE","PAUSE", 2),
        new Field("SYSTEM", "",3, 'system','brown'),
        new Field("ZEIT","BUCHEN", 4),
        new Field("SULGEN-", "AU",5, 'station'),
        new Field("SYSTEM","", 6, 'system','cyan'),
        new Field("NEWS-","LETTER", 7),
        new Field("SYSTEM","", 8, 'system','cyan'),
        new Field("SYSTEM","", 9, 'system','cyan'),
        new Field("MEETING","", 10, 'corner'),
        new Field("SYSTEM","", 11, 'system','magenta'),
        new Field("NES-","PRESSO", 12),
        new Field("SYSTEM","", 13, 'system','magenta'),
        new Field("SYSTEM","", 14, 'system','magenta'),
        new Field("ZOLLI-","KOFEN", 15, 'station'),
        new Field("SYSTEM","", 16, 'system','ochre'),
        new Field("KAFFEE","PAUSE", 17),
        new Field("SYSTEM","", 18, 'system','ochre'),
        new Field("SYSTEM","", 19, 'system','ochre'),
        new Field("FEIERABEND","", 20, 'corner'),
        new Field("SYSTEM","", 21, 'system','red'),
        new Field("NEWS-","LETTER", 22),
        new Field("SYSTEM","", 23, 'system','red'),
        new Field("SYSTEM","", 24, 'system','red'),
        new Field("WANDER","", 25, 'station'),
        new Field("SYSTEM","", 26, 'system','yellow'),
        new Field("SYSTEM","", 27, 'system','yellow'),
        new Field("JULIO","", 28),
        new Field("SYSTEM","", 29, 'system','yellow'),
        new Field("INS MEETING","", 30, 'corner'),
        new Field("SYSTEM","", 31, 'system','green'),
        new Field("SYSTEM","", 32, 'system','green'),
        new Field("KAFFEE","PAUSE", 33),
        new Field("SYSTEM","", 34, 'system','green'),
        new Field("BERN HB","", 35, 'station'),
        new Field("NEWS-","LETTER", 36),
        new Field("STOLIS","", 37, 'system','blue'),
        new Field("ZEIT","BUCHEN", 38),
        new Field("MOLIS","", 39, 'system','blue')
    ]})
    .directive('field', function(uiConstants, $log) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                field: '='
            },
            templateUrl: 'field.html',
            link: function (scope, element) {
                scope.showRibbon = scope.field.isSystem();
            }
        };
    })
    ;




