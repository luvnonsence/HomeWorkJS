// 1
const desc = {
	name: 'Anatoly',
	age: 24,
	hairColor: 'White-red'
}

console.log(desc.hairColor)

// 2
const greet = {
	sayHello(name) {
		return `Hello ${name}`
	}
}

console.log(greet.sayHello('Anatoly'))

// 3
const users = [
	{
		name: 'Danil',
		age: 20,
		dev: true
	},
	{
		name: 'Katya',
		age: 26,
		dev: false
	},
	{
		name: 'Arina',
		age: 24,
		dev: true
	}
]

let notDevCounter = null

for (let i = 0; i < users.length; i++) {
	if (users[i].dev !== true) {
		notDevCounter++
	}
}

console.log(`В массиве кол-во: ${notDevCounter}`)