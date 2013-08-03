alert('in controller................');

'use strict';


function DashboardCtrl($scope, $http, $location, $routeParams, User, Contacts) {  	
  
  $scope.users = User.query();
  $scope.contacts123 = Contacts.index(); 
  alert(User);    
    	    
  alert('in a  controllerrrrrrrrrrr');
  
  
 
    	
    
    
    
        
};
