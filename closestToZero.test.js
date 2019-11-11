'use strict';

const closestToZero = require('./closestToZero');

describe('closestToZero', () => {
    describe('with an array of positive integers', () => {
        const CLOSEST_TO_ZERO_NUMBER = 5;
        it.each([
            [[CLOSEST_TO_ZERO_NUMBER, 8, 10]],
            [[8, CLOSEST_TO_ZERO_NUMBER, 10]],
            [[10, 8, CLOSEST_TO_ZERO_NUMBER]],
        ])('returns the closest number to 0 for %o', (numbersArray) => {
            expect(closestToZero(numbersArray)).toEqual(CLOSEST_TO_ZERO_NUMBER);
        });
    });

    describe('with an array of positive and negative integers', () => {
        it('returns the closest number to 0 if it is positive', () => {
            const POSITIVE_CLOSEST_TO_ZERO = 1;
            const NUMBERS_ARRAY = [5, 4, -9, 6, -10, POSITIVE_CLOSEST_TO_ZERO, 8];
            expect(closestToZero(NUMBERS_ARRAY)).toEqual(POSITIVE_CLOSEST_TO_ZERO);
        });

        it('returns the closest number to 0 if it is negative', () => {
            const NEGATIVE_CLOSEST_TO_ZERO = -1;
            const NUMBERS_ARRAY = [5, 4, -9, 6, -10, NEGATIVE_CLOSEST_TO_ZERO, 8];
            expect(closestToZero(NUMBERS_ARRAY)).toEqual(NEGATIVE_CLOSEST_TO_ZERO);
        });

        describe('when either a postive and a negative number are closest to 0', () => {
            const POSITIVE_CLOSEST_TO_ZERO = 2;
            const NEGATIVE_CLOSEST_TO_ZERO = -2;
            it.each([
                [[8, NEGATIVE_CLOSEST_TO_ZERO, 3, POSITIVE_CLOSEST_TO_ZERO]],
                [[8, POSITIVE_CLOSEST_TO_ZERO, 3, NEGATIVE_CLOSEST_TO_ZERO]]
            ])('returns the positive number for %o', (numbersArray) => {
                expect(closestToZero(numbersArray)).toEqual(POSITIVE_CLOSEST_TO_ZERO);
            });
        });
    });
    
    describe('with an empty array', () => {
        const EMPTY_ARRAY = [];
        it('returns 0', () => {
            expect(closestToZero(EMPTY_ARRAY)).toEqual(0);
        });
    });

    describe('with an undefined array', () => {
        it('returns 0', () => {
            expect(closestToZero()).toEqual(0);
        });
    });
});
