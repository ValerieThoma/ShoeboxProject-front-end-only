$(document).ready(()=>{
	localStorage.setItem('user-password', 'myPassword');
	// console.log(typeof(localStorage.getItem('password')));
	localStorage.setItem('vol-password', 'myPassword');
	
	$('#myModal').on('shown.bs.modal', function () {
		$('#myInput').focus()
	});
	console.log("Connected!");
	$('.family-login').click(()=>{
		window.location.href='youth-login-form.html';
	});
	$('.volunteer-login').click(()=>{
		window.location.href='volunteer-login-form.html';
	});
	$('.link-to-map').click(()=>{
		event.preventDefault();
		window.open("map.html", "_blank", "toolbar=yes,scrollbar=yes,resizeable=yes,top=55,left=75,width=700,height=700");
	});
});