import { Mapa } from './mapa.js';
import './paredes.js';
export class Main{
    constructor(){
        this.map=new Mapa(); 
    }
    pintarMapa(ctx){ 
        
        
        // var mapa1=map.mapas;
       this.map.pintar(ctx);

    
    //    for(var i=0;i<mapa1.length;i++){
    //        mapa1[i].paint(ctx);
    //        console.log(mapa1[i])
    //    }
   
   
   }
}




