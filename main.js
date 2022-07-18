song="";
theme_song="";
leftWristX="";
leftWristY="";
rightWristX="";
rightWristY="";
scoreLeftWrist=0;
scoreRightWrist=0;
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
    scoreLeftWrist=results[0].pose.keypoints[9].score;

    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
}
}
function play(){
    theme_song.play();
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
function draw(){
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");
if(scoreLeftWrist>0.2){
    circle(leftWristX, leftWristY, 20);
    song.stop();
    if(theme_song=false){
        theme_song.play();
    }
}
if(scoreRightWrist>0.2){
    circle(rightWristX, rightWristY, 20);
    theme_song.stop();
    if(song=false){
        song.play2();
        
    }
}
    
}
function stop(){
    song.stop();
}
function play(){
    theme_song.play();
}
function play2(){
    song.play();
}