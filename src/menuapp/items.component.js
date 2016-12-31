(function () {
    'use strict';

    angular.module('MenuApp').component('items', {
        templateUrl: 'menuapp/templates/items.template.html',
        bindings: {
            items: '<'
        }
    });
})();