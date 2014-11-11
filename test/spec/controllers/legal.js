'use strict';

describe('Controller: LegalCtrl', function () {

  // load the controller's module
  beforeEach(module('onFireApp'));

  var LegalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LegalCtrl = $controller('LegalCtrl', {
      $scope: scope
    });
  }));

  it('should should probably have some tests', function () {
    // expect(scope.awesomeThings.length).toBe(3);
  });
});
