var platform, platformImage, platform2, platform2Image, platform3, platform3Image, platform4,platform4Image, backgroundImage
var player1, player2;
function preload(){
    platformImage=loadImage('PlatformGrass.png');
    platform2Image = loadImage('PlatformGrass.png');
    platform3Image = loadImage('PlatformGrass.png');
    platform4Image = loadImage('PlatformGrass.png');
    backgroundImage = loadImage('Background.jpg');
}

function setup(){
    createCanvas(1250,600);
    background(backgroundImage)
    platform = createSprite(600,600);
    platform.addImage(platformImage)
    platform.scale = 0.5;
    platform2 = createSprite(250,400);
    platform2.addImage(platformImage)
    platform2.scale = 0.5;
    platform3 = createSprite(950,400);
    platform3.addImage(platformImage)
    platform3.scale = 0.5;
    platform4 = createSprite(600,200);
    platform4.addImage(platformImage)
    platform4.scale = 0.5;
}

function draw(){
    drawSprites();
}   

