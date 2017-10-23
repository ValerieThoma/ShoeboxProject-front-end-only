$(document).ready(()=>{
	var fieldsFull = false;
	var count = 0;
	$('.user-sign-up-form').change(()=>{
		count++;
		console.log("user_scripts.js count ", count)
		
		var userObj = {
			userType :  [],
			fullName : [],
			userPhone : [],
			userEmail : [],
			passwd : []
		}
		
		var password = $('.password').val();
		var passwordConfirm = $('.password-confirm').val();
		console.log("user_script.js pswd ", password)

		$('.user-sign-up-form').submit((event)=>{
			event.preventDefault();
			
			if(password != passwordConfirm){
				// console.log(password);
				// console.log($('.password-confirm').val());
				$('.password-error').html("Your passwords do not match.");
			}else{
				console.log("passwords match")
				var numUsers = localStorage.getItem('users-signedup')
				if(numUsers == null){
					numUsers = 0;
					console.log("numUsers is zero",numUsers)
				}else{
					numUsers++;
				}
				console.log("numUsers ",numUsers)


				userObj.userType[numUsers] = 'Family';
				userObj.fullName[numUsers] = $('.full-name').val();
				userObj.userPhone[numUsers] = $('.phone').val();
				userObj.userEmail[numUsers] = $('.email').val();
				userObj.passwd[numUsers] = $('.password').val();
				console.log("fullName ", userObj.fullName)
				console.log("userPhone ", userObj.userPhone);
				console.log("userEmail ", userObj.userEmail);
				console.log("password ", userObj.passwd);


				localStorage.setItem('user-type-'+numUsers, userObj.userType);
				localStorage.setItem('user-password-'+numUsers, userObj.passwd);
				localStorage.setItem('full-name-'+numUsers, userObj.fullName);
				localStorage.setItem('user-email-'+numUsers, userObj.userEmail);
				localStorage.setItem('user-phone-'+numUsers, userObj.userPhone);
				
			}
			// console.log(passwordConfirm);
		});


		
	});
});