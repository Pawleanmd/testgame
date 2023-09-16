// Sound variables declaration
var jumpSound;
var coinSound;
var drownSound;
var drownSoundPlayed;
var backgroundMusic;
var flagMusic;
var walkingSound;
var walkingPlatformSound;
var bulletSound;
var thunderSound;
var deathSound;
var ripSound;

// Default settings for drowning sound and background music
drownSoundPlayed = false;
backgroundMusicPlaying = false;

/**
 * Helper function used in preload. Preloads sounds to ensure that they're not loaded while the game runs.
 */
function loadSounds(){
    soundFormats('mp3', 'wav');
	jumpSound = loadSound('assets/jump.wav');  
	jumpSound.setVolume(0.1);
	coinSound = loadSound('assets/coin.wav');
	coinSound.setVolume(0.1);
	drownSound = loadSound('assets/drown1.wav');
	drownSound.setVolume(0.1);
	backgroundMusic = loadSound('assets/background.mp3');
	backgroundMusic.setVolume(0.2);
	flagMusic = loadSound('assets/flag.mp3');
	flagMusic.setVolume(0.2);
	walkingSound = loadSound('assets/walking.wav');
	walkingSound.setVolume(0.2);
	walkingPlatformSound = loadSound('assets/walking_platform.wav');
	walkingPlatformSound.setVolume(0.2);
	bulletSound = loadSound('assets/bullet.wav');
	bulletSound.setVolume(0.2);
	thunderSound = loadSound('assets/thunder.wav');
	thunderSound.setVolume(0.3);
	deathSound = loadSound('assets/death.wav');
	deathSound.setVolume(0.3);
	ripSound = loadSound('assets/rip.wav');
	ripSound.setVolume(0.3);
}