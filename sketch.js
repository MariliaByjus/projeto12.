var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg =loadImage("path.png");
  //loadAnimation (carregarAnimação) de corrida para o menino
 boyImg =loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.png","jake5.png");
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
path = createSprite(200,200);
//adicione uma imagem para a pista
path.addImage(pathImg);
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.velocityY=1;
path.scale=1;

//crie um sprite de menino
boy = createSprite(100,200,20,20);
//adicione uma animação de corrida para ele
boy.addAnimation("corrida",boyImg);
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible = false;
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
 
}
