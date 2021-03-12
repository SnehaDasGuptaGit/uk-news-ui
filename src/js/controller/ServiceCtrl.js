angular.module('angularjsExampleApp')
.controller('ServiceCtrl', [
    '$scope',
    function($scope) {
        console.log('Loaded.');
        $scope.message = 'Hello World Test';
    }
]);