// Создать функцию, которая принимает на вход два массива чисел и возвращает массив из элементов, которые есть в обоих массивах.

const findMatches = (arr1, arr2) => {
    return arr1.reduce((acc, current) => {
        if (arr2.includes(current)) {
            acc.push(current)
        }
        // FIXME: Это должно быть после выполнения всех итераций reduce
        return Array.from(new Set(acc))
    }, [])
}

module.exports = findMatches;