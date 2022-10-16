class Point1{
  
    constructor(private _x?: number, private _y?: number){
    }

    draw(){
        console.log('X: '+this._x+' , Y: '+ this._y);
    
    }

    get x(){
        return this._x;
    }

    set x(value: number) {
        if(value < 0)
            throw new Error('value cannot be less than 0.');

        this._x = value;
    }


}
let point1 = new Point1();
//let point = new Point();
let x = point1.x;
point1.x = (10);
point1.draw();
