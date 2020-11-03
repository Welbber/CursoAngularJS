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
            {nome : 'Welbber', telefone: "9999999", cor: "red"},
            {nome : 'jose', telefone: "9999999", cor: "yellow"},
            {nome : 'joao', telefone: "9999999", cor : "blue"},
            {nome : 'pedro', telefone: "9999999", cor: "orange"},
        ];
        vm.adicionarContato = adicionarContato;
        vm.apagarContato = apagarContato;
        vm.isContatoSelecionado = isContatoSelecionado;
        vm.classe = "selecionado";
        vm.operadoras = [
            {nome: "Oi", codigo: 88, categoria:"Celular"},
            {nome: "Claro", codigo: 93, categoria:"Celular"},
            {nome: "Tim", codigo: 91, categoria:"Celular"},
            {nome: "Vivo", codigo: 84, categoria:"Celular"},
            {nome: "GVT", codigo: 25, categoria:"Fixo"},
            {nome: "Embratel", codigo: 21, categoria:"Fixo"}
        ];
        
        function adicionarContato(contato){
            vm.contatos.push(angular.copy(contato));
            // ou
            // delete $scope.contato;
        };

        function apagarContato(contatos){
             vm.contatos = contatos.filter(function (contato){
                 if (!contato.selecionado ) return contato;
             })
             
        };
        
        function isContatoSelecionado(contatos){
            
            return contatos.some(function (contato){
                return contato.selecionado;
            });
            
        };
    }
})();