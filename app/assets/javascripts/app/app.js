// main app javascript file


alert("in app.js file..............");


'use strict';


// angular.module('contactapp', ['ngResource']).
    
//   config(['$routeProvider', function($routeProvider) {
//   $routeProvider. 
//   when('/home', {template: 'assets/app/partials/home.html'}).
//   when('/dashboard', {template: 'assets/app/partials/dash.html', controller: DashboardCtrl}).
//   otherwise({redirectTo: '/home'});      
      
// }]);

angular.module('contactapp', ['ngResource']).
		
  config(['$routeProvider', function($routeProvider) {
  $routeProvider. 
      when('/contacts', {template: 'assets/app/partials/contact-list.html', controller: ContactListCtrl}).
      when('/contacts/new', {template: 'assets/app/partials/new-contact.html', controller: ContactListCtrl}).
      when('/contacts/:contact_id', {template: 'assets/app/partials/contact-detail.html', controller: ContactDetailCtrl}).
      when('/contacts/edit/:contact_id', {template: 'assets/app/partials/edit-contact.html', controller: ContactDetailCtrl}).
      when('/home', {template: 'assets/app/partials/home.html'}).
      when('/dashboard', {template: 'assets/app/partials/dash.html', controller: DashboardCtrl}).
      otherwise({redirectTo: '/dashboard'});      
      
}]);

  