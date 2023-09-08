// import './mapa.js';
//var canvas = document.getElementById("myCanvas");
//var ctx = canvas.getContext("2d");
class Main{
    constructor(x){
         
    }
    pintarMapa(ctx){ 
        var  map=new Mapa();
        var mapa1=map.mapas;
        // mapa1[1].
       for(var i=0;i<mapa1.length;i++){
           mapa1[i].paint(ctx);
       }
   
   
   }
}




