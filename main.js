// import { Mapa } from './mapa.js';
// import { Pared } from './paredes.js';
class Main {
    map=null;
    constructor() {
        
        this.map = new Mapa();
        this.velocidad = 5; 
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.addEventListeners(); 
        this.pacman=new Image();
        this.marcoI=new Image();
        this.paredSI=new Image();
        this.marcoI.src="marco-I.jpg";
        this.marcoI.src="pared-SI.jpg";
        this.pacman.src="pacman.gif";
    }


    addEventListeners() {
        // Evento de escucha de teclado
        document.addEventListener("keydown", (event) => {
            var tecla = event.key;
            switch (tecla) {
                case "w":
                    
                  //w  this.map.moverPacman(1);
                   // Mover la figura hacia arriba
                    if(this.map.choquePared(this.map.player)===false){
                        this.map.moverPacman(1);
                        console.log("arriba");
                    }else{
                        console.log("nel prro" );
                        this.map.moverPacman(2);
                    }
                    break;
                case "s":
                    
                    // this.map.moverPacman(2);
                    // Mover la figura hacia abajo

                    if(this.map.choquePared(this.map.player)===false){
                        this.map.moverPacman(2);
                    }else{
                        this.map.moverPacman(1);
                    }
                    break;
                case "a":
                    
                    // this.map.moverPacman(3);
                    // Mover la figura hacia la izquierda
                    if(this.map.choquePared(this.map.player)===false){
                        this.map.moverPacman(3);
                    }else{
                        this.map.moverPacman(4);
                    }
                    break;
                case "d":
                
                    // Mover la figura hacia la derecha
                    if(this.map.choquePared(this.map.player)===false){
                        this.map.moverPacman(4);
                    }else{
                        this.map.moverPacman(3);
                    }
                    
                    break;
                default:
                    // Manejar otras teclas si es necesario
            }

            // Vuelve a pintar el mapa después de mover la figura
            // this.inicio(this.ctx);
        });
    }

    inicio() {
        this.map.pintar(this.ctx);
        
    }
}

//////////////////////////////////////////////
class Mapa{
    mapas=[];
    player=new Pared(70,70,40,40);
    f1=new Pared(375,400,50,50);
    f2=new Pared(425,400,50,50);
    f3=new Pared(475,400,50,50);
   constructor(){
       this.canvas = document.getElementById("myCanvas");
       this.ctx = this.canvas.getContext("2d");
       this.player.setColor("#E4FF0B");
       this.f1.setColor("red");
       this.f2.setColor("green");
       this.f3.setColor("#FF0BF7");
       this.add();
   }
   add(){
    //salida fantasmas
    this.mapas.push(new Pared(420,370,70,20));
    this.mapas[0].setColor("rgb(255,255,250,0.3)");

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

    this.mapas.push(new Pared(450,740,25,90));

    //marco izquierdo inferior
    this.mapas.push(new Pared(50,580,20,250));
    this.mapas.push(new Pared(50,580,150,20));
    this.mapas.push(new Pared(200,480,20,120));
    this.mapas.push(new Pared(50,480,150,20));


   // obstaculos interiores esquina izquierda
    this.mapas.push(new Pared(280,480,20,120));
    this.mapas.push(new Pared(125,655,80,20));
    this.mapas.push(new Pared(200,655,20,95));
    this.mapas.push(new Pared(50,730,80,20));
    this.mapas.push(new Pared(280,670,100,20));
    this.mapas.push(new Pared(280,750,100,20));

    //marco inferior derecho
    this.mapas.push(new Pared(850,600,20,250));
    this.mapas.push(new Pared(720,580,150,20));
    this.mapas.push(new Pared(720,500,20,100));
    this.mapas.push(new Pared(720,480,150,20));


    //obstaculos interiores esquina derecha
    this.mapas.push(new Pared(640,480,20,120));
    this.mapas.push(new Pared(720,655,70,20));
    this.mapas.push(new Pared(720,655,20,120));
    this.mapas.push(new Pared(640,680,20,95));
    this.mapas.push(new Pared(350,580,215,20));
    this.mapas.push(new Pared(450,600,25,80));

   };
   
   seTocan(rect1, rect2) {
       return (
           rect1.getX()< rect2.getX() + rect2.getW() &&
           rect1.getX()+ rect1.getW() > rect2.getX()&&
           rect1.getY()< rect2.getY() + rect2.getH() &&
           rect1.getY() + rect1.getH()> rect2.getY()
       );
       };
    choquePared(aux) {
        

        for (let i = 0; i < this.mapas.length; i++) {
            var objeto = this.mapas[i];
            
            if (this.seTocan(aux, objeto)) {
                return true; // Retorna true si hay una colisión
            }
        }

        return false; // Retorna false si no hay colisión con ningún objeto
    }
    moverPacman(dir){
        switch(dir)
        {
            case 1:
                if((this.player.posY-5)>70){
                    this.player.setPosy(-5);
                }
                
                break;
            case 2:
                if((this.player.posY+5)<830){
                    this.player.setPosy(5);
                }
                
                break;
            case 3:
                if((this.player.posX-5)>70){
                    this.player.setPosX(-5);
                } 
                break;
            case 4:
                if((this.player.posX+5)<850){
                     this.player.setPosX(5);
                }
               
                break;

        }
        this.repintar(this.ctx);
        
        

        

    }
    repintar(ctx){
        for(var i=0;i<this.mapas.length;i++)
        {
            // console.log(this.mapas[i]);
            this.mapas[i].paint(ctx);
        }
        this.pintar(ctx);
    }
    pintar(ctx){
        
        for(var i=0;i<this.mapas.length;i++)
        {
            // console.log(this.mapas[i]);
            this.mapas[i].paint(ctx);
        }
        this.player.paint(ctx);
        this.f1.paint(ctx);
        this.f2.paint(ctx);
        this.f3.paint(ctx);
    }

}
///////////////////////////////////////////////
class Pared{
   color="blue";
   constructor(x,y,w,h){
       this.posX=x;
       this.posY=y;
       this.width=w;
       this.heigth=h;
   }
   setPosX(x){
    this.posX+=x;
   }
   setPosy(y){
    this.posY+=y;
   }
   getX()
   {
    return this.posX;
   }getY()
   {
    return this.posY;
   }
   getW(){
    return this.width;
   }
   getH(){
    return this.heigth;
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




