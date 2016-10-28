angular
  .module('app')
  .service('banderas', function ($http) {
    this.traerUnPais = traerUnPais;
    var url = 'http://www.egos27.somee.com/api/bandera/';

    function traerUnPais(pais){
      return $http.get(traerUrl(pais)).then(function(data){
        return data.data;
      });
    };

    //Esta funcion es privada
    function traerUrl(parametro){
      if(!parametro){
        return url;
      }else{
        return url + parametro;
      }
    };

    this.nombre = "Banderas";

    this.traerTodos = function(){
      return $http.get(traerUrl()).then(function(data){
        return data.data.Paises;
      });
    }

    this.traerSoloImagenes = function(){
      return $http.get(traerUrl()).then(function(data){
        return data.data.Paises.map(function(pais){
          return pais.Bandera;
        });
      });
    };
  })
