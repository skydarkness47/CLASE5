var miApp = angular.module("AngularABM",["ui.router","angularFileUpload"]);


miApp.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state(
			"inicio",{
				url: "/inicio",
				templateUrl: "inicio.html",
				controller:"controlInicio"
			})
			.state(
			"persona",{
				url:"/persona",
				abstract:true,
				templateUrl:"./AbmPersona/abstractaPersona.html"

			})
			.state(
			"persona.menu",{
				url:"/menu",
				views: {
					"contenido":{
					templateUrl:"./AbmPersona/personaMenu.html",
					controller:"controlPersonaMenu"
						}
				}
			})	.state(
			"persona.Alta",{
				url:"/alta",
				views: {
					"contenido":{
					templateUrl:"./AbmPersona/personaAlta.html",
					controller:"controlPersonaAlta"
						}
				}
			}).state(
			"persona.Grilla",{
				url:"/grilla",
				views: {
					"contenido":{
					templateUrl:"./AbmPersona/personaGrilla.html",
					controller:"controlPersonaGrilla"
						}
				}
			}).state(
			"login",{
				url:"/login",
				abstract:true,
				templateUrl:"./formularios/LoginAngular/abstractoLogin.html"

			}).state(
			"login.menu",{
				url:"/menuLogin",
				views: {
					"login":{
					templateUrl:"./formularios/LoginAngular/login.html",
					controller:"controlLogin"
						}
				}
			}).state(
			"login.registro",{
				url:"/registroLogin",
				views: {
					"login":{
					templateUrl:"./formularios/LoginAngular/registro.html",
					controller:"ControlRegistro"
						}
				}
			}).state(
			"sala",{
				url:"/salaDeJuegos",
				abstract:true,
				templateUrl:"./salaDeJuegos/abstractoSala.html"

			}).state(
			"sala.menu",{
				url:"/menuSalaJuegos",
				views: {
					"sala":{
					templateUrl:"./salaDeJuegos/sala.html",
					controller:"controlSalaJuegos"
						}
				}
			}).state(
			"sala.juego1",{
				url:"/juego1",
				views: {
					"sala":{
					templateUrl:"./salaDeJuegos/AdivinaElNumero1.html",
					controller:"controlSalaJuegos"
						}
				}
			}).state(
			"sala.juego2",{
				url:"/juego2",
				views: {
					"sala":{
					templateUrl:"./salaDeJuegos/AdivinaElNumero2.html",
					controller:"controlSalaJuegos"
						}
				}
			}).state(
			"sala.juego3",{
				url:"/juego3",
				views: {
					"sala":{
					templateUrl:"./salaDeJuegos/PiedarPapelTijera1.html",
					controller:"controlSalaJuegos"
						}
				}
			}).state(
			"sala.juego4",{
				url:"/juego4",
				views: {
					"sala":{
					templateUrl:"./salaDeJuegos/PiedarPapelTijera2.html",
					controller:"controlSalaJuegos"
						}
				}
			})






		$urlRouterProvider.otherwise("/inicio");

});


miApp.controller("controlInicio",function($scope){





});


miApp.controller("controlPersonaMenu",function($scope,$state){


$scope.IraAlta = function(){
$state.go("persona.Alta");
}
$scope.IraGrilla = function(){
	$state.go("persona.Grilla");
}

});
miApp.controller("controlPersonaAlta",function($scope,$state,FileUploader,$http){
	
$scope.Guardar= function(){

	 $http.post('PHP/nexo.php', { datos: {accion :"insertar",persona:$scope.persona}})
			  .then(function(respuesta) {     	
			 //aca se ejetuca si retorno sin errores      	
					 console.log(respuesta.data);
				

					},function errorCallback(response) {     		
			//aca se ejecuta cuando hay errores
					console.log( response);     			
	  });
}

$scope.SubirdorArchivos = new FileUploader({url:'./servidor/archivos.php'});

	
$scope.SubirdorArchivos.onSuccessItem = function(item, response, status, headers) {
            console.info('onSuccessItem', item, response, status, headers);
            $http.post('PHP/nexo.php', { datos: {accion :"insertar",persona:$scope.persona}})
			  .then(function(respuesta) {     	
			 //aca se ejetuca si retorno sin errores      	
					 console.log(respuesta.data);
				

					},function errorCallback(response) {     		
			//aca se ejecuta cuando hay errores
					console.log( response);     			
	  });
			console.info("Ya guardé el archivo.", item, response, status, headers);
        };




$scope.IraAlta = function(){
$state.go("persona.Alta");
}
$scope.IraGrilla = function(){
	$state.go("persona.Grilla");
}



});
miApp.controller("controlPersonaGrilla",function($scope,$state){



$scope.IraAlta = function(){
$state.go("persona.Alta");
}
$scope.IraGrilla = function(){
	$state.go("persona.Grilla");
}


});
miApp.controller("controlLogin",function($scope,$state){



$scope.IraRegistro = function(){
$state.go("login.registro");
}



});

miApp.controller("ControlRegistro",function($scope,$state){





});

miApp.controller("controlSalaJuegos",function($scope,$state){
$scope.IraJuego1 = function(){
$state.go("sala.juego1");
}
$scope.IraJuego2 = function(){
$state.go("sala.juego2");
}
$scope.IraJuego3 = function(){
$state.go("sala.juego3");
}
$scope.IraJuego4 = function(){
$state.go("sala.juego4");
}
$scope.Comenzar =function(){
	console.log("holaaaa");
}






});

