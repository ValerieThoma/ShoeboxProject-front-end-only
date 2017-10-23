$(document).ready(()=>{

	var password = $('.password').val();
	var passwordConfirm = $('.password-confirm').val();
	var userCount = 0;
	var volCount = 0;

	// // add section which checks if password is correct for that email.
	$('.youth-sign-up-form').change(()=>{
		userCount++;
		console.log("Change");
		if(userCount >= 2){
			$('.submit').removeClass('btn-warning');
			$('.submit').addClass('btn-success');
			console.log("It happened!");
		}
	});
	$('.sign-up-form').change(()=>{
		volCount++;
		console.log("Change");
		if(volCount >= 2){
			$('.submit').removeClass('btn-warning');
			$('.submit').addClass('btn-success');
			console.log("It happened!");
		}
	});
	// $('.sign-up-form').submit((event)=>{
	// 	event.preventDefault();
	// 	var password = $('.password').val();
	// 	var passwordConfirm = $('.password-confirm').val();
	// 	if(password != passwordConfirm){
	// 		$('.password-error').html("Your passwords do not match.");
	// 	}else{
	// 		window.location.href = "user_home.html"
	// 	}
	// });
	// Check inoput password against stored password
	$('.sign-up-form').submit((event)=>{
		event.preventDefault();
		var password = $('.password').val();
		var passwordConfirm = localStorage.getItem('vol-password');
		if(password != passwordConfirm){
			$('.password-error').html("Incorrect password.");
		}else{
			window.location.href = "user_home.html"
		}
	});

	// $('.youth-sign-up-form').submit((event)=>{
	// 	event.preventDefault();
	// 	var password = $('.password').val();
	// 	var passwordConfirm = $('.password-confirm').val();
	// 	if(password != passwordConfirm){
	// 		$('.password-error').html("Incorrect password.");
	// 	}else{
	// 		window.location.href = "user_home.html"
	// 	}
	// });

	$('.youth-sign-up-form').submit((event)=>{
		event.preventDefault();
		var password = $('.password').val();
		var passwordConfirm = localStorage.getItem('user-password');
		if(password != passwordConfirm){
			$('.password-error').html("Incorrect password.");
		}else{
			window.location.href = "user_home.html"
		}
	});

	$(".youth-btn").click(function(){
		window.location.href = "user-signup-page.html"
	});
	$(".vol-btn").click(function(){
		window.location.href = "volunteer_form.html"
	});
});