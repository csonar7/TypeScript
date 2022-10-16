/*
interface Point{
    x:number;
    y:number;
}*/

class Point{
    x: number;
    y: number;

    draw(){
        console.log('X: '+this.x+' , Y: '+ this.y);
        

    }

    getDistance(another: Point) {

    }
    
}
let point = new Point();
point.x =1;
point.y = 2;
point.draw();

/*
let drawPoint = (point: Point) =>{

}

let getDistance = (pointA: Point, pointB: Point){

}

drawPoint({
    x: 1,
    y: 2
})
*/