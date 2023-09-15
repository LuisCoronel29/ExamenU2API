class Pared{
    color="blue";
    constructor(x,y,w,h){
        this.posX=x;
        this.posY=y;
        this.width=w;
        this.heigth=h;
    }
   setColor(c)
   {
     this.color=c;
   }
    paint(ctx) {
         let x=this.posX;
         let y=this.posY;
         let w=this.width;
         let h=this.heigth;
         ctx.fillStyle = this.color;
         
         ctx.fillRect(x, y, w, h);
         // console.log("hola")
    }
 
 }
 export{Pared};
