"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const shapes_1 = require("./shapes");
class Circle extends shapes_1.Shape {
    constructor(thex, they, _radius) {
        super(thex, they); // constructor need super class
        this._radius = _radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this._radius, 2);
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    //Override the getInfo() method
    getInfo() {
        return super.getInfo() + `,radius=${this._radius}`;
    }
}
exports.Circle = Circle;
