# Angular js
1.If you are thinking that angular js is not updating the data according to the digest cycle then write the below code

$scope = $scope || angular.element(document).scope();
if(!$scope.$$phase)){
  $scope.$apply();
}
