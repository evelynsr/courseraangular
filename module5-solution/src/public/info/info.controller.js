(function () {
  "use strict";

  angular.module('public')
  .controller('InfoController', InfoController);

  InfoController.$inject = ['InfoService'];
  function InfoController(InfoService) {
    var info = this;
    info.user = InfoService.getInfo();

  }


})();
