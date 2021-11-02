
// Ejecutar código cuando carguen todos los elementos del DOM
// con la función ready()
$(document).ready(() =>{
	  // Evento mouseover() para cambiar estilo de los elementos li
  $('#button').bind ('mouseover', function(){
	  $('ul, li:even').css( 'background-color','red')
	  $('ul, li:odd').css( 'background-color','yellow')
  }) 
     // Evento mouseout() para volver a la normalidad estilos css
  $('#button').bind ('mouseleave',function(){
	$('li').css('background-color','#cbd5e0')
})
});







