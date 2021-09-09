class ArrayOfNumbers {
	constructor(public collection: number[]) {}

	get(index: number): number {
		return this.collection[index];
	}
}

class ArrayOfStrings {
	constructor(public collection: string[]) {}

	get(index: number): string {
		return this.collection[index];
	}
}

class ArrayOfAnything<T> {
	constructor(public collection: T[]) {}

	get(index: number): T {
		return this.collection[index];
	}
}

new ArrayOfAnything<string>(['a', 'b', 'c', 'd']);
new ArrayOfAnything<number>([1, 2, 3, 4, 5]);

//example of generics with functions
function printStrings(arr: string[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function printNumbers(arr: number[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function printAnything<T>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

printAnything<string>(['323', 'd', 'adsf']);
printAnything(['323', 'd', 'adsf']); //TS is inferring type
printAnything<number>([1, 2, 4, 5, 67]);

// generic constraints
class Car2 {
	print() {
		console.log('I am a car');
	}
}

class House {
	print() {
		console.log('I am a house');
	}
}

interface Printable {
	print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i].print());
	}
}

printHousesOrCars([1,3,4,5,56]);

printHousesOrCars<Car2 | House>([new Car2(), new House(), new House()])
