// Collectable variables
var collectables;
var collectableSize;
var collectableVertMovement;

// Base size and movement values
collectableSize = 35;
collectableVertMovement = 0.5;

/**
 * Draw a single collectable.
 * Deactivate super power counter when expires.
 */
function drawCollectable(t_collectable) {
	// Counter to control the duration of super power
	if(counterSuper == true) {
		timeNow = millis();
		timeDiff = timeNow - collectedTime;
		if(timeDiff >= superPowerDuration) {
			counterSuper = false;
		}
	}
	
	// Check if collectable is picked by the game character
	if(t_collectable.isFound == false) {
		strokeWeight(1);
		fill(255,215,0);
		ellipse(t_collectable.x_pos, t_collectable.y_pos,  t_collectable.size * 0.9);
		fill(255,223,0);
		ellipse(t_collectable.x_pos, t_collectable.y_pos,  t_collectable.size * 0.6);
		fill(181, 148, 16);
		textSize(12);
		text("✯", t_collectable.x_pos - 5, t_collectable.y_pos + 4);

		t_collectable.y_pos += t_collectable.vert_movement;
	}
	
	// Collectable floating effect
	if(t_collectable.y_pos > t_collectable.y_down || t_collectable.y_pos < t_collectable.y_up) {
		t_collectable.vert_movement *= -1;
	}

}

/**
 * Check if the collectable is found.
 * Increment the game score when the collectable is found.
 * Reset super power counter when the collectable is picked.
 * @param {t_collectable} - collectable object
 */
function checkCollectable(t_collectable) {
	if(counterSuper == true) {
		timeNow = millis();
		timeDiff = timeNow - collectedTime;

		if(timeDiff >= superPowerDuration) {
			counterSuper = false;
		}
	}
	
	// Check the distance between the game character and collectable
	if(dist(gameChar_x, gameChar_y - 5, t_collectable.x_pos, t_collectable.y_pos) < 40 && t_collectable.isFound == false) {
		counterSuper = true;
		t_collectable.isFound = true;
		collectedTime = millis();
		fill(255);

    	// incrementing `game_score` by one each time the character collects an item
		coinSound.play();
    	game_score += 1;
	}
}

/**
 * Creates a collectable object with the defined x, y coordinates and size.
 * Includes a the isFound flag and vertical movement parameters.
 * @param {x_pos} - x coordinate
 * @param {y_pos} - y_coordinate
 * @param {size} - radius
 * @param {isFound} - binary flag that indicates whether the collectable was found
 * @param {y_up} - upper boundary for vertical movement
 * @param {y_down} - lower boundary for vertival movement
 * @param {vert_movement} - vertical movement speed
 */
function createCollectable(x_pos, y_pos, size, isFound, y_up, y_down, vert_movement){
	this.x_pos = x_pos;
	this.y_pos = y_pos;
	this.size = size;
	this.isFound = isFound;
	this.y_up = y_up;
	this.y_down = y_down;
	this.vert_movement = vert_movement;
}

/**
 * Initialise / Reinitialise collectables when the game is started / restarted
 */
function initialiseCollectables(){
	collectables = [];
	collectables.push(new createCollectable(800, 300, collectableSize, false, 295, 305, collectableVertMovement));
	collectables.push(new createCollectable(1675, 250, collectableSize, false, 245, 255, collectableVertMovement));
	collectables.push(new createCollectable(2900, 150, collectableSize, false, 145, 155, collectableVertMovement));
	collectables.push(new createCollectable(3350, 150, collectableSize, false, 145, 155, collectableVertMovement));
}

/**
 * Draw all collectables from the collectables array
 */
function drawCollectables(){
	for(var i=0; i < collectables.length; i++) {
		if(!collectables[i].isFound) {
			drawCollectable(collectables[i]);		
		}
		checkCollectable(collectables[i]);
		}
}