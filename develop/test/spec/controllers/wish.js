'use strict';

describe('Controller: WishCtrl', function () {

  // load the controller's module
  beforeEach(module('helmapApp'));

  var WishCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WishCtrl = $controller('WishCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WishCtrl.awesomeThings.length).toBe(3);
  });
});
