/**
 * Created by polik on 20.07.16.
 */
var model = "Zodiac";
var zodiacs = [
  {
    name: 'Aries',
    ruName: 'Овен',
    position: 0,
    image: 'img/aries.png',
    period: '21.03-20.04'
  },
  {
    name: 'Taurus',
    ruName: 'Телец',
    position: 1,
    image: 'img/taurus.png',
    period: '21.04-21.05'
  },
  {
    name: 'Gemini',
    ruName: 'Близнецы',
    position: 2,
    image: 'img/gemini.png',
    period: '21.05-21.06'
  },
  {
    name: 'Cancer',
    ruName: 'Рак',
    position: 3,
    image: 'img/cancer.png',
    period: '22.06-22.07'
  },
  {
    name: 'Leo',
    ruName: 'Лев',
    position: 4,
    image: 'img/leo.png',
    period: '23.07-23.08'
  },
  {
    name: 'Virgo',
    ruName: 'Дева',
    position: 5,
    image: 'img/virgo.png',
    period: '24.08-23.09'
  },
  {
    name: 'Libra',
    ruName: 'Весы',
    position: 6,
    image: 'img/libra.png',
    period: '24.09-23.10'
  },
  {
    name: 'Scorpio',
    ruName: 'Скорпион',
    position: 7,
    image: 'img/scorpio.png',
    period: '24.10-22.11'
  },
  {
    name: 'Sagittarius',
    ruName: 'Саб-зиро',
    position: 8,
    image: 'img/sagittarius.png',
    period: '23.11-21.12'
  },
  {
    name: 'Capricorn',
    ruName: 'Козерог',
    position: 9,
    image: 'img/capricorn.png',
    period: '22.12-20.01'
  },
  {
    name: 'Aquarius',
    ruName: 'Водолей',
    position: 10,
    image: 'img/aquarius.png',
    period: '21.01-19.02'
  },
  {
    name: 'Pasces',
    ruName: 'Рыбы',
    position: 11,
    image: 'img/pasces.png',
    period: '20.02-20.03'
  }
];
var zodiacApp = angular.module("zodiacApp", []);

zodiacApp.controller("ZodiacCtrl", function ($scope) {
  $scope.list = zodiacs;
  $scope.zList = false;
  $scope.zTable = false;
  $scope.zCrcl = false;

  $scope.showList = function () {
    $scope.zList = true;
    $scope.zTable = false;
    $scope.zCrcl = false;
  };
  $scope.showTable = function () {
    $scope.zList = false;
    $scope.zTable = true;
    $scope.zCrcl = false;
  };
  $scope.showCrcl = function () {
    $scope.zList = false;
    $scope.zTable = false;
    $scope.divs = document.getElementsByClassName("circle_signs");
    var ln = $scope.divs.length,
        delta = Math.PI * 2 / ln,
        x = 0,
        y = window.innerHeight/2,
        angle = 0;

    for (var i = 0; i < ln; i++) {
      $scope.divs[i].style.position = 'absolute';
      $scope.divs[i].style.left = 180 * Math.cos(angle) + x + 'px';
      $scope.divs[i].style.top = 180 * Math.sin(angle) + y + 'px';

      angle += delta;
    }

    $scope.zCrcl = true;
  };
});
