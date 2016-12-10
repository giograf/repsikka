angular.module( 'repsikkaApp', [/* module includes */])
.controller( 'repsikkaCtrl', [ '$scope', function( $scope )
{
   $scope.user =
   {
      'name' : 'John Doe',
      'balance' : 20.20
   };
}])
.directive( 'pageHeading', function()
{
   console.log('header');
   return { //<-- This is a must here...

      templateUrl : 'page-head.html'
   };
});
