const stringLength = require('./index.js');
const reverseString = require('./task2.js');


describe('Length tests', () => {
    test('Test string length', () => {
        const lengthOfName = stringLength('Afolabi');
        expect(lengthOfName).toBe(7);
    });

    test('Test string length', () => {
        const lengthOfName = stringLength('');
        expect(lengthOfName).toBe('Invalid string');
    }); 
});


describe('Reverse Tests', () => {
    test('Test reverse string', () => {
        const reverseOfStringName = reverseString('Akorede');
        expect(reverseOfStringName).toBe('ederokA');
    });  
});


