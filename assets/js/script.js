_$(function(){
	setTimeout(function(){
		var r = prompt('Hola Visitante, Como te llamas?');
		_$('#welcom span').html(r);
		_$('#welcom').removeClass('d-none')
	}, 100)
})