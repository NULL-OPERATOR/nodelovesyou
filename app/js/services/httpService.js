'use strict';
(function() {
  function HttpService ($http) {
    var HttpService = {};
    var self = HttpService;

    self.getData = function(url) {
      return $http.get(url);
    }
    return HttpService;
  }
angular
  .module('app')
  .factory('HttpService',['$http', HttpService]);
})();
