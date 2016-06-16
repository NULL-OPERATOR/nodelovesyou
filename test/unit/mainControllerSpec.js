'use strict';

describe('main controller', function() {

  describe('MainCtrl', function(){
    var main, httpBackend;

    beforeEach(module('app'));
    beforeEach(inject(function(_$httpBackend_, $controller) {
      var testData = { "count": 1 }
      var url = "http://"
      httpBackend = _$httpBackend_;
      httpBackend.expectGET(url).respond(testData);
      main = $controller('MainCtrl');
    }));

    it('undefined is undefined', function() {
      expect(main.items).toBeUndefined();
    });

    it('items are items', function() {
      httpBackend.flush();
      expect(main.items).toEqual(1);
    });
  });
});
