nose_x = 0;
nose_y = 0;
leftWrist_x = 0;
leftWrist_y = 0;
rightWrist_x = 0;
rightWrist_y = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(100,100)
    canvas = createCanvas(500,400);
    canvas.position(800,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

}
function modelLoaded(){
    console.log("Model Loaded");

}
function preload(){

}
function draw(){
    background("#DCDCDC");
    fill("#FE7C73");
    stroke("#FE7C73");
    square(nose_x, nose_y, difference);
    document.getElementById("square_size").innerHTML = "Width and Height of the Square will be: "+difference+"px"
    
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("Nose X = "+nose_x);
        console.log("Nose Y = "+nose_y);
        console.log("Left Wrist X = "+leftWrist_x);
        console.log("Left Wrist Y = "+leftWrist_y);
        console.log("Right Wrist X = "+rightWrist_x);
        console.log("Right Wrist Y = "+rightWrist_y);
        difference = floor(leftWrist_x - rightWrist_x);

    }
}
