// Создать функцию, которая принимает на вход два массива чисел и возвращает массив из элементов, которые есть в обоих массивах.

const findMatches = (arr1, arr2) => {
    const result = arr1.reduce((acc, current) => {
        if (arr2.includes(current)) {
            acc.push(current)
        }
        return acc
    }, [])
    return Array.from(new Set(result))
}

module.exports = findMatches;