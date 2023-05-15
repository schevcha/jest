// Напиши функцию, которая принимает на вход массив объектов и возвращает объект, 
// в котором ключами являются уникальные значения свойства "id" объектов, а значениями - сами объекты.

const sortById = arr => {
    return arr.reduce((acc, current) => {
        if (!current.id) return acc;

        acc[current.id] = current
        return acc
    }, {})
}

module.exports = sortById;