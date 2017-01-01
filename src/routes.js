(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/'); //Redirect to home page if no other URL matches
        //Set up UI states
        $stateProvider

            .state('home', {
            url: '/',
            templateUrl: 'src/menuapp/templates/home.template.html'
        })

        //categories state
        .state('categories', {
            url: '/categories',
            templateUrl: 'src/menuapp/templates/categories.template.html',
            controller: 'CategoriesController as categoriesCtrl',
            resolve: {
                categories: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories().then(function (response) {
                        return response.data;
                    });
                }]
            }
        })

        //items state
        .state('items', {
            url: '/items/{category}',
            templateUrl: 'src/menuapp/templates/items.template.html',
            controller: 'ItemsController as itemsCtrl',
            resolve: {
                items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                    return MenuDataService.getItemsForCategory($stateParams.category).then(function (response) {
                        return response.data.menu_items;
                    });
                }]
            }
        });
    }
})();