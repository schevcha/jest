const culc = (a, b, operator) => {
    const anyParamsAreUndefined = a === undefined || b === undefined;
    const anyParamsAreNotNumber = typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b);

    if (anyParamsAreUndefined || anyParamsAreNotNumber) {
        throw new Error('Некорректный ввод')
    }
    
    if (!isFinite(a / b)) {
        throw new Error('На ноль делить нельзя')
    }

    switch (operator) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
        default:
            return 'Недопустимый оператор'
    }
}

module.exports = culc;
