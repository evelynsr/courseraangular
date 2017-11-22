(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService','InfoService', '$q'];
  function SignUpController(MenuService, InfoService, $q) {
    var reg = this;
    reg.dish_exists = true;
    reg.submit = function () {
      reg.completed = true;

      var promise = MenuService.getDish(reg.user.dish);
      promise.then(function(response){
        reg.dish_exists = true;
        reg.user.info_dish = response;
        InfoService.setUserInfo(reg.user);
        reg.mensaje = "The data was saved";
      },function (errorResponse) {
        reg.dish_exists = false;
        reg.mensaje = "";
      });
      //console.log();
    };
  }


})();
