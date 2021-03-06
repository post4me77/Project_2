var tes;
var myApp = angular.module('myApp',[]);

myApp.controller('filmCtrl', function($scope){

   $scope.filmsinfo = [
       {
       name:"Avatar",
       director:"James Cameron",
       type:"Blu-ray/DVD",
       year:2014,
       duration:324,
       price:2.95
   }, {
       name:"Inception",
       director:"Christopher Nolan",
       type:"DVD",
       year:2010,
       duration:148,
       price:0.75
   },{
       name : "The Social Network",
       director : "David Fincher",
       type : "DVD",
       year : 2011,
       duration : 120,
       price : 0.75
   },{
       name : "Paranormal Activity",
       director : "Oren Peli",
       type : "DVD",
       year : 2009,
       duration : 86,
       price : 0.75
   },{
       name : "Kung Fu Panda",
       director : "Mark Osborne, John Stevenson",
       type : "DVD",
       year : 2008,
       duration : 88,
       price : 0.95
   },{
       name : "Wall-E",
       director : "Andrew Stanton",
       type : "DVD",
       year : 2008,
       duration : 98,
       price : 1.87
   },{
       name : "The Chronicles of Narnia: Prince Caspian",
       director : "Andrew Adamson",
       type : "DVD",
       year : 2008,
       duration : 149,
       price : 0.99
   },{
       name : "The Nightmare on Elm Street Collection",
       director : "Chuck Russell, Jack Sholder, Rachel Talalay",
       type : "DVD",
       year : 1999,
       duration : 672,
       price : 10.02
   }];

    $scope.anime = [{
        name : "Spirited Away",
        director: "Hayao Miyazaki",
        type: "DVD",
        year: 2003,
        duration: 132,
        price : 5.13
    }, {
        name : "Fantasia",
        director: "Bill Roberts, Ford Beebe",
        type: "DVD",
        year: 2000,
        duration: 120,
        price : 8.95
    },{
        name : "Ghost in the Shell",
        director: "Mamoru Oshii",
        type: "Blu-ray Disc",
        year: 2014,
        duration: 82,
        price : 11.45
    },{
        name : "Paprika",
        director: "Satoshi Kon",
        type: "Blu-ray Disc",
        year: 2007,
        duration: 90,
        price : 5.50
    }
    ];

    $scope.options = [{
        value: 'Films',
        label: 'Films'
    }, {
        value: 'Anime',
        label: 'Anime'
    }];

    $scope.selection = $scope.options[0];

});
