var backround;
var serpiente = 10;
var direcion = "derecha"
var Xinicio =0, Yinicio=250;

var serpienteX = []
var serpienteY = []

var diferencia = 10;

var Xfruta;
var Yfruta;

var imagenfruta;
var score = 0;

//var bk_song;


function preload() {
  //bk_song = loadSound('sound1.mp3');
  backround = loadImage("backround.jpg")
  imagenfruta = loadImage ("manzanita.png")
}

function setup() {
  canvas = createCanvas(1200,600);
  //bk_song.play();
  crearFruta();
  stroke(225);
  strokeWeight(10);
  fill("RED")
  frameRate(15)
  for (var i=0;i<serpiente;i++){
    serpienteX.push(Xinicio+i*diferencia);
    serpienteY.push(Yinicio)
  }
  
}

function draw() {
  background(0);
  image(backround,0,0,width,height);

  fill ("RED")
  textSize (50)
  stroke (10)
  text ("Puntuación: "+ score, 30,80)
  
  fill ("CYAN")
  textSize (30)
  stroke (1)
  text ("Hecho por PinguICE :)",890,580)

  stroke("LIME")
  for (var i=0;i<serpiente-1;i++){
    line(serpienteX[i],serpienteY[i],serpienteX[i+1], serpienteY[i+1])

  }
  actualizar_movimiento();
  comprobar_fruta();
  finDelJuego();
}    
  

  function actualizar_movimiento(){
      for(i=0;i<serpiente-1;i++){
        serpienteX[i]=serpienteX[i+1];
        serpienteY[i]=serpienteY[i+1];
      }
      switch(direcion){
        case "derecha":
          serpienteX[serpiente-1]=serpienteX[serpiente-2]+diferencia;
          serpienteY[serpiente-1]=serpienteY[serpiente-2];
          break;
          case "arriba":
            serpienteX[serpiente-1]=serpienteX[serpiente-2];
            serpienteY[serpiente-1]=serpienteY[serpiente-2]-diferencia;
            break;
            case "izquierda":
            serpienteX[serpiente-1]=serpienteX[serpiente-2]-diferencia;
            serpienteY[serpiente-1]=serpienteY[serpiente-2];
            break;
            case "abajo":
            serpienteX[serpiente-1]=serpienteX[serpiente-2];
            serpienteY[serpiente-1]=serpienteY[serpiente-2]+diferencia;
            break;
      }

      
  
  }
  
  function crearFruta(){
    Xfruta=floor(random(10,(width-100)/10))*10;
    Yfruta=floor(random(10,(height-100)/10))*10;
    image(imagenfruta,Xfruta,Yfruta,10,10)
    }


  function comprobar_fruta(){
    point(Xfruta,Yfruta);
    if (serpienteX[serpienteX.length-1]==Xfruta&&serpienteY[serpienteY.length-1]==Yfruta){
      serpienteX.unshift(serpienteX[0])
      serpienteY.unshift(serpienteY[0])
      serpiente++;
      crearFruta();
      score=score+1 
    }
  }
  function serpiente_collicion(){
    const cabezaSerpienteX=serpienteX[serpienteX.length-1]
    const cabezaSerpienteY=serpienteY[serpienteY.length-1]
    for (var i=0;i<serpienteX.length-1;i++){
      if (serpienteX[i]==cabezaSerpienteX&&serpienteY[i]==cabezaSerpienteY){
        return true;
        
      }
    }
  }

function finDelJuego (){
  if (serpienteX[serpienteX.length-1]>width||serpienteX[serpienteX.length-1]<0||serpienteY[serpienteY.length-1]>height||
    serpienteY[serpienteY.length-1]<0||serpiente_collicion()){
       noLoop()
       
       fill ("BLUE")
       textSize (100)
       stroke (40)
      text("Fin del juego",270,340) 
        
  }
}





function keyPressed(){
  
  switch(keyCode){
     case 37:
      if(direcion!=="derecha"){
        direcion="izquierda"

      }
      break;
      case 39:
        if(direcion!=="izquierda"){
          direcion="derecha"
  
        }
        break;
        case 40:
          if(direcion!=="arriba"){
            direcion="abajo"
    
          }
          break;
          case 38:
          if(direcion!=="abajo"){
            direcion="arriba"
    
          }
          break;
  }

  
  
}
