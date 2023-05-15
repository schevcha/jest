const sortByName = require('../src/sortByName');

describe('sortByName', () => {
    const array = [
        { id: 1, name: 'Harry' },
        { id: 2, name: 'Ron' },
        { id: 1, name: 'Hermione' },
        { name: 'Draco' },
        { id: 3, name: 'Neville' }
    ]
    const expected = [
        { name: 'Draco' },
        { id: 1, name: 'Harry' },
        { id: 1, name: 'Hermione' },
        { id: 3, name: 'Neville' },
        { id: 2, name: 'Ron' }
    ]
    it('Позитивный тест', () => {
        expect(sortByName(array)).toEqual(expected)
    })

    it('Пустой массив', () => {
        expect(sortByName([])).toEqual([])
    })

    it('Обработка объектов без свойства "name"', () => {
        const array = [
            { id: 1, name: 'Harry' },
            { id: 2, name: 'Ron' },
            { id: 1, name: 'Hermione' },
            { id: 5 },
            { id: 3, name: 'Neville' }
        ]

        const expected = [
            { id: 5 },
            { id: 1, name: 'Harry' },
            { id: 1, name: 'Hermione' },
            { id: 3, name: 'Neville' },
            { id: 2, name: 'Ron' }
        ]
        expect(sortByName(array)).toEqual(expected)
    })

    it('Нелатинский алфавит', () => {
        const array = [
            { id: 1, name: 'Ольга' },
            { id: 2, name: 'Арсений' },
            { id: 1, name: 'Николай' },
            { id: 5 },
            { id: 3, name: 'Neville' }
        ]

        const expected = [
            { id: 3, name: 'Neville' },
            { id: 5 },
            { id: 2, name: 'Арсений' },
            { id: 1, name: 'Николай' },
            { id: 1, name: 'Ольга' }
        ]

        expect(sortByName(array)).toEqual(expected)
    })
})