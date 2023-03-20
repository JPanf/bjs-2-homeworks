function parseCount(x) {
	let value = Number.parseFloat(x);
	if (isNaN(value)) {
		throw new Error("Невалидное значение")
	}
	return value;
}

function validateCount(params) {
	try {
		return parseCount(params);
	} catch (error) {
		return error
	}
}

class Triangle {
	constructor(a, b, c) {
		if ((a + b) < c || (b + c) < a || (a + c) < b) {
			throw new Error("Треугольник с такими сторонами не существует")
		}

		this.a = a;
		this.b = b;
		this.c = c;
	}
	get perimeter() {
		let perimeter = this.a + this.b + this.c;
		return perimeter;
	}

	get area() {
		let p = this.perimeter / 2;
		let area = parseFloat((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
		return area;
	}
}

function getTriangle(a, b, c) {
	let err = "Ошибка! Треугольник не существует";
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get perimeter() {
				return err
			},
			get area() {
				return err
			}
		}
	}
}