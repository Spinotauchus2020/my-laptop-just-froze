var canvas = new fabric.Canvas('myCanvas');
block_width=30;
block_height=30;
player_X=10;
player_Y=10;
player_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(player_object);
    });
}

function New_img(d){
    fabric.Image.fromURL(d,function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_width);
        block_image_object.scaleToHeight(block_height);
        block_image_object.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypressed = e.keyCode;
console.log (keypressed);
if (e.shiftKey==true && keypressed=='80'){
    console.log ("shift and p are pressed together");
    block_height = block_height + 10;
    block_width += 10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
}

if (e.shiftKey==true && keypressed=='77'){
    console.log ("shift and m are pressed together");
    block_height = block_height - 10;
    block_width -= 10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
}

if (keypressed=='67'){
    console.log("c is pressed SO RELEASE THE CLOUD");
    New_img("cloud.jpg");
}
if (keypressed=='68'){
    console.log("d is pressed SO RELEASE THE GRASS");
    New_img("dark_green.png");
}
if (keypressed=='71'){
    console.log("G is pressed SO RELEASE THE PRITHVI");
    New_img("ground.png");
}
if (keypressed=='76'){
    console.log("L is pressed SO RELEASE THE MUCUS");
    New_img("light_green.png");
}
if (keypressed=='82'){
    console.log("r is pressed SO RELEASE THE idk");
    New_img("roof.jpg");
}
if (keypressed=='84'){
    console.log("T is pressed SO RELEASE THE VIETNAM SOLDATS");
    New_img("trunk.jpg");
}
if (keypressed=='85'){
    console.log("U is pressed SO RELEASE THE ununique block");
    New_img("unique.png");
}
if (keypressed=='87'){
    console.log("W is pressed SO RELEASE THE lego wannabe");
    New_img("roof.jpg");
}    
if (keypressed=='89'){
    console.log("y is pressed SO RELEASE THE unique brick");
    New_img("yellow_wall.png");
}
if (keypressed=='38'){
    console.log("disney presents----Up");
    Up();
}
if (keypressed=='40'){
    console.log("disney presents----Down");
    Down();
}
if (keypressed=='37'){
    console.log("disney presents----left");
    Left();
}
if (keypressed=='39'){
    console.log("disney presents----right");
    Right();
}
}
function Up(){
    if(player_Y>=0){
        player_Y = player_Y - block_height;
        console.log("block height = "+ block_height);
        console.log("when up arrow key is pressed the player should ascend player x = "+player_X +", player Y = "+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}
function Down(){
    if(player_Y<=550){
        player_Y = player_Y + block_height;
        console.log("block height = "+ block_height);
        console.log("when up arrow key is pressed the player should ascend player x = "+player_X +", player Y = "+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}
function Left(){
    if(player_X>=0){
        player_X = player_X - block_width;
        console.log("block width = "+ block_width);
        console.log("when up arrow key is pressed the player should GO TO BRAZIL player x = "+player_X +", player Y = "+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}
function Right(){
    if(player_X<=950){
        player_X = player_X + block_width;
        console.log("block width = "+ block_width);
        console.log("when up arrow key is pressed the player should GO TO RUSSIA player x = "+player_X +", player Y = "+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}