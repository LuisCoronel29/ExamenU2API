
import { Pared } from './paredes.js';
class Mapa{
    mapas=[];
    player=new Pared(71,71,50,50);
    f1=new Pared(375,400,50,50);
    f2=new Pared(425,400,50,50);
    f3=new Pared(475,400,50,50);
   constructor(){
    
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
           rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.height > rect2.y
       );
       };
    moverPacman(dir){
        switch(dir)
        {
            case 1:
                this.player.posY-=5;
                break;
            case 2:
                this.player.posY+=5;
                break;
            case 3:
                this.player.posX-=5;
                break;
            case 4:
                this.player.posX+=5;
                break;

        }
    }

}
export{Mapa};