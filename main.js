noseX = 0;
noseY = 0;

mouthX = 0;
mouthY = 0;

function preload() {
    mustache = loadImage("https://i.postimg.cc/3JsbGz43/mustache.png")
    lipstick = loadImage("https://i.postimg.cc/dtbGnYjS/lipstick.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded () {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 70, 50);
    image(lipstick, mouthX, mouthY, 70, 50);
}

function take_snapshot() {
    save("myFilterImage.png");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        
        noseX = results[0].pose.nose.x-35;
        noseY = results[0].pose.nose.y;
        
        mouthX = results[0].pose.nose.x-35;
        mouthY = results[0].pose.nose.y+25;

        console.log("mustache x = " + results[0].pose.nose.x);
        console.log("mustache y = " + results[0].pose.nose.y);
    }
}