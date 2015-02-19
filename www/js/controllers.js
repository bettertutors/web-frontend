angular.module('starter.controllers', [])

    .controller('SignupCtrl', function ($scope, $log, LoginService, $ionicPopup, $state) {
        $scope.data = {};

        $scope.signup = function () {
            LoginService.loginUser($scope.data).success(function (data) {
                $log.info('success');
                $log.info(data);
                $state.go('subscribed');
            }).error(function (data) {
                $log.error('error');
                $log.error(data);
                $ionicPopup.alert({
                    title: 'Signup failed!',
                    template: 'Please check the values entered'
                });
            });
        }
    })


    .controller('DashCtrl', function ($scope) {})

    .controller('ChatsCtrl', function ($scope, Chats) {
        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        }
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('FriendsCtrl', function ($scope, Friends) {
        $scope.friends = Friends.all();
    })

    .controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
        $scope.friend = Friends.get($stateParams.friendId);
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
