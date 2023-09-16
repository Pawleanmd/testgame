
/**
 * Game character interaction with the world.
 * This includes walking, jumping, falling, standing still, flagpole interaction and lives count.
 */
function worldInteractionAndMovement(){
    // Character walking left action
	if(isLeft && !isPlummeting && gameChar_x > 150) {
		gameChar_x -= 5;
	}

	// Character walking right action
	if(isRight && !isPlummeting) {
		gameChar_x += 5;
	}

	// Character jumping action
	if((isJumping == true) && (gameChar_y > init_y_jump - 200) && (!isFalling)) {
		gameChar_y -= 15;
		if((gameChar_y <= init_y_jump - 200) || (!isJumping)) {
			isFalling = true;
			isJumping = false;
		}
	}

	// Character falling
	if (gameChar_y < floorPos_y && !isJumping) {
		var p;
		for (var i = 0; i < platforms.length; i++){
			if(platforms[i].checkContact(gameChar_x, gameChar_y)) {
				gameChar_y = platforms[i].y - 2;
				isFalling = false;
				onPlatform = true;
				p = false;
				break;
			} 
			else {
				p = true;
				onPlatform = false;
				isFalling = true;
			}
		}
		// Character is falling to the floor unless directly above a platform.
		if(p) {
			gameChar_y += 5;
		}		
	}

	// Default - character is not falling
	else {
		isFalling = false;
	}

	// Call checkFlagpole when the game character is within range of the flagpole
	if(flagpole.isReached == false) {
		checkFlagpole();
	}

  	// Decrements the lives counter each time when the game character has fallen into the canyon
  	checkPlayerDie();
}