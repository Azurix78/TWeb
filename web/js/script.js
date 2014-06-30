register = false;
login = false; 
marginLB = $('.head').css('margin-left');
doubleM = parseInt(marginLB) * 2;

$('.footer').click(function(){
	$('html, body').animate({scrollTop: 0}, 'slow');
});

$('.fleche').on('click', function(){
    var offset = $('#scrollAncre').offset().top;
    $('html, body').animate({scrollTop: offset + 70}, 'slow'); 
    return false; 
});

$('.register').click(function(){
	if(login)
		closeL();
	if(!register){
		registerD();
	}
	register = true;
});

$('.login').click(function(){
	if(register)
		closeR();
	if(!login){
		loginD();
	}
	login = true;
});

$('#closeR').click(closeR);
$('#closeL').click(closeL);

function closeR(){
	$('.head').animate({ marginLeft : marginLB});
	$('.registerForm').animate({ right : -600 });
	register = false;
}

function closeL(){
	$('.head').animate({ marginLeft : marginLB });
	$('.registerLogin').animate({ left : -600 });
	login = false;
}

function registerD(){
	
	$('.head').animate({ marginLeft : 0 });
	$('.registerForm').animate({ right : 80 });
}

function loginD(){
	marginL = $('.head').css('margin-left');
	$('.head').animate({ marginLeft : doubleM });
	$('.registerLogin').animate({ left : 80 });
}