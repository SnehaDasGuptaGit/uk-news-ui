angular.module('newsApp')
.controller('ServiceCtrl', [
    '$scope', '$http',
    function($scope, $http) {
        $scope.message = 'Hello World Test';
        const appURL =  "http://localhost:4000";
        $http.get(appURL+ '/news', {
            params: { 'lang': 'en' }        
          }).then(function successCallback(response) {
              console.log('hi');
            }, function errorCallback(error) {
                console.log(error);
            });
    }
]);