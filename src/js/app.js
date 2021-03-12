angular.module('newsApp', [
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