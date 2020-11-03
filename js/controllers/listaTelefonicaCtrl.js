angular.module('listaTelefonica').controller("listaTelefonicaCtrl", listaTelefonicaCtrl);

    listaTelefonicaCtrl.$inject = ['$scope', '$http'];

    function listaTelefonicaCtrl($scope, $http) {
        var vm = this;

        //variaveis
        vm.app = "Lista Telefonica";
        vm.classe = "selecionado";


        vm.contatos = [];
        vm.operadoras = [];

        // Variaveis de funcoes
        vm.adicionarContato = adicionarContato;
        vm.apagarContato = apagarContato;
        vm.isContatoSelecionado = isContatoSelecionado;
        vm.ordenarPor = ordenarPor

        //funcoes
        function recuperaContatos() {
            $http({
                method: 'GET',
                url: 'http://localhost:3000/contato'
            }).then(function successCallback(response) {
                vm.contatos = response.data;
                vm.idFinal = vm.contatos[vm.contatos.length - 1].id;
            }, function errorCallback(response) {
                alert("Erro ao solicitar dados do servidor");
            });
        }

        function recuperaOperadoras() {
            return $http({
                method: 'GET',
                url: 'http://localhost:3000/operadora'
            }).then(function successCallback(response) {
                vm.operadoras = response.data;
            }, function errorCallback(response) {
                alert("Erro ao solicitar dados do servidor");
            });
        }
        recuperaContatos();
        recuperaOperadoras();
        function adicionarContato(contato) {

            contato.data = new Date();
            contato.id = vm.idFinal + 1;

            $http({
                method: 'POST',
                url: 'http://localhost:3000/contato/',
                data: contato
            }).then(function successCallback(response) {
                recuperaContatos();
                delete $scope.contato
            }, function errorCallback(response) {
                alert("Erro ao salvar contato no servidor");
            });
        }

        function apagarContato(contatos) {

            contatos.filter(function (contato) {
                if (contato.selecionado) {
                    $http({
                        method: 'DELETE',
                        url: 'http://localhost:3000/contato/' + contato.id
                    }).then(function successCallback(response) {
                        recuperaContatos();

                    }, function errorCallback(response) {
                        alert("Erro ao solicitar dados do servidor");
                    });
                };
            })

        };

        function isContatoSelecionado(contatos) {

            return contatos.some(function (contato) {
                return contato.selecionado;
            });

        };

        function ordenarPor(campo) {
            vm.criterioDeOrdenacao = campo;
            vm.direcaoDaOrdenacao = !vm.direcaoDaOrdenacao;
        }
    }