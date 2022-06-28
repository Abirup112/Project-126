song="";
theme_song="";
function preload(){
    song=loadSound("Ben10omniversethemesonginenglish.mp3");
    theme_song=loadSound("Ben 10 Omniverse - Hindi.mp3")
}
function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(0, 0, 600, 500);
}