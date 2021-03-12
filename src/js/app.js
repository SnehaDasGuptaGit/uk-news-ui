angular.module('angularjsExampleApp', [
  'ngRoute'
])
.config([
  '$routeProvider',
  function($routeProvider) {
      $routeProvider
          .when('/', {
              templateUrl: 'views/news.html',
              controller: 'ServiceCtrl'
          });
  }
]);