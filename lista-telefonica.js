(function () {
    "use strict";

    // MODULO

    angular.module('listaTelefonica', ["ngMessages"]);

    angular.module('listaTelefonica').controller("listaTelefonicaCtrl", listaTelefonicaCtrl);
    
    listaTelefonicaCtrl.$inject = ['$scope'];

    function listaTelefonicaCtrl($scope){
        var vm = this;

        //variaveis
        vm.app = "Lista Telefonica";
        vm.classe = "selecionado";
     
        
        vm.contatos = [
            {nome : 'Welbber', telefone: "1234-1234", cor: "red", data: new Date()},
            {nome : 'jose', telefone: "4321-4321", cor: "yellow", data: new Date()},
            {nome : 'joao', telefone: "4321-1234", cor : "blue", data: new Date()},
            {nome : 'pedro', telefone: "4322-2234", cor: "orange", data: new Date()},
        ];
        vm.operadoras = [
            {nome: "Oi", codigo: 88, categoria:"Celular", preco: 1},
            {nome: "Claro", codigo: 93, categoria:"Celular", preco: 2},
            {nome: "Tim", codigo: 91, categoria:"Celular",  preco: 3},
            {nome: "Vivo", codigo: 84, categoria:"Celular", preco: 5},
            {nome: "GVT", codigo: 25, categoria:"Fixo", preco: 0.5},
            {nome: "Embratel", codigo: 21, categoria:"Fixo", preco: 1.5}
        ];
        
        // Variaveis de funcoes
        vm.adicionarContato = adicionarContato;
        vm.apagarContato = apagarContato;
        vm.isContatoSelecionado = isContatoSelecionado;
        vm.ordenarPor = ordenarPor
        
        //funcoes

        function adicionarContato(contato){
            vm.contatos.push(angular.copy(contato));
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
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
        
        function ordenarPor(campo){
            vm.criterioDeOrdenacao = campo;
            vm.direcaoDaOrdenacao = !vm.direcaoDaOrdenacao;
        }
    }
})();