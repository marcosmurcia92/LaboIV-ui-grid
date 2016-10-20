angular
  .module('app')
  .controller('ConfTPCtrl', function($scope, data, i18nService, uiGridConstants) {
    $scope.titulo = "Configuracion Campos";
    // Objeto de configuracion de la grilla.
    $scope.gridOptions = {};
    $scope.gridOptions.paginationPageSizes = [25, 50, 75];
    // Configuracion de la paginacion
    $scope.gridOptions.paginationPageSize = 25;
    $scope.gridOptions.rowHeight = 66;
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
    };

    $scope.map = {};
    $scope.map.name = "Placeholder";
    $scope.map.latitud = "40.74";
    $scope.map.longitud = "-74.18";

    function columnDefs () {
      return [
        { field: 'id', name: '#', width: 45},
        { field: 'avatar', name: 'avatar',width: 70,
          cellTemplate:"<img width=\"60px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>"
        },
        { field: 'foto', name: 'foto', 
          cellTemplate:"<img width=\"60px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>"
        },
        { field: 'nombre', name: 'nombre'
          ,enableFiltering: false
        },
        { field: 'apellido', name: 'apellido'},
        { field: 'email', name: 'mail'},
        { field: 'latitud', name: 'latitud'},
        { field: 'logitud', name: 'longitud'},
        { field: 'sexo', name: 'sexo'
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
        { field: 'fechaNacimiento', name: 'fechaNacimiento'
          ,type: 'date'
          ,cellFilter: "date: 'dd-MM-yyyy'"
        },
        { name: 'Mapas', 
           cellEditableCondition: false, 
           cellTemplate: '<button ng-click="grid.appScope.mostrarMapa(row)"> Mapa </button>' 
        }
      ];
    }
  })
