leftwristx=0;
rightwristx=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    canvas=createCanvas(500,500);
    canvas.position(550,200);
    video.size(500,500);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotposes);
}
function modelloaded(){
    console.log("model has loaded");
}
function gotposes(results){
if(results.length>0){
   console.log(results);
   leftwristx=results[0].pose.leftWrist.x;
   rightwristx=results[0].pose.rightWrist.x;
   difference=floor(leftwristx-rightwristx);
   console.log(difference);
}
}
function draw(){
    background("#62a8de");
    textSize(difference);
    fill("#876bed");
    text("Aditi",50,400);
}