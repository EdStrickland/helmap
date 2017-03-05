'use strict';

describe('Controller: MainframeCtrl', function () {

  // load the controller's module
  beforeEach(module('helmapApp'));

  var MainframeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainframeCtrl = $controller('MainframeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainframeCtrl.awesomeThings.length).toBe(3);
  });
});
