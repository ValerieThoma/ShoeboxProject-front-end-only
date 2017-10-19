$(document).ready(()=>{
	fieldsFull = false;
	$('.sign-up-form').change(function(){
		$('form-wrapper input').each(function(){
			var userInput = $(this).val();

			if(userInput === 'j'){
				fieldsFull = true;
				console.log("True!")
			}
		});

		if(fieldsFull){
			$('.submit').addClass('btn-success');
		}else{
			$('.submit').addClass('btn-warning');
		}
	});
});