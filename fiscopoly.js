/*global angular*/

'use strict';

angular.module('fiscopolyApp', [])
    .controller('BoardCtrl',
        function($scope) {

    $scope.layout = {
        width: 65,
        height: this.width * 1.5,
        fieldsPerRow: 9,
        ribbonHeight: 25,
        canvasLength: this.fieldsPerRow * this.width + 2 * this.height,
        backgroundColor: '#CEE7CE',
        fieldGroupsColors: {
            brown: '#945531',
            cyan: '#ADE3FF',
            magenta: '#DE3894',
            ochre: '#F79618',
            red: '#EF1C21',
            yellow: 'yellow',
            green: '#18B25A',
            blue: '#0071BD'
        }
    }

    function Field(name, number, type, group) {
        this.name = name;
        this.number = number;
        this.type = type;
        this.group = group;
        this.isSystem = function() {
            return this.type === 'system';
        }
    }

    $scope.fields = [
        new Field("MONTAG", 0, 'corner'),
        new Field("SYSTEM", 1, 'system', 'brown'),
        new Field("KAFFEEPAUSE", 2),
        new Field("SYSTEM", 3, 'system','brown'),
        new Field("ZEIT BUCHEN", 4),
        new Field("SULGENAU", 5, 'station'),
        new Field("SYSTEM", 6, 'system','cyan'),
        new Field("NEWSLETTER", 7),
        new Field("SYSTEM", 8, 'system','cyan'),
        new Field("SYSTEM", 9, 'system','cyan'),
        new Field("MEETING", 10, 'corner'),
        new Field("SYSTEM", 11, 'system','magenta'),
        new Field("NESPRESSO", 12),
        new Field("SYSTEM", 13, 'system','magenta'),
        new Field("SYSTEM", 14, 'system','magenta'),
        new Field("OBERZOLLIKOFEN", 15, 'station'),
        new Field("SYSTEM", 16, 'system','ochre'),
        new Field("KAFFEEPAUSE", 17),
        new Field("SYSTEM", 18, 'system','ochre'),
        new Field("SYSTEM", 19, 'system','ochre'),
        new Field("FEIERABEND", 20, 'corner'),
        new Field("SYSTEM", 21, 'system','red'),
        new Field("NEWSLETTER", 22),
        new Field("SYSTEM", 23, 'system','red'),
        new Field("SYSTEM", 24, 'system','red'),
        new Field("WANDER", 25, 'station'),
        new Field("SYSTEM", 26, 'system','yellow'),
        new Field("SYSTEM", 27, 'system','yellow'),
        new Field("JULIO", 28),
        new Field("SYSTEM", 29, 'system','yellow'),
        new Field("INS MEETING", 30, 'corner'),
        new Field("SYSTEM", 31, 'system','green'),
        new Field("SYSTEM", 32, 'system','green'),
        new Field("KAFFEEPAUSE", 33),
        new Field("SYSTEM", 34, 'system','green'),
        new Field("BERN HB", 35, 'station'),
        new Field("NEWSLETTER", 36),
        new Field("STOLIS", 37, 'system','blue'),
        new Field("ZEIT BUCHEN", 38),
        new Field("MOLIS", 39, 'system','blue')
    ]})
    .directive('field', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                field: '='
            },
            templateUrl: 'field.html'
        };
    })
    ;




