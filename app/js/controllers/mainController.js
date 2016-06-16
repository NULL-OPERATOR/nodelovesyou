'use strict';
(function () {
  function MainCtrl (HttpService) {
    var self = this;


    self.getPage = function() {
      var url = "http://"
      HttpService.getData(url).then(function(response) {
        self.items = response.data.count
      })
    }

    self.getPage()
}
  angular
    .module('app')
    .controller('MainCtrl',['HttpService', MainCtrl]);
})();
