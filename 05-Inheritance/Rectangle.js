"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const shapes_1 = require("./shapes");
class Rectangle extends shapes_1.Shape {
    constructor(thex, they, _width, _length) {
        super(thex, they);
        this._width = _width;
        this._length = _length;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
    //Override the getInfo() method
    getInfo() {
        return super.getInfo() + `,width=${this._width}, length=${this._length}`;
    }
}
exports.Rectangle = Rectangle;
