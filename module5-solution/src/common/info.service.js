(function () {
"use strict";

angular.module('common')
.service('InfoService', InfoService);


//MenuService.$inject = ['$http', 'ApiPath'];
function InfoService() {
  var service = this;

  service.getInfo = function () {
    return service.user;
  };


  service.setUserInfo = function(userInfo) {
      service.user = userInfo;
  };

}



})();
