// Character lives
var lives;

// Frame count
var customFrameCount;

// Base music variables
var backgroundMusicPlaying;
var flagMusicPlaying;

function preload() {
	// Preload sounds
	loadSounds();
};


function setup() {
	createCanvas(1024, 576);

	// Initialise base game variables. Toggle walk for walking animation and frame count for lightning.
	lives = 3;
	backgroundMusicPlaying = false;
	flagMusicPlaying = false;
	setInterval(toggleWalk, 150);
	customFrameCount = 0;

	startGame();
};

function draw() {
	//======================= DRAWING CODE =======================//

	// Reset parameters for side scrolling
	sideScrollingInitialise();
	
	// Fill the sky blue
	drawSky();

	// Draw some green ground
	drawGround();

	// Push and translate origin for side scrolling
	push();
	translate(-cameraPosX, 0);

	//======================= Mountains =======================//
	drawMountains();
	
	//======================= Trees =======================//
	drawTrees();

	//======================= Platforms =======================//
	drawPlatforms();

	//======================= Enemies =======================//
	drawEnemies();
	
	//======================= Clouds =======================//
	drawClouds()
 
	//======================= Canyons =======================//
	drawCanyons();

	//======================= Collectables =======================//
	drawCollectables();
		
	//======================= Game Character =======================//
	drawGameChar();
	
  	//======================= Flagpole =======================//
  	renderFlagpole();
  
	//======================= Fire Bullets =======================//
	fireBullets(bullets_x, bullets_y, bullets_directions, bullets_init_x, bullets_max_dist);

	//======================= Flowers =======================//
	draw_flowers();
	
	//======================= Darkness =======================//
	addDarkness();

	// End of side scrolling
	pop();

	// Update custom frame count for lightning frequency
	updateCusFrames();
	
	//======================= Draw Game Scores and Legend =======================//
	drawLegend()

  	//================= Game Over and/or Level Complete =================//
	if (gameOverCheck()){
		return
	};

	//======================= Character actions and interactions =======================//
	worldInteractionAndMovement();
}
