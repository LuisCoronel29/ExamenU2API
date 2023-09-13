
// import { Pared } from './paredes.js';
//var canvas = document.getElementById("myCanvas");
//var ctx = canvas.getContext("2d");
 export class Mapa{
     mapas=[];
    constructor(){
        this.add();
    }
    getMapa(){
        return this.mapas;
    }
    add(){
   
    //Marco superior
    this.mapas.push(new Pared(50,50,20,850));

    this.mapas.push(new Pared(420,50,20,100));

    //marco derecho
    this.mapas.push(new Pared(50,50,20,220));
    this.mapas.push(new Pared(50,270,150,20));
    this.mapas.push(new Pared(200,270,20,100));
    this.mapas.push(new Pared(50,370,20,150));


    //obstaculos interiores
    this.mapas.push(new Pared(150,150,100,50));

    this.mapas.push(new Pared(150,150,50,100));

    };
    seTocan(rect1, rect2) {
        return (
            rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y
        );
        };

}
class Pared{
    color="blue";
    constructor(x,y,w,h){
        this.posX=x;
        this.posY=y;
        this.width=w;
        this.heigth=h;
    }
    paint(ctx) {
        
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
        // console.log("hola")
    }

}
 
