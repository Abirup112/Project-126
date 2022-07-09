song="";
theme_song="";
leftWristX="";
leftWristY="";
rightWristX="";
rightWristY="";
function preload(){
    song=loadSound("Ben10omniversethemesonginenglish.mp3");
    theme_song=loadSound("Ben 10 Omniverse - Hindi.mp3")
}
function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    console.log("leftWristX="+leftWristX+"leftWistY="+leftWristY);

    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
}
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
function draw(){
    image(video, 0, 0, 600, 500);
}