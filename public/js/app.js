console.log('Somewhere over the rainbow...');


const app = angular.module('WeatherApp', []);

////////////////////////////////////////////////////////////

//WEATHER controller

////////////////////////////////////////////////////////////

app.controller('WeatherController', ['$http', function($http){
  const controller = this;
  this.precipitation = 'makes me feel like curling up with a mug of coffee, blanket, and a Jane Austen novel.';

    this.message = '',
    this.getWeather = function() {
      console.log('called')
        $http({
            method: 'GET',
            url: '/weather'
        }).then(
            function(response){
                console.log(response, ' this is response')
                controller.message = response.data.main.temp + " in " + response.data.name

            },
            function(err){
                console.log(err);
            }
        );
    }

    this.postWeather = function() {
      console.log('called')
      const data = {
        city: controller.query
      }
      console.log(controller.query, 'post')
        $http({
            method: 'POST',
            url: '/weather',
            data: data

        }).then(
            function(response){
                console.log(response, ' this is response from post')
                controller.message = "It's currently " + response.data.main.temp + " in " + response.data.name

            },
            function(err){
                console.log(err);
            }
        );
    }

}]); //end of WeatherController
