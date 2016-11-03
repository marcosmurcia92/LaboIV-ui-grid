angular
.module('app')
.factory('factoryBanderaSrv',function(banderas){
	var objeto = {};
	objeto.nombre = "Factory de Banderas con Servicio";
	objeto.TraerTodos = TraerTodos;
	objeto.TraerUnPais = TraerUnPais;
	return objeto;

	function TraerUnPais(pais){
      return banderas.traerUnPais(pais).then(function(data){
        return data;
      });
    };

    function traerUrl(parametro){
      if(!parametro){
        return url;
      }else{
        return url + parametro;
      }
    };

	function TraerTodos(){
      return banderas.traerTodos().then(function(data){
        return data;
      });
    };
})