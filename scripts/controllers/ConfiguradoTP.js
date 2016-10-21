angular
  .module('app')
  .controller('ConfTPCtrl', function($scope, data, i18nService, uiGridConstants) {
    ////////////////////////////////////////
    //         GRILLA DE USUARIOS         //
    ////////////////////////////////////////
    $scope.titulo = "Configuracion Campos";
    // Objeto de configuracion de la grilla.
    $scope.gridOptions = {};
    $scope.gridOptions.paginationPageSizes = [25, 50, 75];
    // Configuracion de la paginacion
    $scope.gridOptions.paginationPageSize = 25;
    $scope.gridOptions.rowHeight = 66;
    $scope.gridOptions.enableHorizontalScrollbar = 2;
    $scope.gridOptions.columnDefs = columnDefs();
    // Activo la busqueda en todos los campos.
    $scope.gridOptions.enableFiltering = true;
    // Configuracion del idioma.
    i18nService.setCurrentLang('es');

    data.data100().then(function(rta){
      // Cargo los datos en la grilla.
      $scope.gridOptions.data = rta;
      console.log(rta);
    });

    console.log(uiGridConstants);

    $scope.mostrarMapa = function(row){
      console.info("HOLA SOY EL MAPA!",row);
      $scope.map.name = row.entity.nombre;
      $scope.map.latitud = row.entity.latitud;
      $scope.map.longitud = row.entity.logitud;
      $scope.mapMarkers.length = 0;
      $scope.mapMarkers.push({
        title: row.entity.nombre,
        iconUrl: row.entity.avatar,
        lat: row.entity.latitud,
        lon: row.entity.logitud
      });
    };


    $scope.mostrarTodosAmigos = function(row){
      console.info("HOLA SOY EL MAPA!",row);
      $scope.map.name = row.entity.nombre;
      $scope.map.latitud = row.entity.latitud;
      $scope.map.longitud = row.entity.logitud;
      $scope.mapMarkers.length = 0;
      $scope.mapMarkers.push({
        title: row.entity.nombre,
        iconUrl: row.entity.avatar,
        lat: row.entity.latitud,
        lon: row.entity.logitud
      });
      for (var i = row.entity.amigos.length - 1; i >= 0; i--) {
        $scope.mapMarkers.push({
          title: row.entity.amigos[i].nombre,
          iconUrl: row.entity.amigos[i].avatar,
          lat: row.entity.amigos[i].latitud,
          lon: row.entity.amigos[i].longitud
        });
      };
    }

    $scope.mostrarAmigos = function(row){
      console.info("MUESTRO MIS AMIGOS",row);
      $scope.gridOptionsAmigos.data = row.entity.amigos;
    };

    $scope.map = {};
    $scope.map.name = "Placeholder";
    $scope.map.latitud = "40.74";
    $scope.map.longitud = "-74.18";
    $scope.mapMarkers = [];

    function columnDefs () {
      return [
        { field: 'id', name: '#', width: 45},
        { field: 'avatar', name: 'avatar',minWidth: 70,
          cellTemplate:"<img width=\"60px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>"
        },
        { field: 'foto', name: 'foto',minWidth: 70, 
          cellTemplate:"<img width=\"60px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>"
        },
        { name: 'Amigos',minWidth: 70, 
           cellEditableCondition: false, 
           cellTemplate: '<button ng-click="grid.appScope.mostrarAmigos(row)"> Amigos </button>' 
        },
        { field: 'nombre', name: 'nombre',minWidth: 90
          ,enableFiltering: false
        },
        { field: 'apellido', name: 'apellido',minWidth: 90},
        { field: 'email', name: 'mail',minWidth: 200},
        { field: 'latitud', name: 'latitud',minWidth: 90},
        { field: 'logitud', name: 'longitud',minWidth: 90},
        { field: 'sexo', name: 'sexo',minWidth: 85
        // filtro de busqueda.
          ,filter: {
            // term: '1',
            type: uiGridConstants.filter.SELECT,
            selectOptions: [
              {value: 'Male', label: 'Masculino'},
              {value: 'Female', label: 'Femenino'}
            ]
          }
          //filtro de los datos
          ,cellFilter: 'sexoTP'
        },
        { field: 'fechaNacimiento', name: 'fechaNacimiento',minWidth: 150
          ,type: 'date'
          ,cellFilter: "date: 'dd-MM-yyyy'"
        },
        { name: 'Mapas',minWidth: 70, 
           cellEditableCondition: false, 
           cellTemplate: '<button ng-click="grid.appScope.mostrarMapa(row)"> Mapa </button>' 
        },
        { name: 'MapasAmigos',minWidth: 150, 
           cellEditableCondition: false, 
           cellTemplate: '<button ng-click="grid.appScope.mostrarTodosAmigos(row)"> Mapa+Amigos </button>' 
        }
      ];
    }
    /////////////////////////////////////////////////

    ////////////////////////////////////////
    //         GRILLA DE AMIGOS         //
    ////////////////////////////////////////
    $scope.tituloAmigos = "Amigos del Usuario";
    // Objeto de configuracion de la grilla.
    $scope.gridOptionsAmigos = {};
    $scope.gridOptionsAmigos.paginationPageSizes = [25, 50, 75];
    // Configuracion de la paginacion
    $scope.gridOptionsAmigos.paginationPageSize = 25;
    $scope.gridOptionsAmigos.rowHeight = 66;
    $scope.gridOptionsAmigos.enableHorizontalScrollbar = 2;
    $scope.gridOptionsAmigos.columnDefs = columnDefsAmigos();
    // Activo la busqueda en todos los campos.
    $scope.gridOptionsAmigos.enableFiltering = true;

    $scope.mostrarMapaAmigos = function(row){
      console.info("HOLA SOY EL MAPA!",row);
      $scope.mapAmigos.name = row.entity.nombre;
      $scope.mapAmigos.latitud = row.entity.latitud;
      $scope.mapAmigos.longitud = row.entity.longitud;
    };

    $scope.mapAmigos = {};
    $scope.mapAmigos.name = "Placeholder";
    $scope.mapAmigos.latitud = "40.74";
    $scope.mapAmigos.longitud = "-74.18";

    function columnDefsAmigos () {
      return [
        { field: 'id', name: '#', width: 45},
        { field: 'avatar', name: 'avatar',minWidth: 70,
          cellTemplate:"<img width=\"60px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>"
        },
        { field: 'foto', name: 'foto',minWidth: 70, 
          cellTemplate:"<img width=\"60px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>"
        },
        { field: 'nombre', name: 'nombre',minWidth: 90
          ,enableFiltering: false
        },
        { field: 'apellido', name: 'apellido',minWidth: 90},
        { field: 'latitud', name: 'latitud',minWidth: 90},
        { field: 'longitud', name: 'longitud',minWidth: 90},
        ,{ field: 'fechaNacimiento', name: 'fechaNacimiento',minWidth: 150
          ,type: 'date'
          ,cellFilter: "date: 'dd-MM-yyyy'"
        },
        { name: 'Mapas',minWidth: 70, 
           cellEditableCondition: false, 
           cellTemplate: '<button ng-click="grid.appScope.mostrarMapaAmigos(row)"> Mapa </button>' 
        }
      ];
    }
    /////////////////////////////////////////////////
  })
