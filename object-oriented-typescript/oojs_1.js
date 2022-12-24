"use strict";
class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    calcPerimeter() {
        console.log(`the perimeter is: ${this.sides * this.sideLength}`);
    }
}
const square = new Shape('square', 4, 5);
const triangle = new Shape('triangle', 3, 3);
square.calcPerimeter();
triangle.calcPerimeter();
class Square extends Shape {
    constructor(sideLength, name = 'square', sides = 4) {
        super(name, sides, sideLength);
    }
    calcArea() {
        console.log(`the area is: ${this.sides * this.sides} units squared`);
    }
}
const newSquare = new Square(5);
newSquare.calcPerimeter();
newSquare.calcArea();
