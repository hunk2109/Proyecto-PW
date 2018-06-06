$(document).ready(function(){
	 $('.js-sect').waypoint(function (direction) {
        if(direction == 'down'){
            $('nav').addClass('sticky');
            
        }
        else{
            
            $('nav').removeClass('sticky');
           
        }
    },{
        offset: '60px;'
    });

	 $('.js-btn-full').click(function(){
	 	$('html,body').animate({scrollTop: $('.js-sect-p').offset().top},1000);
	 });

	$('.js-btn-ghost').click(function(){
		$('html,body').animate({scrollTop: $('.js-sect').offset().top},1000);
	});




})