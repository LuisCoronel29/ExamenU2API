
class Main{
     
    constructor(){
        this.map=new Mapa(); 
    }
    inicio(ctx){
        for(var i=0;i<this.map.mapas.length;i++)
        {
            
            this.map.mapas[i].paint(ctx);
        };
    }
   
   
};

//////////////////////////////////////////////
class Mapa{
    mapas=[];
   constructor(){
       this.add();
   }
   add(){
    //pacman
    this.mapas.push(new Pared(71,71,50,50));
    this.mapas[0].setColor("#E4FF0B");
    //fantasmas
    this.mapas.push(new Pared(375,400,50,50));
    this.mapas[1].setColor("red");
    this.mapas.push(new Pared(425,400,50,50));
    this.mapas[2].setColor("green");
    this.mapas.push(new Pared(475,400,50,50));
    this.mapas[3].setColor("#FF0BF7");
    //salida fantasmas
    this.mapas.push(new Pared(420,370,70,20));
    this.mapas[4].setColor("rgb(255,255,250,0.3)");

   //Marco superior
   this.mapas.push(new Pared(50,50,820,20));

   this.mapas.push(new Pared(450,50,20,120));

   //marco izquierdo superior
   this.mapas.push(new Pared(50,50,20,250));
   this.mapas.push(new Pared(50,290,150,20));
   this.mapas.push(new Pared(200,290,20,100));
   this.mapas.push(new Pared(50,370,150,20));


   //obstaculos interiores esquina izquierda
   this.mapas.push(new Pared(125,120,100,50));
   this.mapas.push(new Pared(125,220,100,20));

   this.mapas.push(new Pared(275,120,120,50));

   this.mapas.push(new Pared(275,220,20,170));
   this.mapas.push(new Pared(275,290,110,20));
   this.mapas.push(new Pared(345,220,240,20));
   this.mapas.push(new Pared(445,220,20,90));

    //cuadro fantasmas
   this.mapas.push(new Pared(350,370,20,140));
   this.mapas.push(new Pared(350,370,70,20));
   this.mapas.push(new Pared(490,370,70,20));
   this.mapas.push(new Pared(540,370,20,140));
   this.mapas.push(new Pared(350,490,200,20));
   
   
    //marco superior derecho
    this.mapas.push(new Pared(870,50,20,250));
    this.mapas.push(new Pared(720,290,170,20));
    this.mapas.push(new Pared(720,290,20,100));
    this.mapas.push(new Pared(720,370,170,20));
 
 
    //obstaculos interiores esquina derecha
    this.mapas.push(new Pared(720,120,100,50));
    this.mapas.push(new Pared(720,220,100,20));

    this.mapas.push(new Pared(520,120,120,50));

    this.mapas.push(new Pared(650,220,20,170));
   this.mapas.push(new Pared(540,290,110,20));
    
    // this.mapas.push(new Pared(540,220,100,20));

    //Marco inferior
    this.mapas.push(new Pared(50,830,800,20));

    this.mapas.push(new Pared(425,730,60,100));

    //marco izquierdo inferior
    this.mapas.push(new Pared(50,580,20,250));
    this.mapas.push(new Pared(50,580,150,20));
    this.mapas.push(new Pared(200,480,20,120));
    this.mapas.push(new Pared(50,480,150,20));


    //obstaculos interiores esquina izquierda
    // this.mapas.push(new Pared(125,120,100,50));
    // this.mapas.push(new Pared(125,220,100,20));
    // this.mapas.push(new Pared(275,120,100,50));
    // this.mapas.push(new Pared(275,220,100,20));

    //marco inferior derecho
    this.mapas.push(new Pared(850,600,20,250));
    this.mapas.push(new Pared(720,580,150,20));
    this.mapas.push(new Pared(720,500,20,100));
    this.mapas.push(new Pared(720,480,150,20));


    //obstaculos interiores esquina derecha
    // this.mapas.push(new Pared(690,120,100,50));
    // this.mapas.push(new Pared(690,220,100,20));
    // this.mapas.push(new Pared(540,120,100,50));
    // this.mapas.push(new Pared(540,220,100,20));

   };
   
   seTocan(rect1, rect2) {
       return (
           rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.height > rect2.y
       );
       };
    pintar(ctx){
        for(var i=0;i<this.mapas.length;i++)
        {
            // console.log(this.mapas[i]);
            this.mapas[i].paint(ctx);
        }
    }

}
/////////////////////////////////////////////////
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




