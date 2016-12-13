var job_list = [{
   "name": "Honey Delivering job",
   "location": "Oulu",
   "category": "Deliver",
   "date": "21/12/2016",
   "pay": 6,
   "description": "According to all known laws of aviation there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible."
},
{
   "name": "Looking for cook",
   "location": "Oulu",
   "category": "Cook",
   "date": "15/12/2016",
   "pay": 10,
   "description": "You make food me naow."
},
{
   "name": "Moving job",
   "location": "Oulu",
   "category": "Deliver",
   "date": "15/12/2016",
   "pay": 10,
   "description": "Help I need a person with car to move my stuff."
},
{
   "name": "Dirty room",
   "location": "Oulu",
   "category": "Cleaning",
   "date": "13/12/2016",
   "pay": 15,
   "description": "My mom says my room is too dirty help clean."
},
{
   "name": "Looking for tutor",
   "location": "Oulu",
   "category": "Tutoring",
   "date": "16/12/2016",
   "pay": 40,
   "description": "Can't seem to learn swedish need help"
},
{
   "name": "Need a baby sittah",
   "location": "Oulu",
   "category": "Babysitting",
   "date": "13/12/2016",
   "pay": 30,
   "description": "My babyboy requires sitting."
}];

// To make a code clearer, all elements of the application to be called by the "app" variable.
var app = angular.module('repsikkaApp', [/* module includes */]);

app.controller('repsikkaCtrl', ['$scope', function ($scope) {
   $scope.user =
      {
         'name': 'John Doe',
         'balance': 20.20
      };
   $scope.categories = ['Delivery', 'Cleaning', 'Cooking', 'Dog Walking', 'Babysitting', 'Tutoring', 'Other'];
}]);

app.controller('indexCtrl', function($scope) {
   $scope.jobs = job_list;
});

app.controller('navbarCtrl', function ($scope, $window) {

   // Function returns the link to the page if it leads not the current page, and returns link to void if the opposite is true.
   $scope.getNavLink = function (link) {
      if ("/" + link == $window.location.pathname) {
         return "javascript:void(do_something())"
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
