(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    /* @ngInject */
    function HomeController() {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
