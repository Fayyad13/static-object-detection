img = "";
status = "";

function preload()
{
    img = loadImage("dog_cat.jpg")
}

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}

function draw()
{
    image(img, 0, 0, 480, 380);
    fill("red");
    text("Dog", 45, 75);
    noFill();
    stroke("#00FF00");
    rect(30, 60, 450, 350);
    
    fill("red");
    text("Cat", 320, 120);
    noFill();
    stroke("#0000FF");
    rect(225, 75, 270, 320);
}