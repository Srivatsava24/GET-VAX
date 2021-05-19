var PLAY = 1;
var END = 0;
var gameState = PLAY;

var namebackground;
var topnamee;
var gameoverr;
var rescue;
var cov1,cov2, cov3, cov4;
var patheart, heart;
var newplayer;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7, obstacle8, obstacle9, obstacle10, obstacle11, obstacle12,obstacle13;
lives = 5;


function preload(){
  newbackground = loadImage("gamebackground.png");
  newplayer = loadAnimation("patient1.png", "patient2.png", "patient3.png", "patient4.png", "patient5.png", "patient6.png", "patient7.png", "patient8.png")
  newwall = loadImage("wood1.jpg")
  newwall1 = loadImage("wood2.png")
  rescue = loadImage("docvax.jpg")
  cov1 = loadImage("covid1.png")
  cov2 = loadImage("covid2.png")
  cov3 = loadImage("covid3.png")
  cov4 = loadImage("covid4.png")
  heart = loadImage("life.jpg")
  gameOver = loadImage("gameOver.jpg")
  topName = loadImage("topImage.jpg")
  touchSound = loadSound("touch.mp3")



}
function setup() {
  createCanvas(1400, 700);

  player = createSprite(130,600,50,40)
  player.addAnimation("Patient", newplayer)
  player.scale = 0.13


  wall1 = createSprite(83,547,20,300);
  wall1.addImage(newwall)
  wall1.scale = 1.15

  wall2 = createSprite(200,630,300,20)
  wall2.addImage(newwall1)
  wall2.scale = 1.1

  wall3 = createSprite(420,630,300,20)
  wall3.addImage(newwall1)
  wall3.scale = 1.1

  wall4 = createSprite(640,630,300,20)
  wall4.addImage(newwall1)
  wall4.scale = 1.1


  wall5 = createSprite(860,630,300,20)
  wall5.addImage(newwall1)
  wall5.scale = 1.1

  wall6 = createSprite(1080,630,300,20)
  wall6.addImage(newwall1)
  wall6.scale = 1.1

  wall7 = createSprite(1220,630,10,20)
  wall7.addImage(newwall1)
  wall7.scale = 1.1



  wall8 = createSprite(1330,548,20,300);
  wall8.addImage(newwall)
  wall8.scale = 1.15

  wall9 = createSprite(200,465,300,20)
  wall9.addImage(newwall1)
  wall9.scale = 1.1

  wall10 = createSprite(420,465,300,20)
  wall10.addImage(newwall1)
  wall10.scale = 1.1

  wall11 = createSprite(640,465,300,20)
  wall11.addImage(newwall1)
  wall11.scale = 1.1

  wall12 = createSprite(860,465,300,20)
  wall12.addImage(newwall1)
  wall12.scale = 1.1



  wall13 = createSprite(976,409,20,0.1);
  wall13.addImage(newwall)
  wall13.scale = 0.83

  wall14 = createSprite(200,353,300,20)
  wall14.addImage(newwall1)
  wall14.scale = 1.1

  wall15 = createSprite(420,353,300,20)
  wall15.addImage(newwall1)
  wall15.scale = 1.1

  wall16 = createSprite(640,353,300,20)
  wall16.addImage(newwall1)
  wall16.scale = 1.1

  wall16a = createSprite(860,353,300,20)
  wall16a.addImage(newwall1)
  wall16a.scale = 1.1



  wall17 = createSprite(83,268,20,300);
  wall17.addImage(newwall)
  wall17.scale = 1.17

/////Upper walls


  rescueBox = createSprite(200,125,300,20)
  rescueBox.addImage(rescue)
  rescueBox.scale = 0.295

  topName1 = createSprite(200,34,500,20)
  topName1.addImage(topName)
  topName1.scale = 0.32

  wall18 = createSprite(420,184,300,20)
  wall18.addImage(newwall1)
  wall18.scale = 1.1

  wall19 = createSprite(640,184,300,20)
  wall19.addImage(newwall1)
  wall19.scale = 1.1

  wall20 = createSprite(860,184,300,20)
  wall20.addImage(newwall1)
  wall20.scale = 1.1

  wall21 = createSprite(1080,184,300,20)
  wall21.addImage(newwall1)
  wall21.scale = 1.1

  wall22 = createSprite(1220,184,10,20)
  wall22.addImage(newwall1)
  wall22.scale = 1.1



  wall23 = createSprite(1330,420,20,300);
  wall23.addImage(newwall)
  wall23.scale = 1.15

  wall24 = createSprite(1330,266,20,300);
  wall24.addImage(newwall)
  wall24.scale = 1.15


  obstacle1 = createSprite(270,504,30,30);
  obstacle1.addImage(cov1)
  obstacle1.scale = 0.45
  obstacle1.velocityY = 6.5;

  obstacle2 = createSprite(510,594,30,30);
  obstacle2.addImage(cov2)
  obstacle2.scale = 0.43
  obstacle2.velocityY = 6.5;

  obstacle3 = createSprite(710,504,30,30);
  obstacle3.addImage(cov2)
  obstacle3.scale = 0.45
  obstacle3.velocityY = 6.5;

  obstacle4 = createSprite(950,594,30,30);
  obstacle4.addImage(cov1)
  obstacle4.scale = 0.45
  obstacle4.velocityY = 6.5;


  obstacle6 = createSprite(310,317,30,30);
  obstacle6.addImage(cov2)
  obstacle6.scale = 0.45
  obstacle6.velocityY = 6.5;

  obstacle7 = createSprite(527,216,30,30);
  obstacle7.addImage(cov1)
  obstacle7.scale = 0.45
  obstacle7.velocityY = 6.5;

  obstacle8 = createSprite(740,316,30,30);
  obstacle8.addImage(cov2)
  obstacle8.scale = 0.45
  obstacle8.velocityY = 6.5;

  obstacle9 = createSprite(950,217,30,30);
  obstacle9.addImage(cov1)
  obstacle9.scale = 0.45
  obstacle9.velocityY = 6.5;

  obstacle10 = createSprite(1295,350,30,30);
  obstacle10.addImage(cov3)
  obstacle10.scale = 0.47
  obstacle10.velocityX = 9;

  obstacle5 = createSprite(1010,474,30,30);
  obstacle5.addImage(cov4)
  obstacle5.scale = 0.45
  obstacle5.velocityX = 9;



  heart1 = createSprite(455,85,20,20);
  heart1.addImage(heart);
  heart1.scale = 0.11;

  heart2 = createSprite(530,85,20,20);
  heart2.addImage(heart);
  heart2.scale = 0.11;

  heart3 = createSprite(605,85,20,20);
  heart3.addImage(heart);
  heart3.scale = 0.11;

  heart4 = createSprite(680,85,20,20);
  heart4.addImage(heart);
  heart4.scale = 0.11;

  heart5 = createSprite(755,85,20,20);
  heart5.addImage(heart);
  heart5.scale = 0.11;


  gameOver1 = createSprite(680,330,100,100);
  gameOver1.addImage(gameOver);
  gameOver1.scale = 1



  player.setCollider("rectangle",0,0,1,player.height);
  //player.debug = true

  
}

function draw() {
  background(newbackground)

  obstacle1.bounceOff(wall2);
  obstacle1.bounceOff(wall9)

  obstacle2.bounceOff(wall3);
  obstacle2.bounceOff(wall10)

  obstacle3.bounceOff(wall4);
  obstacle3.bounceOff(wall11)

  obstacle4.bounceOff(wall5);
  obstacle4.bounceOff(wall12)

  obstacle5.bounceOff(wall13);
  obstacle5.bounceOff(wall23)

  obstacle6.bounceOff(wall14);
  obstacle6.bounceOff(wall18)

  obstacle7.bounceOff(wall15);
  obstacle7.bounceOff(wall19)

  obstacle8.bounceOff(wall16);
  obstacle8.bounceOff(wall20)

  obstacle9.bounceOff(wall16a);
  obstacle9.bounceOff(wall20)

  obstacle10.bounceOff(wall13);
  obstacle10.bounceOff(wall23)

  player.collide(wall1);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(wall5);
  player.collide(wall6);
  player.collide(wall7);
  player.collide(wall8);
  player.collide(wall9);
  player.collide(wall10);

  player.collide(wall11);
  player.collide(wall12);
  player.collide(wall13);
  player.collide(wall14);
  player.collide(wall15);
  player.collide(wall16);
  player.collide(wall16a);
  player.collide(wall17);
  player.collide(wall18);
  player.collide(wall19);
  player.collide(wall20);

  player.collide(wall21);
  player.collide(wall22);
  player.collide(wall23);


  if (gameState===PLAY){
    player.visible = true;

    wall1.visible = true;
    wall2.visible = true;
    wall3.visible = true;
    wall4.visible = true;
    wall5.visible = true;
    wall6.visible = true;
    wall7.visible = true;
    wall8.visible = true;
    wall9.visible = true;
    wall10.visible = true;

    wall11.visible = true;
    wall12.visible = true;
    wall13.visible = true;
    wall14.visible = true;
    wall15.visible = true;
    wall16.visible = true;
    wall16a.visible = true;
    wall17.visible = true;
    wall18.visible = true;
    wall19.visible = true;
    wall20.visible = true;

    wall21.visible = true;
    wall22.visible = true;
    wall23.visible = true;
    wall24.visible = true;

    rescueBox.visible = true;

    heart1.visible = true;
    heart2.visible = true;
    heart3.visible = true;
    heart4.visible = true;
    heart5.visible = true;

    obstacle1.visible = true;
    obstacle2.visible = true;
    obstacle3.visible = true;
    obstacle4.visible = true;
    obstacle5.visible = true;
    obstacle6.visible = true;
    obstacle7.visible = true;
    obstacle8.visible = true;
    obstacle9.visible = true;
    obstacle10.visible = true;

    gameOver1.visible = false;
   

    if(keyDown("right")){
      player.x = player.x + 8;
    }
    if(keyDown("left")){
      player.x = player.x - 8;
    }
    if(keyDown("up")){
      player.y = player.y - 8;
    }
    if(keyDown("down")){
      player.y = player.y + 8;
    }




    if(player.isTouching(obstacle1)||player.isTouching(obstacle2)||player.isTouching(obstacle3)||player.isTouching(obstacle4)||
  player.isTouching(obstacle5)||player.isTouching(obstacle6)||player.isTouching(obstacle7)||player.isTouching(obstacle8)||player.isTouching(obstacle9)||
  player.isTouching(obstacle10)){
    player.x = 140;
    player.y = 600;
    lives = lives - 1;
    touchSound.play();
  }

  if(player.isTouching(rescueBox)){
    gameState = END;
  }

    if(lives === 5){
      heart1.visible = true;
      heart2.visible = true;
      heart3.visible = true;
      heart4.visible = true;
      heart5.visible = true;
    }else if(lives === 4){
      heart1.visible = true;
      heart2.visible = true;
      heart3.visible = true;
      heart4.visible = true;
      heart5.visible = false;
    }else if(lives === 3){
        heart1.visible = true;
        heart2.visible = true;
        heart3.visible = true;
        heart4.visible = false;
        heart5.visible = false;
      }else if(lives === 2){
        heart1.visible = true;
        heart2.visible = true;
        heart3.visible = false;
        heart4.visible = false;
        heart5.visible = false;
      }else if(lives === 1){
        heart1.visible = true;
        heart2.visible = false;
        heart3.visible = false;
        heart4.visible = false;
        heart5.visible = false;
      }else if(lives === 0){
        heart1.visible = false;
        heart2.visible = false;
        heart3.visible = false;
        heart4.visible = false;
        heart5.visible = false;
        gameState = END;
      } 
      
      }else if(gameState === END) {
        gameOver1.visible = true;
        
        player.visible = false;

    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;

    wall11.visible = false;
    wall12.visible = false;
    wall13.visible = false;
    wall14.visible = false;
    wall15.visible = false;
    wall16.visible = false;
    wall16a.visible = false;
    wall17.visible = false;
    wall18.visible = false;
    wall19.visible = false;
    wall20.visible = false;

    wall21.visible = false;
    wall22.visible = false;
    wall23.visible = false;
    wall24.visible = false;

    rescueBox.visible = false;

    heart1.visible = false;
    heart2.visible = false;
    heart3.visible = false;
    heart4.visible = false;
    heart5.visible = false;

    obstacle1.visible = false;
    obstacle2.visible = false;
    obstacle3.visible = false;
    obstacle4.visible = false;
    obstacle5.visible = false;
    obstacle6.visible = false;
    obstacle7.visible = false;
    obstacle8.visible = false;
    obstacle9.visible = false;
    obstacle10.visible = false;




    if(mousePressedOver(gameOver1)) {
      reset();
    }
      }
  

  drawSprites();
}

function reset()
{
  
  player.destroy()
  gameOver1.destroy()
    wall1.destroy()
    wall2.destroy();
    wall3.destroy();
    wall4.destroy();
    wall5.destroy();
    wall6.destroy();
    wall7.destroy();
    wall8.destroy();
    wall9.destroy();
    wall10.destroy();

    wall11.destroy();
    wall12.destroy();
    wall13.destroy();
    wall14.destroy();
    wall15.destroy();
    wall16.destroy();
    wall16a.destroy();
    wall17.destroy();
    wall18.destroy();
    wall19.destroy();
    wall20.destroy();

    wall21.destroy();
    wall22.destroy();
    wall23.destroy();
    wall24.destroy();

    rescueBox.destroy();

    heart1.destroy();
    heart2.destroy();
    heart3.destroy();
    heart4.destroy();
    heart5.destroy();

    obstacle1.destroy();
    obstacle2.destroy();
    obstacle3.destroy();
    obstacle4.destroy();
    obstacle5.destroy();
    obstacle6.destroy();
    obstacle7.destroy();
    obstacle8.destroy();
    obstacle9.destroy();
    obstacle10.destroy();
    gameState = PLAY;
    gameOver1.visible = false;
    
    lives=5
}