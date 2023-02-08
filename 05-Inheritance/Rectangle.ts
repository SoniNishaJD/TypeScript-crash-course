import{Shape} from './shapes';

export class Rectangle extends Shape{

    constructor(thex: number, they: number,private _width: number, private _length: number){
            super(thex,they);
    }

    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }
    
    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }

    //Override the getInfo() method

    getInfo(): string {
        return super.getInfo()+`,width=${this._width}, length=${this._length}`;
    }
}