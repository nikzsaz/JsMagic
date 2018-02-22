var app = angular.module('app', []);

app.controller('controller', function($scope) {
  $scope.friends = [
    {name:'Niraj', age:25, gender:'boy'},
    {name:'Shivam', age:30, gender:'boy'},
    {name:'Soumya', age:28, gender:'girl'},
    {name:'Nikki', age:15, gender:'girl'},
    {name:'Viki', age:28, gender:'girl'},
    {name:'Bestie', age:95, gender:'boy'},
    {name:'Kim', age:50, gender:'boy'},
    {name:'Daizy', age:27, gender:'girl'},
    {name:'Patrick', age:40, gender:'boy'},
    {name:'Samantha', age:60, gender:'girl'}
  ];
  
});

app.directive('qtip', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var newvalue ={
    		my:  'bottom right',
        at: 'top right'
      };
      var newStyle={
     classes : 'qtip-bootstrap qtip-shadow'
    };
      element.qtip({ content: attrs.qtip , position: newvalue,style:newStyle,
         hide: {
                    fixed: true,
                delay: 300
                }
      });
    }
  };
});
