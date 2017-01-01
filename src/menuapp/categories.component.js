(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'src/menuapp/templates/categoriescomponent.template.html',
            bindings: {
                items: '<' //categories ?
            }
        });
})();