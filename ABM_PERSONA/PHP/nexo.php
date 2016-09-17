<?php 
	$DatosPorPost = file_get_contents("php://input");
	$respuesta = json_decode($DatosPorPost);
	


	switch ($respuesta->datos->accion) {
		case 'insertar':

		var_dump($respuesta);
	    echo "estoy en nexo";
			break;
		
		default:
			# code...
			break;
	}

 ?>