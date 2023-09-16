// Canyons array
var canyons;

/**
 * Draw a single canyon from the array of canyon objects
 * @param {t_canyon} - canyon obj
 */
function drawCanyon(t_canyon) {

	// Brown soil
	fill(139, 69, 19);
	noStroke();
	rect(t_canyon.x_pos, floorPos_y, t_canyon.width, height + 354);

	// Water area
	fill(0, 220, 255);
	strokeWeight(0);
	beginShape();
	vertex(t_canyon.x_pos, floorPos_y);
	vertex(t_canyon.x_pos + t_canyon.width * 0.18, floorPos_y + 64);
	vertex(t_canyon.x_pos + t_canyon.width * 0.25, floorPos_y + 108);
	vertex(t_canyon.x_pos + t_canyon.width * 0.35, floorPos_y + 128);
	vertex(t_canyon.x_pos + t_canyon.width * 0.65, floorPos_y + 122);
	vertex(t_canyon.x_pos + t_canyon.width * 0.83, floorPos_y + 80);
	vertex(t_canyon.x_pos + t_canyon.width * 0.88, floorPos_y + 48);
	vertex(t_canyon.x_pos + t_canyon.width, floorPos_y);
	endShape();

	// Fish in the canyon. Changes state when character falls into it.
	// Game character fell into the canyon.
	if(isPlummeting && gameChar_x >= t_canyon.x_pos && gameChar_x <= t_canyon.x_pos + t_canyon.width) {
		fill(255, 128, 0);
		ellipse(t_canyon.x_pos + t_canyon.width * 0.52, floorPos_y + 5, 20, 10);

		triangle(
			t_canyon.x_pos + t_canyon.width * 0.52 - 15, floorPos_y - 1,
			t_canyon.x_pos + t_canyon.width * 0.52 - 5, floorPos_y + 5,
			t_canyon.x_pos + t_canyon.width * 0.52 - 15, floorPos_y + 13
		);

		fill(255);
		triangle(
			t_canyon.x_pos + t_canyon.width * 0.52 - 2, floorPos_y,
			t_canyon.x_pos + t_canyon.width * 0.52 + 2, floorPos_y,
			t_canyon.x_pos + t_canyon.width * 0.52, floorPos_y + 10
		);

		strokeWeight(7);
		stroke(255);
		point(t_canyon.x_pos + t_canyon.width * 0.52 + 7, floorPos_y + 3);
		strokeWeight(2);
		stroke(0);
		point(t_canyon.x_pos + t_canyon.width * 0.52 + 7, floorPos_y + 3);
	} 
	
	// Game character is not in the canyon
	else {
		fill(255, 128, 0);
		ellipse(t_canyon.x_pos + t_canyon.width * 0.52, floorPos_y + 89, 20, 10);
		
		triangle(
			t_canyon.x_pos + t_canyon.width * 0.52 - 15, floorPos_y + 82,
			t_canyon.x_pos + t_canyon.width * 0.52 - 5, floorPos_y + 89,
			t_canyon.x_pos + t_canyon.width * 0.52 - 15, floorPos_y + 96
		);
			
		fill(255);
		triangle(
			t_canyon.x_pos + t_canyon.width * 0.52 - 2, floorPos_y + 84,
			t_canyon.x_pos + t_canyon.width * 0.52 + 2, floorPos_y + 84,
			t_canyon.x_pos + t_canyon.width * 0.52, floorPos_y + 94
		);
				
		strokeWeight(2);
		stroke(0);
		point(t_canyon.x_pos + t_canyon.width * 0.52 + 6, floorPos_y + 88);
	}
}

/**
 * Check if the game character fell into the canyon
 */
function checkCanyon(t_canyon) {

	// Check if character horizontal position is within canyon
	if(gameChar_x >= t_canyon.x_pos + 4 && 
    	gameChar_x <= t_canyon.x_pos + t_canyon.width-4 && 
    	gameChar_y >= floorPos_y) {
		
		// Check if character vertical position is below the floor (e.g. falling into the canyon)
		if(gameChar_y <= floorPos_y + 110) {
			isFalling = true;
			isPlummeting = true;
			// Calculate the slope between game char and the bottom of the canyon for correct falling direction
			var canyonBottom_x = t_canyon.x_pos + t_canyon.width / 2;
			var canyonBottom_y = floorPos_y - 100;
			drawnSlope = (canyonBottom_y - gameChar_y) / (t_canyon.canyonBottom_x - gameChar_x);

			// Check if character reached the bottom of the canyon
			if(gameChar_y > canyonBottom_y) {
				if(canyonBottom_x < gameChar_x) {
					gameChar_x -= (gameChar_x - canyonBottom_x) / 10;
				} 
				else {
					gameChar_x += (canyonBottom_x - gameChar_x) / 10;
				}
				if(!drownSoundPlayed) {
					drownSound.play();
					drownSoundPlayed = true;
				}
				gameChar_y += 5;
			}
		}
		// When character is falling into the canyon removes all movement animations
		else {
			isLeft = false;
			isRight = false;
		}
	}

	// Check if character above the ground and should be falling (not into the canyon!)
	if ((gameChar_x >= t_canyon.x_pos + 4 && 
    	gameChar_x <= t_canyon.x_pos - 4 + t_canyon.width && 
    	gameChar_y >= floorPos_y)) {
			isFalling = true;
	}
}

/**
 * Initialise / reinitialise canyons when the game is started / restarted
 */
function initialiseCanyons(){
	canyons = []
	canyons.push(new createCanyon(1000, 100))
	canyons.push(new createCanyon(1500, 60))
	canyons.push(new createCanyon(1600, 150))
	canyons.push(new createCanyon(2150, 100))
	canyons.push(new createCanyon(2800, 500))

}

/**
 * Create a canyon object
 * @param {x_pos} - x coordinate of the canyon
 * @param {width} - width of the canyon in pixels
 */
function createCanyon(x_pos, width){
	this.x_pos = x_pos,
	this.width = width
}

/**
 * Draw all canyons from the canyons array.
 * Checks each canyon if the game character fell into it.
 */
function drawCanyons(){
	for(var i=0; i < canyons.length; i++) {
		if (flagpole.x_pos >= canyons[i].x_pos && flagpole.x_pos <= canyons[i].x_pos + canyons[i].width) {
			canyons.splice(i,1);
			continue;
		}
		else {
			drawCanyon(canyons[i]);
			checkCanyon(canyons[i]);
		}
	}
}