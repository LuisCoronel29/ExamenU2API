//var canvas = document.getElementById("myCanvas");
//var ctx = canvas.getContext("2d");
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
    }

}
