'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('onFireApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should should probably have some tests', function () {
    // expect(scope.awesomeThings.length).toBe(3);
  });
});
