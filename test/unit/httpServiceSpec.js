'use strict';

describe('HttpService', function() {

  beforeEach(module('app'));
  it('check service exists', inject(function(HttpService) {
      expect(HttpService).toBeDefined();
    }));
});
