$(document).ready(()=>{

		var password = $('.password').val();
		var passwordConfirm = $('.password-confirm').val();

		// add section which checks if password is correct for that email.
		
		$('.sign-up-form').submit((event)=>{
			event.preventDefault();
			var password = $('.password').val();
			var passwordConfirm = $('.password-confirm').val();
			if(password != passwordConfirm){
				$('.password-error').html("Your passwords do not match.");
			}else{
				window.location.href = "../user_home.html"
			}
		});

		$('.youth-sign-up-form').submit((event)=>{
			event.preventDefault();
			var password = $('.password').val();
			var passwordConfirm = $('.password-confirm').val();
			if(password != passwordConfirm){
				$('.password-error').html("Your passwords do not match.");
			}else{
				window.location.href = "../user_home.html"
			}
		});

		$(".youth-btn").click(function(){
    		window.location.href = "../user_home.html"
		});
		$(".vol-btn").click(function(){
    		window.location.href = "../volunteer_form.html"
		});
});