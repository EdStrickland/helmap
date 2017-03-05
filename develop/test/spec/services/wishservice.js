'use strict';

describe('Service: wishService', function () {

  // load the service's module
  beforeEach(module('helmapApp'));

  // instantiate service
  var wishService;
  beforeEach(inject(function (_wishService_) {
    wishService = _wishService_;
  }));

  it('should do something', function () {
    expect(!!wishService).toBe(true);
  });

});
