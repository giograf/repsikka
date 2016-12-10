// To make a code clearer, all elements of the application to be called by the "app" variable.
var app = angular.module( 'repsikkaApp', [/* module includes */]);

app.controller( 'repsikkaCtrl', [ '$scope', function( $scope )
{
   $scope.user =
   {
      'name' : 'John Doe',
      'balance' : 20.20
   };
}]);

app.controller('navbarCtrl', function($scope, $window){

   // Function returns the link to the page if it leads not the current page, and returns link to void if the opposite is true.
   $scope.getNavLink = function(link){
      if( "/" + link == $window.location.pathname ){
         return "javascript:void(do_something())"
      }
      else{
         return link
      }
   };
});

app.directive( 'pageHeading', function()
{
   console.log('header');
   return { //<-- This is a must here...

      templateUrl : 'page-head.html'
   };
});
