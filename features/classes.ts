class Vehicle {
	constructor(public color: string) {}

	public drive(): void {
		console.log('chugga chugga');
	}
	protected honk(): void {
		console.log('beep');
	}
}

const vehicle = new Vehicle('blue');
console.log(vehicle.color);

class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
	}

	drive(): void {
		console.log('vroom');
	}
	startDrivingProcess(): void {
		this.drive();
		this.honk();
	}
}

const car1 = new Car(3, 'red');
car1.startDrivingProcess();
