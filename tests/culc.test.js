const culc = require('../src/culc')

const operators = ['+', '-', '*', '/'];
const num1 = [6, 8, 9, 12];
const num2 = [2, 3, 4, 3];
const expected = [8, 5, 36, 4];
const invalidOperators = ['', ' - ', false, '//'];

describe('culc', () => {
    it.each([
        [6, 2, 8, '+'],
        [8, 3, 5, '-'],
        [9, 4, 36, '*'],
        [12, 3, 4, '/']
    ])('Позитивные проверки', (a, b, expected, operator) => {
        expect(culc(a, b, operator)).toBe(expected);
    });

    it('Негативные проверки: недопустимые типы операндов', () => {
        for (let i = 0; i < operators.length; i++) {
            expect(() => culc(undefined, 4, operators[i])).toThrow('Некорректный ввод');
            expect(() => culc('dsad', 4, operators[i])).toThrow('Некорректный ввод');
            expect(() => culc(NaN, '4', operators[i])).toThrow('Некорректный ввод');
            expect(() => culc(5, NaN, operators[i])).toThrow('Некорректный ввод');
            expect(() => culc(5, undefined, operators[i])).toThrow('Некорректный ввод');
        }
    })

    it('Негативные проверки: недопустимые операторы', () => {
        invalidOperators.forEach(() => expect(culc(5, 3, invalidOperators)).toBe('Недопустимый оператор'))
    })

    it('Деление на ноль', () => {
        expect(() => culc(2, 0, '/')).toThrow('На ноль делить нельзя')
        expect(() => culc(-2, 0, '/')).toThrow('На ноль делить нельзя')
    })
})