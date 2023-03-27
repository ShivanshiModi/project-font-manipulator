leftWristX= 0;
rightWristX=0;
diffrence=0;
function setup() {
    video= createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas= createCanvas(800,400);
    canvas.position(430,130);

    poseNet= ml5.poseNet(video,modeloaded);
    poseNet.on('pose',gotPoses);
  }

  function modeloaded(){
    console.log("the model is initialized and loaded");
}

function draw(){
    background("#f542ef");
    document.getElementById("note").innerHTML="Font size of the text will be = "+diffrence +"px";
    textSize(diffrence);
    fill("FFE787");
    text('Shivanshi',50,500);
}

function gotPoses(results,error){
    if(error){
       console.error(error);
    }
    if(results.length > 0){
       console.log(results);

       leftWristX=results[0].pose.leftwrist.x;
       rightWristX=results[0].pose.rightwrist.x;

       diffrence= floor( leftWristX - rightWristX );

       console.log("rightwrist_x - "+results[0].pose.rightwrist.x+"rightwrist_y - "+results[0].pose.rightwrist.y);
       console.log("leftwrist_x - "+results[0].pose.leftwrist.x+"leftwrist_y - "+results[0].pose.leftwrist.y);
       
    }
   }

