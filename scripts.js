$(document).ready(function() {

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}

	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});
	// DETECTA AL ARRASTRAR
	$('img').on("mousedown",function(){
    		status = "esperando";
	    	timer = setTimeout(function(){
	    		status = "largo";},150);
			}).on("mouseup mouseleave",function(){
		    if (status == "largo"){
	    		$('.miniaturas').magnificPopup(false); // DESACTIVA PLUGIN DE ZOOM PARA CLICK LARGO
	    	} else {
	    		// PLUGIN ZOOM para click corto
	    		$('.miniaturas').magnificPopup({
					type: 'image',
					closeOnContentClick: true,
					closeBtnInside: false,
					fixedContentPos: true,
					mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
					image: {
						verticalFit: true
					},
					zoom: {
						enabled: true,
						duration: 300 // don't foget to change the duration also in CSS
					}
				});
	    		// FIN PLUGIN ZOOM
	    	}
		    clearTimeout(timer);
	});
});
function copyToClipboard(text) {
  window.prompt("Copia el numero:", text);
}
function cerrarcontacto() {
	document.getElementById('oktel').className = "mail_teloff";
	document.getElementById('okmail').className = "mail_teloff";

}
function abrircontacto(variante) {
	document.getElementById(variante).className = "mail_tel";
}
	// $('img').on("mousedown",function(){
 //    timer = setTimeout(function(){
 //        nada;
 //    },100);
	// }).on("mouseup mouseleave",function(){
	//     clearTimeout(timer);
	// });
