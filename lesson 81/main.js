const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 1; i < numbers.length; i++) {
	console.log(numbers[i++])
} 

// ======================================

const rainbowColors = ['Красный', 'Оранжевый', 'Желтый', 'Зеленый', 'Голубой', 'Синий', 'Фиолетовый'] // Всего 7 индексов

for (let i = rainbowColors.length - 1; i >= 0; i--) { // Вычитаю из 7 единичку, чтобы было 0, 1, 2, 3, 4, 5, 6
	console.log(rainbowColors[i])
}