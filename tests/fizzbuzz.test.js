var expect = require("chai").expect;
var fizzbuzz = require("../fizzbuzz.js");

describe('fizzbuzz', function () {
    describe('fizz', function () {
        it('should return fizz', function () {
            var result = fizzbuzz.write(3);
            expect(result).to.equal("fizz");
        });
    });
    describe('number', function () {
        it('should return number', function () {
            var result = fizzbuzz.write(2);
            expect(result).to.equal(2);
        });
    });
    describe('buzz', function () {
        it('should return number', function () {
            var result = fizzbuzz.write('5');
            expect(result).to.equal('buzz');
        });
    });
    describe('fizzbuzz', function () {
        it('should return number', function () {
            var result = fizzbuzz.write('15');
            expect(result).to.equal('fizzbuzz');
        });
    });
    describe('16', function () {
        it('should return number', function () {
            var result = fizzbuzz.write(16);
            expect(result).to.equal(16);
        });
    });


});