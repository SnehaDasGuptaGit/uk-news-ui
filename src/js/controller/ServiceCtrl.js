angular.module('newsApp')
.controller('ServiceCtrl', [
    '$scope', '$http', '$window',
    function($scope, $http, $window) {
        $scope.appURL = $window.AppConstants.api; 
        $scope.params = {
            country: 'gb',
            lang : 'en' 
        }
        $http.get($scope.appURL + '/news', {
            params: $scope.params        
        })
        .then(function successCallback(response) {
              $scope.articles = response.data.articles;
              console.log($scope.articles)
        }, function errorCallback(error) {
                console.log(error);
        });
    }
]);