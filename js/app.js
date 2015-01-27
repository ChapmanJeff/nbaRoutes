var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

  //router here
  $routeProvider
  	.when('/', {
  		templateUrl: 'js/home/homeTmpl.html',
  		controller: 'homeCtrl',
  		resolve: {
  			allData: function (teamService, $route) {
  				var newData = {};
  				newData.lakers = teamService.getTeamData('losangeleslakers');
  				newData.jazz = teamService.getTeamData('utahjazz');
  				newData.miami = teamService.getTeamData('miamiheat');
  				return newData;
  			}
  		}
  	})
  	.when('/teams/:team', {
  		templateUrl: 'js/teams/teamTmpl.html',
  		controller: 'teamCtrl',
  		resolve: {
  			teamData: function(teamService, $route) {
  				return teamService.getTeamData($route.current.params.team);
  			}
  		}
  	})
  	.otherwise('/')
});