'use strict';

describe('EventListController', function(){
    var $controllerConstructor, scope, mockEventData;

    beforeEach(module("eventsApp"));

    beforeEach(inject(function($controller, $rootScope){
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        mockEventData = sinon.stub({getAllEvents: function(){}})
    }));

    it('should set the scope event to the result of the eventData.getAllEvent', function(){
        var mockEvents = {};
        mockEventData.getAllEvents.returns(mockEvents);

        $controllerConstructor("EventListController", 
            {'$scope': scope, eventData:mockEventData}
        )
        expect(scope.events).toBe(mockEvents);
    })
})