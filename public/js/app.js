console.log('Somewhere over the rainbow...');


const app = angular.module('WeatherApp', []);

////////////////////////////////////////////////////////////

//WEATHER controller

////////////////////////////////////////////////////////////

app.controller('WeatherController', ['$http', function($http){
  const controller = this;
  this.precipitation = 'makes me feel like curling up with a mug of coffee, blanket, and a Jane Austen novel.';


}]); //end of WeatherController
