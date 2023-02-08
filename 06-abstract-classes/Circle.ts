import{Shape} from './shapes';

export class Circle extends Shape{
    calculateArea(): number {
        return Math.PI * Math.pow(this._radius,2);
    }

    

    constructor(thex: number,they: number,private _radius: number)    // thex and they  are regular parameter ,private is parameter property
    { 
        super(thex,they)    // constructor need super class

    }
    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }

    //Override the getInfo() method

    getInfo(): string {
        return super.getInfo()+`,radius=${this._radius}`;
    }

    
}