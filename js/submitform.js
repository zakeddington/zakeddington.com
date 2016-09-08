$(document).ready(function(){
	$("#submit").click(function(){					   				   
		$(".error").hide();
		var hasError = false;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;		
			
		var emailFromVal = $("#emailFrom").val();
		if(emailFromVal == '') {
			$("#emailFrom").after('<div class="error">Oops!</div>');
			hasError = true;
		} else if(!emailReg.test(emailFromVal)) {	
			$("#emailFrom").after('<div class="error">Oops!</div>');
			hasError = true;
		}
				
		var nameVal = $("#name").val();
		if(nameVal == '') {
			$("#name").after('<div class="error">Oops!</div>');
			hasError = true;
		}
		
		var messageVal = $("#message").val();
		if(messageVal == '') {
			$("#message").after('<div class="error">Oops!</div>');
			hasError = true;
		}
		
		
		if(hasError == false) {
			$(this).hide();
			$("#sendEmail .loading").append('<img src="/images/loading.gif" alt="Loading" id="loading" />');
			
			$.post("/js/sendemail.php",
   				//{ emailFrom: emailFromVal, name: nameVal, message: messageVal },
   				//	function(data){
				//		$("#sendEmail").before('<h3>Your email was sent.</h3>');											
				//		
   				//	}
				// );
			
				{ emailFrom: emailFromVal, name: nameVal, message: messageVal },
   					function(data){
						$("#sendEmail").slideUp("normal", function() {				   
					
							$("#sendEmail").before('<h3>Success!</h3><p>Your email was sent.</p>');											
						});
   					}
				);
		}
		
		return false;
	});						   
});