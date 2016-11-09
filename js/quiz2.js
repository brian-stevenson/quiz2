
var faded = 0;


$(document).ready(function(){
	$(".links li a").on("click", function(){
		alert('you clicked a link, good for you');
		console.log("this is a message for you!!!");
	});

	$("#quiz").on("click", function(){
		$("body").fadeOut(function(){
			$(this).text('Bye!').fadeIn();
		});
	});


	$("#accordion").on("click", function(){
		if(faded==0)
		{
			$("#hide li").fadeOut();
			faded = 1;
		}
		else
		{
			$("#hide li").fadeIn();
			faded = 0;
		}
	});

	$("#color").on("click", function(){
			info.style.color = "red";
	});


	$("#others").on("click", function(){
		$(".buttons").fadeOut()

	});
});



