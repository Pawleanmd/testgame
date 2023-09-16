/**
 * Restart game when Game over state is reached
 * or flagpole is reached. Stop the music and reset lives.
 */
function spaceRestart() {
	
	if(keyCode == 32) {
		startGame();
		backgroundMusicPlaying = false;
		flagMusicPlaying = false;
		flagMusic.stop();
		lives = 3;
	} 
}