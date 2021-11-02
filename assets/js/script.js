// Ejecutar código cuando carguen todos los elementos del DOM
    // con la función jquery
	$(function () {
	  var primer = true;
	// Seleccionar elemento accionador del evento click()
	  $("#boton").on("click", function () {
		     // Cambiar propiedades de CSS del elemento que recibe el evento
		  $("#boton > span").css("color", "white");
		  $("#cambio").css("background", "blue").css("color", "white");
		  
		  if (primer) {
			$("#cambio").animate({
			  height: "200px",
			});
			primer = false
		  }
		  else {
			$("#cambio").animate({
			  height: "10px",
			});
			primer = true
		  }
		});

 // Ejecutar código cuando carguen todos los elementos del DOM
    // con la función ready()
    $(document).ready(function(){
        // Ocultar elemento seleccionado
        $('ul').hide();
        
        // Cambiar comportamiento de oculto a visible del elemento ul
        // a través del accionamiento del evento click del button
        $('button').click(function(){
            $('ul').toggle();
        });
    });

    

});

