//======================= INTERACTION BUTTONS CODE (Button pressed) =======================//
function keyPressed() {
	// Character walking left if <- or A button is pressed
	if((keyCode == 37 || keyCode == 65) && (!isPlummeting)) {
		isLeft = true;
		isRight = false;
	} 
	
	// Character walking right if -> or D button is pressed
	else if((keyCode == 39 || keyCode == 68) && (!isPlummeting)) {
		isRight = true;
		isLeft = false;
	} 
	
	// Character jumps when ^ or W button is pressed
	else if((keyCode == 38 || keyCode == 87) && (isFalling == false) && (!isPlummeting) && (!isDead)) {
		isJumping = true;
		init_y_jump = gameChar_y;
		jumpSound.play();
	}

	// Toggles background music if "m" button is pressed and flagpole is not reached
	else if(keyCode == 77 && !flagpole.isReached) {
		if(backgroundMusicPlaying == false) {
			backgroundMusic.play();
			backgroundMusicPlaying = true;
		}
		else {
			backgroundMusic.stop();
			backgroundMusicPlaying = false;
		}
	}

	// Fires bullets when the Super power is active and "k" button is pressed
	// NOTE! The bullets are technically being added to the array and then are fired when the fireBullets function is called!
	if(keyCode == 75 && counterSuper && !flagpole.isReached && !isPlummeting &&(isLeft || isRight)) {
		if(isLeft){
			bullets_directions.push(bullets_speed * -1);
			bullets_x.push(gameChar_x - 25);
		}
		else if(isRight) {
			bullets_directions.push(bullets_speed);
			bullets_x.push(gameChar_x + 25);
		}

		bullets_init_x.push(gameChar_x);
		bullets_y.push(gameChar_y - 5);
		bulletSound.play();
	}

	// Restart the game by pressing space when the game character is dead
	if(keyCode == 32 && isDead) {
		spaceRestart()
	} 
}




//======================= INTERACTION BUTTONS CODE (Button released) =======================//
function keyReleased() {

	// Character stops walking left when <- or A button is released
	if(keyCode == 37 || keyCode == 65) {
		isLeft = false;
	} 
	
	// Character stops walking right if -> or D button is released
	else if(keyCode == 39 || keyCode == 68) {
		isRight = false;
	} 

	// Character is not in a jumping position any longer when ^ or W button is released
	else if((keyCode == 38 || keyCode == 87) && (!isPlummeting)) {
		isJumping = false;
		isFalling = true;
	}
}