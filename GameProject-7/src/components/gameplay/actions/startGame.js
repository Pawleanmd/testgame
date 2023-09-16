// Game character variables
var gameChar_x;
var gameChar_y;

// Floor base position
var floorPos_y;

// Game character state variables
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var isJumping;
var isDead;

// Side scrolling vars
var cameraPosX;

// Super powers vars
var counterSuper;
var superPowerDuration;

// Game score and platform
var game_score;
var flagpole;

// Game character on a platform check
var onPlatform;


/**
 * Set up environment and game character states and parameters to start the game.
 * *Floor
 * *Camera
 * *Game character
 * *Collectables
 * *Canyons
 * *Platforms
 * *Trees
 * *Clouds
 * *Mountains
 * *Super powers
 * *Score counter
 * *Flagpole
 * *Flowers
 * *Enemies
 */
function startGame() {

	// Ground
	floorPos_y = (height * 3) / 4;

	// Camera position
	cameraPosX = 0;

  	// Initialise game character position
	gameChar_x = width / 2;
	gameChar_y = floorPos_y;

	// Initialise position variables
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
	isJumping = false;
	onPlatform = false;
	drownSoundPlayed = false;
	isDead = false;

	// Collectables
	initialiseCollectables();

	// Canyons
	initialiseCanyons();

	// Platforms
	createPlatforms();

	// Trees
	initialiseTrees();

	// Clouds
	initialiseClouds();

	// Mountains
	initialiseMountains();

	// Super power counter and duration
	counterSuper = false;
	superPowerDuration = 3500;	

	// Game score counter
	game_score = 0;

	// Flagpole
	flagpole = {isReached: false, x_pos: 3500};
  	
	// Flowers
	initialiseFlowers();

	// Enemies
	initialiseEnemies();
}
