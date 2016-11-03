angular
.module('app')
.factory('factoryBandera',function($http){
	var objeto = {};
    var url = 'http://www.egos27.somee.com/api/bandera/';
	objeto.nombre = "Factory de Banderas";
	objeto.TraerTodos = TraerTodos;
	return objeto;

	function TraerTodos(){
      return $http.get(traerUrl()).then(function(data){
        return data.data.Paises;
      });
    };

    function traerUrl(parametro){
      if(!parametro){
        return url;
      }else{
        return url + parametro;
      }
    };
})