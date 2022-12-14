function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump = loadSound("jump.wav");
	mario_coins = loadSound("coin.wav");
	game_over = loadSound("gameover.wav");
	mario_die = loadSound("mariodie.wav");
	mario_kick = loadSound("kick.wav");
   
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video = createCapture(VIDEO);
  video.size(800 , 400);
  video.parent('game_console');

  poseNet = ml5.poseNet(video , modelLoaded);
  poseNet.on("pose", gotPoses);
}

function draw() {
	game()
}

function modelLoaded(){
	console.log("model loaded")
	}
	
	function gotPoses(results){
	  if(results.length > 0){
		console.log(results);
		nosex = results[0].pose.nose.x;
		nosey = results[0].pose.nose.y;
	  }}





