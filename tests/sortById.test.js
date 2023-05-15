const sortById = require('../src/sortById');

describe('sortById', () => {
    const arr = [
        { id: 2, name: "Ron" },
        { id: 1, name: "Hermione" },
        { id: 3, name: "Neville" }
    ];

    const expected = {
        '1': { id: 1, name: 'Hermione' },
        '2': { id: 2, name: 'Ron' },
        '3': { id: 3, name: 'Neville' }
    }

    it('Позитивные проверки', () => {
        expect(sortById(arr)).toEqual(expected)
    });

    it('Пустой массив', () => {
        expect(sortById([])).toEqual({})
    });

    it('Перезапись объектов с одинаковыми "id"', () => {
        const arr = [
            { id: 2, name: "Ron" },
            { id: 1, name: "Hermione" },
            { id: 2, name: "Neville" }
        ];
        const expected = {
            '1': { id: 1, name: 'Hermione' },
            '2': { id: 2, name: 'Neville' }
        }
        expect(sortById(arr)).toEqual(expected)
    });

    it('Обработка объектов без свойства "id"', () => {
        const arr = [
            { name: "Ron" },
            { id: 1, name: "Hermione" },
            { id: 2, name: "Neville" }
        ];
        const expected = {
            '1': { id: 1, name: 'Hermione' },
            '2': { id: 2, name: 'Neville' },
        }
        expect(sortById(arr)).toEqual(expected)
    });
})