var app = angular.module('starter.controllers', []);

app.controller('SignupCtrl', function ($log, $state, $ionicPopup, SignupService) {
    $log.info('loading SignupCtrl');
    this.data = {};
    this.signup = function () {
        $log.info('calling signup function with:', JSON.stringify(this.data));
        SignupService.signupUser(this.data).success(function (data) {
            $log.info('success');
            $log.info(data);
            $state.go('subscribed');
        }).error(function (body, status, headers) {
            /*
            var error;
            switch (status) {
                case 404:
                    error = "Server isn't up";
                    break;
                default:
                    error = null;
            }
            */

            $ionicPopup.alert(
                {
                    title: 'Signup failed!',
                    template: body //error || data
                }
            );
        });
    }
});

app.controller('DashCtrl', function () {});
app.controller('ChatsCtrl', function (Chats) {
    this.chats = Chats.all();
    this.remove = function (chat) {
        Chats.remove(chat);
    }
});

app.controller('ChatDetailCtrl', function ($stateParams, Chats) {
    this.chat = Chats.get($stateParams.chatId);
});

app.controller('FriendsCtrl', function (Friends) {
    this.friends = Friends.all();
});

app.controller('FriendDetailCtrl', function ($stateParams, Friends) {
    this.friend = Friends.get($stateParams.friendId);
});

app.controller('AccountCtrl', function () {
    this.settings = {
        enableFriends: true
    };
});
