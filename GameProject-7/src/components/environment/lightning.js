/**
 *	Periodically draw lightning bolts and play thunder sounds when the level is completed.
 */
function drawLightning() {

	fill(180, 180, 0);

	if(customFrameCount < 10) {
		// Play thunder sound if it is not playing
		if(!thunderSound.isPlaying()) {
			thunderSound.play();
		}

		// Draw lightning bolt
		for (var i = 0; i < 4; i++) {
			beginShape();
			vertex(100 + 250 * i, 0);
			vertex(70 + 250 * i, 100);
			vertex(100 + 250 * i, 100);
			vertex(70 + 250 * i, 200);
			vertex(140 + 250 * i, 80);
			vertex(115 + 250 * i, 80);
			vertex(145 + 250 * i, 0);
			vertex(100 + 250 * i, 0);
			endShape();
		}
	}
}

/**
 *	Update custom frame count that is used for lightning and thunder frequency
 */
function updateCusFrames(){
	if(customFrameCount >= 200){
		customFrameCount = 0;
	  }
	  customFrameCount++;
}