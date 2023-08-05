/* 1 */
function nameFunc(name) {
	return `Hello ${name}`
}

console.log(nameFunc('Anatoly'))

/* 2 */
const sumNumbers = [1, 4, 5, 11, 20]

function enumeration(arrayNums, item) {
	for (let i = 0; i < arrayNums.length; i++) {
		if (arrayNums[i] >= item) {
			console.log(arrayNums[i])
		}
	}
}

enumeration(sumNumbers, 10);


/* 3 */
/* Первый вариант */
// function simpleCalculator(firstNumber, secondNumber, operator) {
// 	let result = null
// 	if (operator === 'minus') {
// 		return result = firstNumber - secondNumber
// 	} else if (operator === 'div') {
// 		return result = firstNumber / secondNumber
// 	} else if (operator === 'mul') {
// 		return result = firstNumber * secondNumber
// 	} else (operator === 'plus'); {
// 		return result = firstNumber + secondNumber
// 	}
// }

/* Второй вариант */
const simpleCalculator = (firstNumber, secondNumber, operator) => {
	switch (operator) {
		case 'minus':
			return firstNumber - secondNumber
		case 'div':
			return firstNumber / secondNumber
		case 'mul':
			return firstNumber * secondNumber
		case 'plus':
			return firstNumber + secondNumber
		default:
			return 'Неправильные значения!'
	}
};

console.log(simpleCalculator(2, 3, 'minus'))
console.log(simpleCalculator(50, 5, 'div'))