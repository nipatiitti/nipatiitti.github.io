$(document).ready(function(ev) {

	$('.back').click(function(){
	    window.location.href='../index.html';
	})

	$('.gitLink').click(function(){
		var url = $(this).attr('id');
	    window.open(url);
	})

	$('.codeIcon').click(function (event){
		var div = $(this).attr('id');
		var arc = 'Article'
		var ready = '#' + div + arc;
		$('html, body').animate({
            scrollTop: $(ready).offset().top
        }, 1000);
    });

});