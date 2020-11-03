(function () {
    "use strict";

    // MODULO

    angular.module('listaTelefonica', []);

    angular.module('listaTelefonica').controller("listaTelefonicaCtrl", listaTelefonicaCtrl);
    
    listaTelefonicaCtrl.$inject = ['$scope'];

    function listaTelefonicaCtrl($scope){
        var vm = this;
        vm.app = "Lista Telefonica";
        vm.contatos = [
            {nome : 'Welbber', telefone: "9999999"},
            {nome : 'jose', telefone: "9999999"},
            {nome : 'joao', telefone: "9999999"},
            {nome : 'pedro', telefone: "9999999"},
        ];
        vm.adicionarContato = adicionarContato;

        function adicionarContato(contato){
            vm.contatos.push(angular.copy(contato));
            // ou
            // delete $scope.contato;
        };
    }

    
})();