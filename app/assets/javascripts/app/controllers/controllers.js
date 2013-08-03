// contacts controllers

alert('in controller');

'use strict';


function ContactListCtrl($scope, $http, $location, $routeParams, Contacts) {  	
  alert('hiiii in controllerrrrrrrrrrr');
  $scope.contacts = Contacts.index();
  // $scope.users = User.index();     
    	    
  $scope.addContact = function() {
		var newContact = {
			first_name: $scope.newFirstName,
			last_name: $scope.newLastName
			
		};
 	
	 	var nc = new Contacts({ contact: newContact });    //api_user
 	 	
	 	nc.$create(function() {
	 		$scope.contacts.push(nc);
	 		// now that the contact is saved, clear the form data
	 		$scope.newFirstName = "";
	 		$scope.newLastName = "";
	 		
	 		alert("Contact Inserted!");
	 		//redirect
	 		$location.path("/#/contacts");
	 		
	    	})
	 	// $location.path("/#/contacts");
    }
       
  
  
  $scope.contact = "";
      
 	$scope.getContact = function() { 		
 		 
	   $scope.contact = this.contact;	   
	    		
 		//alert("clicked");
 		
 		//console.log($(this))
 		
 		//alert($(this).parent("#detailCell").siblings().children("a #detailButton").attr("href"))
 		
 		//$("#contacts_table tbody tr").each(function() {
 			//alert($(this).find("#detailButton").attr("href"));
 		//})
 		//console.log($(this).parent().find("#detailButton").attr("href"));
 	}
    	
    
    
    $scope.removeContact = function() {
    	  //alert($(this).siblings("#detailButton").attr("href"));
    	  //$scope.contact = Contacts.get( {contact_id: this.$("#contactToDelete")} ); 
        $scope.contact.$destroy();
        $('#deleteModal').modal('hide')
       };
        
};




ContactListCtrl.$inject = ['$scope', '$http', '$location', '$routeParams', 'Contacts'];


var ContactDetailCtrl = ['$scope', '$routeParams', '$location', '$http', '$filter', 'Contacts', function($scope, $routeParams, $location, $http, $filter, Contacts) {  
   
     
   $scope.contact = Contacts.get( {contact_id: $routeParams.contact_id} ); 
     
   $scope.saveContact = function() {
   	
   	
   	var updatedContact = {
			
			first_name: $scope.newFirstName,
			last_name: $scope.newLastName
			
		};		
		
   	
   	$.ajax({
   		url: "/contacts/" + $routeParams.contact_id,
   		dataType: "json",
   		type: "POST",
   		processData: false,
   		contentType: "application/json",
   		data: "{\"contact\"" + ":" + 
   			"{" +
   			
   			"\"first_name\"" + ":" + JSON.stringify($("#edit_contact_first_name").val()) + "," +
   			"\"last_name\"" + ":" + JSON.stringify($("#edit_contact_last_name").val()) + "" +
   			
   			
   			"}}" ,
   		//data: "{\"contact\":{\"first_name\":\"Taco\"}}",
	   	beforeSend: function(xhr) 
	   	{
				xhr.setRequestHeader("X-Http-Method-Override", "PUT");
			}
   	});
	
	alert("Contact Saved!");

   }
   
   
   
   

	// $scope.saveContact = function() {		
// 		
		// var updatedContact = {
// 			
			// first_name: $scope.newFirstName,
			// last_name: $scope.newLastName,
			// salutation: $scope.newSalutation,
			// phone_num: $scope.newPhoneNum,
			// phone_num_type: $scope.newPhoneType,
			// address1: $scope.newAddress1,
			// address2: $scope.newAddress2,
			// email_address: $scope.newEmail,
			// city: $scope.newCity,
			// state: $scope.newState,
			// zip: $scope.newZipcode
		// };		
// 		
		
		
		//$scope.contact.$update( updatedContact );
			

		//redirect
 		//$location.path('/#/contacts');
	//}


}];

//ContactDetailCtrl.$inject = ['$scope', '$routeParams', 'Contacts'];
