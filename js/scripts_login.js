$(document).ready(()=>{

	var password = $('.password').val();
	var passwordConfirm = $('.password-confirm').val();
	var userCount = 0;
	var volCount = 0;

	// user-password = []
	// full-name = []
	// user-email = []
	// user-phone = []
	// user-type = []

	// localStorage.setItem('user-password', 'myPassword');
	// console.log(typeof(localStorage.getItem('user-password')));
	// localStorage.setItem('vol-password', 'myPassword');


	// // add section which checks if password is correct for that email.
	$('.youth-sign-up-form').change(()=>{
		userCount++;
		console.log("Change");
		if(userCount >= 2){
			$('.submit').removeClass('btn-warning');
			$('.submit').addClass('btn-success');

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