
class Main {
    map=null;
    constructor() {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.marcoI = new Image();
        this.paredSI = new Image();
        this.pacmanImage = new Image();
        this.marcoI.src="marco-I.jpg"
        this.pacmanImage.src = "pacman.jpg"; // Ruta de la imagen de Pac-Man
        this.map = new Mapa(this.pacmanImage);
        this.velocidad = 5;
        this.addEventListeners();
    }


    addEventListeners() {
        // Evento de escucha de teclado
        document.addEventListener("keydown", (event) => {
            console.log(event);
            var tecla = event.keyCode;
            switch (tecla) {
                case 87:
                   // Mover la figura hacia arriba
                        this.map.dir=1;
                    break;
                case 83:
                    // Mover la figura hacia abajo
                        this.map.dir=2;
                    break;
                case 65:
                        this.map.dir=3;
                    break;
                case 68:
                    // Mover la figura hacia la derecha
                        this.map.dir=4;
                    break;
                case 32:
                    this.map.pausar();     
                
                default:
                    // Manejar otras teclas si es necesario
            }

        });
    }

    inicio(ctx) {
        let imagenes=0;
        
        this.pacmanImage.onload = () => {
            this.map.pintar(ctx);
        };
        

        
    }
}
window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 17);
        };
    }());

//////////////////////////////////////////////
class Mapa{
    mapas=[];
    comida=[];
    dir=0;
    player=new Pared(71,71,40,40);
    f1=new Pared(375,520,40,40);
    f2=new Pared(425,520,40,40);
    f3=new Pared(475,520,40,40);
    constructor(pacmanImage) {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.pacman = pacmanImage; // Asigna la imagen de Pac-Man
        this.player.setColor("#E4FF0B");
        this.f1.setColor("red");
        this.f2.setColor("green");
        this.f3.setColor("#FF0BF7");
        this.dir = 2;
        this.dirF1=2;
        this.difF2=2;
        this.dirF3=2;
        this.pausa=false;
        this.add();
        this.pintar(this.ctx);
        this.moverPacman = this.moverPacman.bind(this); // Asegurar que moverPacman tenga el contexto correcto
        window.requestAnimationFrame(this.moverPacman);
       
    
        //this.agregarCirculos();
    }
    pausar() {
        this.pausa = !this.pausa;
        this.animationId = requestAnimationFrame(this.moverPacman);
        if (this.pausa) {
          // Pausar el juego
          cancelAnimationFrame(this.animationId); // Detener la animación
          console.log("pausa");
        } else {
          // Reanudar el juego
          this.animationId = requestAnimationFrame(this.moverPacman); // Continuar la animación
        }
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
    hayColisionCirculoRectangulo(circulo, rectangulo) {
        // Calcula el punto más cercano en el rectángulo al centro del círculo
        let puntoMasCercanoX = Math.max(rectangulo.x, Math.min(circulo.x, rectangulo.posX + rectangulo.width));
        let puntoMasCercanoY = Math.max(rectangulo.y, Math.min(circulo.y, rectangulo.posY + rectangulo.heigth));

        // Calcula la distancia entre el punto más cercano y el centro del círculo
        let distanciaX = circulo.x - puntoMasCercanoX;
        let distanciaY = circulo.y - puntoMasCercanoY;
        let distancia = Math.sqrt((distanciaX * distanciaX) + (distanciaY * distanciaY));

        // Comprueba si la distancia es menor o igual al radio del círculo
        return distancia <= circulo.radio;
    }

    seTocan(pared1, pared2, margen =1) {
        return (
            pared1.getX() - margen < pared2.getX() + pared2.getW() &&
            pared1.getX() + pared1.getW() + margen > pared2.getX() &&
            pared1.getY() - margen < pared2.getY() + pared2.getH() &&
            pared1.getY() + pared1.getH() + margen > pared2.getY()
        );
    }
    choquePared(aux) {
        for (let i = 0; i < this.mapas.length; i++) {
            var objeto = this.mapas[i];
            
            if (this.seTocan(aux, objeto)) {

                return true; // Retorna true si hay una colisión
            }
        }

        return false; // Retorna false si no hay colisión con ningún objeto
    }
   
   
    moverPacman() {
        if(!this.pause){
            if (this.dir === 1) {
                if ((this.player.posY ) > 70 && !this.choquePared(this.player)) {
                    this.player.setPosy(-1);
                } else {
                    this.player.setPosy(1);
                    this.dir=0;
                }
            } else if (this.dir === 2) {
                if ((this.player.posY  ) < 830 && !this.choquePared(this.player)) {
                    this.player.setPosy(1);
                } else {
                    this.player.setPosy(-1);
                    this.dir=0;
                }
            } else if (this.dir === 3) {
                if ((this.player.posX ) > 0 && !this.choquePared(this.player)) {
                    this.player.setPosX(-1);
                    if(this.player.getX()-20<50){
                        this.player.posX=850;
                        this.player.setPosX(-1);
                    }
                } else {
                    this.player.setPosX(1);
                    this.dir=0;
                }
            } else if (this.dir === 4) {
                if ((this.player.posX ) < 900 && !this.choquePared(this.player)) {
                    this.player.setPosX(1);
                    if(this.player.getX()+40>900){
                        this.player.posX=50;
                        this.player.setPosX(1);
                    }
                } else {
                    this.player.setPosX(-1);
                    this.dir=0;
                }
                
            }
        
            
           this.moverFantasma();
            window.requestAnimationFrame(this.moverPacman);
            this.repintar(this.ctx);
        }
        
        
    }
    choqueFantasma(objeto, dx, dy) {
        // dx y dy representan la dirección en la que quieres verificar si hay una pared
        const nuevoX = objeto.getX() + dx;
        const nuevoY = objeto.getY() + dy;
    
        // Verifica si hay una colisión en la nueva posición
        for (let i = 0; i < this.mapas.length; i++) {
            const pared = this.mapas[i];
            if (
                nuevoX < pared.getX() + pared.getW() &&
                nuevoX + objeto.getW() > pared.getX() &&
                nuevoY < pared.getY() + pared.getH() &&
                nuevoY + objeto.getH() > pared.getY()
            ) {
                return true; // Hay una colisión con una pared
            }
        }
    
        return false; // No hay colisión con ninguna pared
    }
    direccionAleatoria() {
        // Genera un número aleatorio entre 1 y 4
        const direccion = Math.floor(Math.random() * 4) + 1;
    
        return direccion;
    }
    moverFantasma() {
        const distanciaX1 = this.player.posX - this.f1.posX;
        const distanciaY1 = this.player.posY - this.f1.posY;
        const distanciaAlJugador1 = Math.sqrt(distanciaX1 * distanciaX1 + distanciaY1 * distanciaY1);
    
        // Mueve el fantasma f1 
        if (distanciaAlJugador1 > 200) {
            if (this.dirF1 === 1) {
                // Mover el fantasma hacia arriba
                if ((this.f1.posY - 1) > 70 && !this.choqueFantasma(this.f1, 0, -1)) {
                    this.f1.setPosy(-1);
                } else {
                    this.f1.setPosy(1);
                    this.dirF1 = 0;
                    this.dirF1 = this.direccionAleatoria();
                }
            } else if (this.dirF1 === 2) {
                // Mover el fantasma hacia abajo
                if ((this.f1.posY + 1) < 830 && !this.choqueFantasma(this.f1, 0, 1)) {
                    this.f1.setPosy(1);
                } else {
                    this.f1.setPosy(-1);
                    this.dirF1 = 0;
                    this.dirF1 = this.direccionAleatoria();
                }
            } else if (this.dirF1 === 3) {
                // Mover el fantasma hacia la izquierda
                if ((this.f1.posX - 1) > 0 && !this.choqueFantasma(this.f1, -1, 0)) {
                    this.f1.setPosX(-1);
                    if(this.f1.getX()-20<50)
                    {
                        this.f1.posX=850;
                        this.f1.setPosX(1);
                    }
                } else {
                    this.f1.setPosX(1);
                    this.dirF1 = 0;
                    this.dirF1 = this.direccionAleatoria();
                }
            } else if (this.dirF1 === 4) {
                // Mover el fantasma hacia la derecha
                if ((this.f1.posX + 1) < 850 && !this.choqueFantasma(this.f1, 1, 0)) {
                    this.f1.setPosX(1);
                    if(this.f1.getX()+40>900)
                    {
                        this.f1.posX=50;
                        this.f1.setPosX(1);
                    }
                } else {
                    this.f1.setPosX(-1);
                    this.dirF1 = 0;
                    this.dirF1 = this.direccionAleatoria();
                }
            }
        } if(distanciaAlJugador1<=200){
            
            if (!this.choqueFantasma(this.f1, 0, 0)) {
                if (distanciaX1 > 0) {
                    this.dirF1 = 4; // Intentar mover hacia la derecha
                } else if (distanciaX1 < 0) {
                    this.dirF1 = 3; // Intentar mover hacia la izquierda
                } else if (distanciaY1 > 0) {
                    this.dirF1 = 2; // Intentar mover hacia abajo
                } else if (distanciaY1 < 0) {
                    this.dirF1 = 1; // Intentar mover hacia arriba
                }
            } else {
                this.dirF1 = 0;
                if (!this.choqueFantasma(this.f1, 1, 0)) {
                    this.dirF1 = 4; // Intentar mover hacia la derecha
                } else if (!this.choqueFantasma(this.f1, -1, 0)) {
                    this.dirF1 = 3; // Intentar mover hacia la izquierda
                } else if (!this.choqueFantasma(this.f1, 0, 1)) {
                    this.dirF1 = 2; // Intentar mover hacia abajo
                } else if (!this.choqueFantasma(this.f1, 0, -1)) {
                    this.dirF1 = 1; // Intentar mover hacia arriba
                }
            }
            if (this.dirF1 === 1) {
                // Mover el fantasma hacia arriba
                if ((this.f1.posY - 1) > 70 && !this.choqueFantasma(this.f1, 0, -1)) {
                    this.f1.setPosy(-1);
                } else {
                    this.f1.setPosy(1);
                    this.dirF1 = 0;
                    this.dirF1 = this.direccionAleatoria();
                }
            } else if (this.dirF1 === 2) {
                // Mover el fantasma hacia abajo
                if ((this.f1.posY + 1) < 830 && !this.choqueFantasma(this.f1, 0, 1)) {
                    this.f1.setPosy(1);
                } else {
                    this.f1.setPosy(-1);
                    this.dirF1 = 0;
                    this.dirF1 = this.direccionAleatoria();
                }
            } else if (this.dirF1 === 3) {
                // Mover el fantasma hacia la izquierda
                if ((this.f1.posX - 1) > 20 && !this.choqueFantasma(this.f1, -1, 0)) {
                    this.f1.setPosX(-1);
                    if(this.f1.getX()-20<50)
                    {
                        this.f1.posX=50;
                        this.f1.setPosX(1);

                    }
                } else {
                    this.f1.setPosX(1);
                    this.dirF1 = 0;
                    this.dirF1 = this.direccionAleatoria();
                }
            } else if (this.dirF1 === 4) {
                // Mover el fantasma hacia la derecha
                if ((this.f1.posX + 1) < 850 && !this.choqueFantasma(this.f1, 1, 0)) {
                    this.f1.setPosX(1);
                    if(this.f1.getX()+40>900)
                    {
                        this.f1.posX=50;
                        this.f1.setPosX(1);
                    }
                } else {
                    this.f1.setPosX(-1);
                    this.dirF1 = 0;
                    this.dirF1 = this.direccionAleatoria();
                }
               
            }
        }
    
        // fantasma f2
        const distanciaX2 = this.player.posX - this.f2.posX;
        const distanciaY2 = this.player.posY - this.f2.posY;
        const distanciaAlJugador2 = Math.sqrt(distanciaX2 * distanciaX2 + distanciaY2 * distanciaY2);
    
        if (distanciaAlJugador2 > 200) {
            if (this.dirF2 === 1) {
                // Mover el fantasma hacia arriba
                if ((this.f2.posY - 1) > 70 && !this.choqueFantasma(this.f2, 0, -1)) {
                    this.f2.setPosy(-1);
                } else {
                    this.f2.setPosy(1);
                    this.dirF2 = 0;
                    this.dirF2 = this.direccionAleatoria();
                }
            } else if (this.dirF2 === 2) {
                // Mover el fantasma hacia abajo
                if ((this.f2.posY + 1) < 830 && !this.choqueFantasma(this.f2, 0, 1)) {
                    this.f2.setPosy(1);
                } else {
                    this.f2.setPosy(-1);
                    this.dirF2 = 0;
                    this.dirF2 = this.direccionAleatoria();
                }
            } else if (this.dirF2 === 3) {
                // Mover el fantasma hacia la izquierda
                if ((this.f2.posX - 1) > 70 && !this.choqueFantasma(this.f2, -1, 0)) {
                    this.f2.setPosX(-1);
                    if(this.f2.getX()-40<50)
                    {
                        this.f2.posX=850;
                        this.f2.setPosX(1);
                    }
                } else {
                    this.f2.setPosX(1);
                    this.dirF2 = 0;
                    this.dirF2 = this.direccionAleatoria();
                }
            } else if (this.dirF2 === 4) {
                // Mover el fantasma hacia la derecha
                if ((this.f2.posX + 1) < 850 && !this.choqueFantasma(this.f2, 1, 0)) {
                    this.f2.setPosX(1);
                    if(this.f2.getX()+40>900)
                    {
                        this.f2.posX=50;
                        this.f2.setPosX(1);
                    }
                } else {
                    this.f2.setPosX(-1);
                    this.dirF2 = 0;
                    this.dirF2 = this.direccionAleatoria();
                }
            }
        } 
        if(distanciaAlJugador2<=200) {
            if (!this.choqueFantasma(this.f2, 0, 0)) {
                if (distanciaX2 > 0) {
                    this.dirF2 = 4; // Intentar mover hacia la derecha
                } else if (distanciaX2 < 0) {
                    this.dirF2 = 3; // Intentar mover hacia la izquierda
                } else if (distanciaY2 > 0) {
                    this.dirF2 = 2; // Intentar mover hacia abajo
                } else if (distanciaY2 < 0) {
                    this.dirF2 = 1; // Intentar mover hacia arriba
                }
            } else {
                this.dirF2 = 0;
                if (!this.choqueFantasma(this.f2, 1, 0)) {
                    this.dirF2 = 4; // Intentar mover hacia la derecha
                } else if (!this.choqueFantasma(this.f2, -1, 0)) {
                    this.dirF2 = 3; // Intentar mover hacia la izquierda
                } else if (!this.choqueFantasma(this.f2, 0, 1)) {
                    this.dirF2 = 2; // Intentar mover hacia abajo
                } else if (!this.choqueFantasma(this.f2, 0, -1)) {
                    this.dirF2 = 1; // Intentar mover hacia arriba
                }
            }
            if (this.dirF2 === 1) {
                // Mover el fantasma hacia arriba
                if ((this.f2.posY - 1) > 70 && !this.choqueFantasma(this.f2, 0, -1)) {
                    this.f2.setPosy(-1);
                } else {
                    this.f2.setPosy(1);
                    this.dirF2 = 0;
                    this.dirF2 = this.direccionAleatoria();
                }
            } else if (this.dirF2 === 2) {
                // Mover el fantasma hacia abajo
                if ((this.f2.posY + 1) < 830 && !this.choqueFantasma(this.f2, 0, 1)) {
                    this.f2.setPosy(1);
                } else {
                    this.f2.setPosy(-1);
                    this.dirF2 = 0;
                    this.dirF2 = this.direccionAleatoria();
                }
            } else if (this.dirF2 === 3) {
                // Mover el fantasma hacia la izquierda
                if ((this.f2.posX - 1) > 70 && !this.choqueFantasma(this.f2, -1, 0)) {
                    this.f2.setPosX(-1);
                    if(this.f2.getX()-30<50)
                    {
                        this.f2.posX=850;
                        this.f2.setPosX(1);
                    }
                } else {
                    this.f2.setPosX(1);
                    this.dirF2 = 0;
                    this.dirF2 = this.direccionAleatoria();
                }
            } else if (this.dirF2 === 4) {
                // Mover el fantasma hacia la derecha
                if ((this.f2.posX + 1) < 850 && !this.choqueFantasma(this.f2, 1, 0)) {
                    this.f2.setPosX(1);
                    if(this.f2.getX()+40>890)
                    {
                        this.f2.posX=50;
                        this.f2.setPosX(1);
                    }
                } else {
                    this.f2.setPosX(-1);
                    this.dirF2 = 0;
                    this.dirF2 = this.direccionAleatoria();
                }
            }

        }
    
       // fantasma f3
        const distanciaX3 = this.player.posX - this.f3.posX;
        const distanciaY3 = this.player.posY - this.f3.posY;
        const distanciaAlJugador3 = Math.sqrt(distanciaX3 * distanciaX3 + distanciaY3 * distanciaY3);
        
        if (distanciaAlJugador3 > 200) {
            if (this.dirF3 === 1) {
                // Mover el fantasma hacia arriba
                if ((this.f3.posY - 1) > 70 && !this.choqueFantasma(this.f3, 0, -1)) {
                    this.f3.setPosy(-1);
                } else {
                    this.f3.setPosy(1);
                    this.dirF3 = 0;
                    this.dirF3 = this.direccionAleatoria();
                }
            } else if (this.dirF3 === 2) {
                // Mover el fantasma hacia abajo
                if ((this.f3.posY + 1) < 830 && !this.choqueFantasma(this.f3, 0, 1)) {
                    this.f3.setPosy(1);
                } else {
                    this.f3.setPosy(-1);
                    this.dirF3 = 0;
                    this.dirF3 = this.direccionAleatoria();
                }
            } else if (this.dirF3 === 3) {
                // Mover el fantasma hacia la izquierda
                if ((this.f3.posX - 1) > 70 && !this.choqueFantasma(this.f3, -1, 0)) {
                    this.f3.setPosX(-1);
                    if(this.f3.getX()-30<50)
                    {
                        this.f3.posX=850;
                        this.f3.setPosX(1);
                    }
                } else {
                    this.f3.setPosX(1);
                    this.dirF3 = 0;
                    this.dirF3 = this.direccionAleatoria();
                }
            } else if (this.dirF3 === 4) {
                // Mover el fantasma hacia la derecha
                if ((this.f3.posX + 1) < 850 && !this.choqueFantasma(this.f3, 1, 0)) {
                    this.f3.setPosX(1);
                    if(this.f3.getX()+40>900)
                    {
                        this.f3.posX=50;
                        this.f3.setPosX(1);
                    }
                } else {
                    this.f3.setPosX(-1);
                    this.dirF3 = 0;
                    this.dirF3 = this.direccionAleatoria();
                }
            }
        } 
        if(distanciaAlJugador3<=200) {
            if (!this.choqueFantasma(this.f3, 0, 0)) {
                if (distanciaX3 > 0) {
                    this.dirF3 = 4; // Intentar mover hacia la derecha
                } else if (distanciaX3 < 0) {
                    this.dirF3 = 3; // Intentar mover hacia la izquierda
                } else if (distanciaY3 > 0) {
                    this.dirF3 = 2; // Intentar mover hacia abajo
                } else if (distanciaY3 < 0) {
                    this.dirF3 = 1; // Intentar mover hacia arriba
                }
            } else {
                this.dirF3 = 0;
                if (!this.choqueFantasma(this.f3, 1, 0)) {
                    this.dirF3 = 4; // Intentar mover hacia la derecha
                } else if (!this.choqueFantasma(this.f3, -1, 0)) {
                    this.dirF3 = 3; // Intentar mover hacia la izquierda
                } else if (!this.choqueFantasma(this.f3, 0, 1)) {
                    this.dirF3 = 2; // Intentar mover hacia abajo
                } else if (!this.choqueFantasma(this.f3, 0, -1)) {
                    this.dirF3 = 1; // Intentar mover hacia arriba
                }
            }
            if (this.dirF3 === 1) {
                // Mover el fantasma hacia arriba
                if ((this.f3.posY - 1) > 70 && !this.choqueFantasma(this.f3, 0, -1)) {
                    this.f3.setPosy(-1);
                } else {
                    this.f3.setPosy(1);
                    this.dirF3 = 0;
                    this.dirF3 = this.direccionAleatoria();
                }
            } else if (this.dirF3 === 2) {
                // Mover el fantasma hacia abajo
                if ((this.f3.posY + 1) < 830 && !this.choqueFantasma(this.f3, 0, 1)) {
                    this.f3.setPosy(1);
                } else {
                    this.f3.setPosy(-1);
                    this.dirF3 = 0;
                    this.dirF3 = this.direccionAleatoria();
                }
            } else if (this.dirF3 === 3) {
                // Mover el fantasma hacia la izquierda
                if ((this.f3.posX - 1) > 70 && !this.choqueFantasma(this.f3, -1, 0)) {
                    this.f3.setPosX(-1);
                    if(this.f3.getX()-30<50)
                    {
                        this.f3.posX=850;
                        this.f3.setPosX(1);
                    }
                } else {
                    this.f3.setPosX(1);
                    this.dirF3 = 0;
                    this.dirF3 = this.direccionAleatoria();
                }
            } else if (this.dirF3 === 4) {
                // Mover el fantasma hacia la derecha
                if ((this.f3.posX + 1) < 850 && !this.choqueFantasma(this.f3, 1, 0)) {
                    this.f3.setPosX(1);
                    if(this.f3.getX()+30>890)
                    {
                        this.f3.posX=50;
                        this.f3.setPosX(1);
                    }
                } else {
                    this.f3.setPosX(-1);
                    this.dirF3 = 0;
                    this.dirF3 = this.direccionAleatoria();
                }
            }
        }
    
    }
    
    
    
    agregarCirculos() {
        const radio = 10;
        const separacion = 20.;
        let cont=0
        for (let x = 70; x < 850; x += separacion + 2 * radio) {
            for (let y = 70; y < 830; y += separacion + 2 * radio) {
                const circulo = new Circulo(x + radio, y + radio, radio);
                if (!this.hayColisionConParedes(circulo)) {
                    cont++;
                    console.log(x,y);
                    this.comida.push(circulo);
                }
            }
        }
    }

    hayColisionConParedes(circulo) {
        // Verificar si el círculo colisiona con las paredes u otros obstáculos
        for (const objeto of this.mapas) {
            if (hayColisionCirculoRectangulo(circulo, objeto)) {
                return true;
            }
        }
        return false;
    }
    

    
    repintar(ctx){
        ctx.fillStyle="black";
        ctx.fillRect(50,50,850,850);
        for(var i=0;i<this.mapas.length;i++)
        {
            // console.log(this.mapas[i]);
            this.mapas[i].paint(ctx);
        }
        this.pintar(ctx);
    }
    pintar(ctx){
        
        for(var i=0;i<this.comida.length;i++)
        {
            this.comida[i].paint(ctx);
        }
        for(var i=0;i<this.mapas.length;i++)
        {
            // console.log(this.mapas[i]);
            this.mapas[i].paint(ctx);
        }
        ctx.drawImage(this.pacman, this.player.posX, this.player.posY,40,40);
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
       this.width=w;w
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

class Circulo {
    constructor(x, y, radio) {
        this.x = x;
        this.y = y;
        this.radio = radio;
    }

    paint(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
        ctx.fillStyle = "#EFF207"; // Cambia el color a tu elección
        ctx.fill();
        ctx.closePath();
    }
}




