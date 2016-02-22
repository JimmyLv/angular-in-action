angular.module('app')
  .config(function ($routeProvider, DataService) {
    $routeProvider
      .when('/', {
        templateUrl: 'book.html',
        controller: 'BookCtrl',
        resolve: {
          data: function () {
            return DataService.getData()
          }
        }
      })
  })
  .service('DataService', function () {
      return {
        name: 'Jimmy'
      }
    }
  );