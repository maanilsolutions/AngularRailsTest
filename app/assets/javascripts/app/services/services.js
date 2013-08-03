// contact resource

// angular.module('contactListService', ['ngResource']).
    // factory('Contact', function($resource){
  // return $resource('/contacts', {}, {
    // query: {method:'GET', isArray:true}
  // });
// });

var servicesModule = angular.module('contactapp');

//within project---------------------------------------------------------------------------------------------------------
	servicesModule.factory('Contacts', function($resource) {		
		alert('in servies');
		var ContactsService = $resource('/contacts/:contact_id', {contact_id: '@id'}, {
			'create'  : { method: 'POST' },
			'index'   : { method: 'GET', isArray: true },			
			'update'  : { method: 'PUT' },
			'destroy' : { method: 'DELETE' }
		});
		return ContactsService;
});
	//---------------------------------------------------------------------------------
	servicesModule.factory('User', function($resource) {		
		alert('in servies');
		var ContactsService = $resource('/users/:user_id', {user_id: '@id'}, {
			'create'  : { method: 'POST' },
			'index'   : { method: 'GET', isArray: true },			
			'update'  : { method: 'PUT' },
			'destroy' : { method: 'DELETE' }
		});
		return ContactsService;
});
	//---------------------------------------------------------
// 	servicesModule.factory('User', ['$resource', function($resource) {
//     return $resource('/users/:id', {id: '@id'});
// }]);

//Rajesh API---------------------------------------------------------------------------------------------------------
// 	servicesModule.factory('Contacts', function($resource) {		
// 		alert('in servies');
// 		var ContactsService = $resource('/vendor/angulars.json', {contact_id: '@id'}, {
// 			'create'  : { method: 'POST' },
// 			'index'   : { method: 'GET', isArray: true },			
// 			'update'  : { method: 'PUT' },
// 			'destroy' : {method: 'DELETE' }
// 		});
// 		return ContactsService;
// });

//others rails project API---------------------------------------------------------------------------------------------------------

// 	servicesModule.factory('Contacts', function($resource) {		
// 		alert('in servies');
// 		var ContactsService = $resource('/api/users.json', {contact_id: '@id'}, {
// 			'create'  : { method: 'POST' },
// 			'index'   : { method: 'GET', isArray: true },			
// 			'update'  : { method: 'PUT' },
// 			'destroy' : {method: 'DELETE' }
// 		});
// 		return ContactsService;
// });

