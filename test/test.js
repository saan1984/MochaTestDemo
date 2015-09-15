var assert = require("assert"),
    operation = require('../number-operation');

describe('Testing addTwoNumber', function() {
    it('should return 4 when the input number are 1 and 3', function () {
        assert.equal(4, operation.addTwoNumber(1,3));
    });
});
