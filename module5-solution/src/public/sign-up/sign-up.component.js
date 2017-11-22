(function () {
"use strict";

angular.module('public')
.component('favoritedish', {
  templateUrl: 'src/public/sign-up/sign-up.html',
  bindings: {
    favoritedish: '<'
  },
  controller: SignUpController
});


SignUpController.$inject = ['MenuService', 'UserInfoService','ApiPath'];
function SignUpController(MenuService, UserInfoService,ApiPath) {
  var reg = this;

  reg.submit = function () {
    reg.completed = true;
  };
}

})();
