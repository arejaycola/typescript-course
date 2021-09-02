let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [3, 634, 456, 36, 2234];
let truths: boolean[] = [true, false, true];

//classes
class Car1 {}

let myCar: Car1 = new Car1();

// object literal
let point: { x: number; y: number } = {
	x: 10,
	y: 20,
};

// function
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

// when to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); //{x: 10, y: 20};

// 2) when we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
	if (words[i] === 'green') {
		foundWord = true;
	}
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numbersAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numbersAboveZero = numbers[i];
	}
}
