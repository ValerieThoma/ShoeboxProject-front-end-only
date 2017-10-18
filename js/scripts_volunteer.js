$(document).ready(()=>{
	var fieldsFull = false;
	var count = 0;
	$('.sign-up-form').change(()=>{
		count++;
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
			if(count >= 5){
				$('.submit').removeClass('btn-warning');
				$('.submit').addClass('btn-success');
			}


		// });
		
	});
});