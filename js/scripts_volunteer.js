$(document).ready(()=>{
	var fieldsFull = false;
	var count = 0;
	$('.vol-sign-up-form').change(()=>{
		count++;
		// console.log("Count!!!")
		// $('form-wrapper input').each(function(){
		// 	var userInput = $(this).val();

		// 	if(userInput == 'j'){
		// 		fieldsFull = true;
		// 		console.log("True!")
		// 	}
		// });

		// if(fieldsFull){
		// 	$('.submit').removeClass('btn-warning');
		// }else{
		// 	$('.submit').addClass('btn-success');
		// }
		// $('.agree').change(()=>{
		// 	console.log("Ready!")
			var password = $('.password').val();
			var passwordConfirm = $('.password-confirm').val();

			$('.agree').change(()=>{
				if(count >= 5){
					$('.submit').removeClass('btn-warning');
					$('.submit').addClass('btn-success');
					$('.submit').attr('value', "I'm ready!")
				}	
			});
			
			// $('.password-confirm').change(()=>{
			// 	if(password != passwordConfirm){
			// 		console.log(password);
			// 		console.log(passwordConfirm);
			// 		$('.password-error').html("Your passwords do not match.");
			// 	}


			// });

			$('.sign-up-form').submit((event)=>{
				event.preventDefault();
				var password = $('.password').val();
				var passwordConfirm = $('.password-confirm').val();
				if(password != passwordConfirm){
					// console.log(password);
					// console.log($('.password-confirm').val());
					$('.password-error').html("Your passwords do not match.");
				}
				// console.log(passwordConfirm);
			});

		// });
		
	});
});