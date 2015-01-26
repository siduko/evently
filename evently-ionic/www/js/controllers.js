/**
 * Created by LaiDuyHoang on 25/01/2015.
 */
angular.module('evently.controllers', ['evently.factories'])
    .controller('GroupController', function ($scope, GroupService) {
        $scope.groups = GroupService.all();

        $ionicModal.fromTemplateUrl('add-group.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function() {
            console.log('click');
            $scope.modal.show();
        };
        $scope.closeModal = function() {
            $scope.modal.hide();
        };
    });