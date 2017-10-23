$(document).ready(()=>{
	
		var userObj = {
			userType :  [],
			fullName : [],
			userPhone : [],
			userEmail : [],
			passwd : []
		}

		$('.user-sign-up-form').submit((event)=>{
			event.preventDefault();

			var password = $('.password').val();
			var passwordConfirm = $('.password-confirm').val();

			var numUsers = localStorage.getItem('users-signedup')
			
			if(password != passwordConfirm){
				// console.log(password);
				// console.log($('.password-confirm').val());
				$('.password-error').html("Your passwords do not match.");
			}else{
				console.log("passwords match")
				
				if(numUsers == null){
					numUsers = 0;
					console.log("numUsers is zero",numUsers)
				}else{
					numUsers++;
				}
				console.log("numUsers ",numUsers)
				localStorage.setItem('users-signedup',numUsers)


				userObj.userType= 'Family';
				userObj.fullName = $('.full-name').val();
				userObj.userPhone = $('.phone').val();
				userObj.userEmail = $('.email').val();
				userObj.passwd = $('.password').val();
				console.log("fullName ", userObj.fullName)
				console.log("userPhone ", userObj.userPhone);
				console.log("userEmail ", userObj.userEmail);
				console.log("password ", userObj.passwd);


				localStorage.setItem("userType"+numUsers, userObj.userType);
				localStorage.setItem("password"+numUsers, userObj.passwd);
				localStorage.setItem("fullName"+numUsers, userObj.fullName);
				localStorage.setItem("userEmail"+numUsers, userObj.userEmail);
				localStorage.setItem("userPhone"+numUsers, userObj.userPhone);

				window.location.href = "user_home.html"
				
			}
			// console.log(passwordConfirm);
		});
		
	});
