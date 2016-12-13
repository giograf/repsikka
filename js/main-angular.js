var job_list = [{
   "name": "Honey Delivering job",
   "location": "Oulu",
   "category": "Deliver",
   "date": new Date("2016-12-21T11:20"),
   "pay": 6,
   "description": "According to all known laws of aviation there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible."
},
{
   "name": "Looking for cook",
   "location": "Oulu",
   "category": "Cook",
   "date": new Date("2016/12/15 12:44"),
   "pay": 10,
   "description": "You make food me naow."
},
{
   "name": "Moving job",
   "location": "Oulu",
   "category": "Deliver",
   "date": new Date("2016/12/15"),
   "pay": 10,
   "description": "Help I need a person with car to move my stuff."
},
{
   "name": "Dirty room",
   "location": "Oulu",
   "category": "Cleaning",
   "date": new Date("2016/12/13 19:20"),
   "pay": 15,
   "description": "My mom says my room is too dirty help clean."
},
{
   "name": "Looking for tutor",
   "location": "Oulu",
   "category": "Tutoring",
   "date": new Date("2016/12/16"),
   "pay": 40,
   "description": "Can't seem to learn swedish need help"
},
{
   "name": "Need a baby sittah",
   "location": "Oulu",
   "category": "Babysitting",
   "date": new Date("2016/12/13"),
   "pay": 30,
   "description": "My babyboy requires sitting."
}];

var category_list = ['Delivery', 'Cleaning', 'Cooking', 'Dog Walking', 'Babysitting', 'Tutoring', 'Other'];

// To make a code clearer, all elements of the application to be called by the "app" variable.
var app = angular.module('repsikkaApp', [/* module includes */]);

app.controller('repsikkaCtrl', ['$scope', function ($scope) {
   $scope.user =
      {  /* A testuser for our prototype site :) */
         'name': 'John Doe',
         'phone': '+358 40 123 4567',
         'email': 'john.doe@email.com',
         'balance': 20.20
      };

   $scope.categories = category_list;

   $scope.moreDosh = function(moolah) {
      $scope.user.balance += moolah;
   };
}]);

app.controller('indexCtrl', function($scope,$timeout) {
   $scope.jobs = job_list;

   /*
    * All this is to make sure the urgent jobs that are expiring in 24 hours (86400000 milliseconds) are shown.
    * Also the jobs that are expired are also not shown.
    */
   $scope.between = function(prop, value1, value2) {
      var thisDate = new Date();
      return function(item) {
         var dateDiff = item[prop].getTime() - thisDate.getTime();
         if (dateDiff > value1 && dateDiff < value2) return true;
      };
   };

   /* Returning the millisecond value of the date difference. */
   $scope.dateDiff = function(value){
      var thisDate = new Date();
      var dateDiff = value.getTime() - thisDate.getTime();
      return dateDiff;
   }

   /* A simple thing to make sure the scope is refreshed every second. */
   var fireDigestEverySecond = function() {
      $timeout(function() {fireDigestEverySecond()}, 1000);
   };
    
    fireDigestEverySecond();
});

app.controller('navbarCtrl', function ($scope, $window) {

   // Function returns the link to the page if it leads not the current page, and returns link to void if the opposite is true.
   $scope.getNavLink = function (link) {
      if ("/" + link == $window.location.pathname) {
         return "#"
      }
      else {
         return link
      }
   };
});
app.controller('accountCtrl', function ($scope) {
   /* The following controller fills out the Account page. */
   $scope.pill_content = [{
      "pill_name": "For Worker",
      "id": "employee",
      "tab_name_1": "Current Job I Have to Do",
      "tab_name_2": "Jobs Applied"
   },
      {
         "pill_name": "For Employer",
         "id": "employer",
         "tab_name_1": "Jobs Being Done For Me",
         "tab_name_2": "Jobs I Posted"
      },
      {
         "pill_name": "My Account",
         "id": "account"
      }
   ];
});

app.directive('pageHeading', function () {
   return { //<-- This is a must here...
      templateUrl: 'page-head.html'
   };
});

app.controller("filterCtrl", function ($scope) {

   $scope.jobs = job_list;

   $scope.FilteringArray = {};
   $scope.index = 0;
   $scope.categoryFilter = function (job) {
      return $scope.FilteringArray[job.category] || Allcategories($scope.FilteringArray);
   };

   function Allcategories(filterObj) {
      for (var key in filterObj) {
         if (filterObj[key]) {
            console.log($scope.FilteringArray);
            return false;
         }
      }
      return true;
   }
});
