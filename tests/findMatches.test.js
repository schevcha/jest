const findMatches = require('../src/findMatches');

describe('findMatches', () => {
    it('Позитивные проверки', () => {
        const arr1 = [4, 'snake', 3, 1]
        const arr2 = [1, 3, 4, 5, 'snake']
        const expected = [4, 'snake', 3, 1]

        expect(findMatches(arr1, arr2)).toEqual(expected)
        expect(findMatches([1, 2], [3, 4])).toEqual([])
    })

    it('Пустые массивы', () => {
        expect(findMatches([], [])).toEqual([])
        expect(findMatches([1, 3, , 5], [])).toEqual([])
        expect(findMatches([], [1, 3, , 5])).toEqual([])
    })

    it('Сравнение вложенных объектов', () => {
        expect(findMatches([1, 2, { 1: 2 }], [{ 1: 2 }, 4, 5])).toEqual([])
    })

    it('Сравнение одинаковых по ссылке вложенных объектов', () => {
        const nestedObj = { 1: 2 };

        expect(findMatches([1, 2, nestedObj], [nestedObj, 4, 5])).toEqual([nestedObj])
    })

    it('Удаление повторяющихся значений', () => {
        const arr1 = [1, 2, 2, 3];
        const arr2 = [2, 3, 3, 4];

        const result = findMatches(arr1, arr2);

        expect(result).toEqual([2, 3]);
    });

})