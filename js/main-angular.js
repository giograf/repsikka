/*
 * Global namespace
 */
var job_list = [{
   "name": "Honey Delivering job",
   "location": "Oulu",
   "category": "Deliver",
   "date": new Date("2016-12-21 11:20"),
   "pay": 6,
   "description": "According to all known laws of aviation there is no way a bee should be able to fly. Its wings are too small" +
   " to get its fat little body off the ground. The bee, of course, " +
   "flies anyway because bees don't care what humans think is impossible.",
   "employer_name" : "John Doe",
   "worker_name" : "Risto Peltola",
   "status": "accepted"
},
{
   "name": "Looking for cook",
   "location": "Oulu",
   "category": "Cook",
   "date": new Date("2016/12/15 12:44"),
   "pay": 10,
   "description": "You make food me naow.",
   "employer_name" : "Risto Järvelä",
   "status": "posted"
},
{
   "name": "Moving job",
   "location": "Oulu",
   "category": "Deliver",
   "date": new Date("2016/12/15"),
   "pay": 10,
   "description": "Help I need a person with car to move my stuff.",
   "employer_name" : "Risto Järvelä",
   "worker_name" : "Risto Peltola",
   "status": "applied"
},
{
   "name": "Dirty room",
   "location": "Oulu",
   "category": "Cleaning",
   "date": new Date("2016/12/18 19:20"),
   "pay": 15,
   "description": "My mom says my room is too dirty help clean.",
   "employer_name" : "Risto Järvelä",
   "worker_name" : "John Doe",
   "status": "accepted"
},
{
   "name": "Looking for tutor",
   "location": "Oulu",
   "category": "Tutoring",
   "date": new Date("2016/12/17"),
   "pay": 40,
   "description": "Can't seem to learn swedish need help",
   "employer_name" : "Risto Järvelä",
   "worker_name" : "Pekka Jokinen",
   "status": "applied"
},
{
   "name": "Need a baby sittah",
   "location": "Oulu",
   "category": "Babysitting",
   "date": new Date("2016/12/16"),
   "pay": 30,
   "description": "My babyboy requires sitting.",
   "employer_name" : "Maaria Keskitalo",
   "status": "posted"
}];

// List of possible job categories, initialized at repsikkaCtrl, used directly at add.html
var category_list = ['Delivery', 'Cleaning', 'Cooking', 'Dog Walking', 'Babysitting', 'Tutoring', 'Other'];

// To make a code clearer, all elements of the application to be called by the "app" variable.
var app = angular.module('repsikkaApp', ['ngAnimate']);

app.controller('repsikkaCtrl', ['$scope', function ($scope) {
   $scope.user =
      {  /* A testuser for our prototype site :) */
         'name': 'John Doe',
         'phone': '+358 40 123 4567',
         'email': 'john.doe@email.com',
         'balance': 20.20,
         'reviews': [{
            'name': 'Risto Peltola',
            'comment': 'Good employer! Fair pay.'
         }]
      };

   $scope.categories = category_list;

   $scope.moreDosh = function(moolah) {
      $scope.user.balance += moolah;
   };
}]);

app.controller('indexCtrl', function($scope,$timeout) {
   $scope.jobs       = job_list;
   $scope.categories = category_list;

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
   };

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

app.config(['$locationProvider', function ($locationProvider) {

   if (window.history && window.history.pushState) {
      $locationProvider.html5Mode({
         enabled: true,
         requireBase: true,
         rewriteLinks: false
      });
   }
   else {
      $locationProvider.html5Mode(false);
   }
}]);

app.controller('accountCtrl', function ($scope, $location) {
   /* The following controller fills out the Account page. */
   $scope.pill_content = [
      {
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
   $scope.jobs = job_list;

   // If a new job has been submitted, execute:
   if ( $location.search()['status'] == "posted" ) {
      // Compose datetime out of date and time supplied
      if ($location.search()['time']){
      $scope.temporary_time = $location.search()['time'];
      $scope.temporary_hours = Number($scope.temporary_time.substr(0,2)) ;
      $scope.temporary_minutes = Number($scope.temporary_time.substr(2,3)) ;
      }
      $scope.datetime = new Date($location.search()['date']);
      $scope.datetime.setHours($scope.temporary_hours);
      $scope.datetime.setMinutes($scope.temporary_minutes);

      $scope.newJob = {
         'name': $location.search()['name'],
         'location': $location.search()['location'],
         'category': $location.search()['category'],
         'date': $scope.datetime,
         'pay': $location.search()['pay'],
         'description': $location.search()['description'],
         'employer_name': $location.search()['employer_name'],
         'worker_name': $location.search()['worker_name'],
         'status': $location.search()['status'],
         'newJob': true
      };
      job_list.push($scope.newJob);
   }
   // If a new job has been applied to, execute:
   else if ($location.search()['status'] == "applied"){
      $scope.employer_name_temporary = $location.search()['employer_name'];
      $scope.name_temporary = $location.search()['name'];
      // get the array and push the worker_name to it
      $scope.jobs.forEach( function (element) {
         if (element['employer_name'] == $scope.employer_name_temporary && element['name'] == $scope.name_temporary){
            $scope.temporary_element = element;
            $scope.temporary_element['worker_name'] = $scope.user.name;
            $scope.temporary_element['status'] = 'applied';
            $scope.newJob =  $scope.temporary_element;
         }
      });
   }
});

app.directive('pageHeading', function () {
   return { //<-- This is a must here...
      templateUrl: 'page-head.html'
   };
});

app.controller("filterCtrl", function ($scope) {
   // If a new job has been submitted, execute:

   $scope.jobs = job_list;
   $scope.setEmployeeJob = function (name, employer_name){
      console.log(employer_name);
      $scope.job_name = name;
      $scope.job_employer = employer_name;
      $('browse_form').submit();
   };
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
