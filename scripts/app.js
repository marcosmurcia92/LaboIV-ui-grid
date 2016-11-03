angular
  .module('app', [
    'ngMap',
    'ui.router',
    'ui.grid',
    'ui.grid.pagination',
    'ui.grid.resizeColumns',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ui.grid.edit'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('configuradoTP');
    $stateProvider

    .state('simple', {
      url: '/simple',
      templateUrl: 'views/simple.html',
      controller:'SimpleCtrl'
    })
    .state('paginada', {
      url: '/paginada',
      templateUrl: 'views/paginada.html',
      controller:'PaginadaCtrl'
    })
    .state('conf', {
      url: '/conf',
      templateUrl: 'views/config.html',
      controller:'ConfCtrl'
    })
    .state('configuradoTP', {
      url: '/configuradoTP',
      templateUrl: 'views/configuradoTP.html',
      controller:'ConfTPCtrl'
    })
    .state('configuradoTPServicios', {
      url: '/configuradoTPServicios',
      templateUrl: 'views/configuradoTPServicios.html',
      controller:'ConfTPSrvCtrl'
    })
    .state('configuradoTPFactory', {
      url: '/configuradoTPFactory',
      templateUrl: 'views/configuradoTPFactory.html',
      controller:'ConfTPFctCtrl'
    })
    .state('exportar', {
      url: '/exportar',
      templateUrl: 'views/exportar.html',
      controller:'ExportarCtrl'
    })
    .state('modificar', {
      url: '/modificar',
      templateUrl: 'views/modificar.html',
      controller:'ModificarCtrl'
    })
  });
