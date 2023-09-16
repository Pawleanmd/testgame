// enemies variable
var enemies;

/**
 * Creates a GroundEnemy object:
 * @param {x} - initial x coordinate
 * @param {y} - y coordinate
 * @param {range} - walking range
 * @param {isRight} - binary flag to check if the enemy is facing right. If False facing left.
 * @param {isDrawn} - check whether enemy is drawn or not (dead)
 * @param {currentX} - current x coordinate
 * @param {inc} - movement speed
 */
function GroundEnemy(x, y, range) {

	// initialise parameters
	this.x = x;
	this.y = y;
	this.range = range;
	this.isRight = false;
	this.isDrawn = true;
	this.currentX = x;
	this.inc = 1;

	// Updates enemy position and changes direction when range limit is reached
	this.update = function() {
		
		this.currentX += this.inc;

		if(this.currentX >= this.x + this.range) {
			this.inc = -1;
			this.isRight = true;
		} else if(this.currentX < this.x) {
			this.inc = 1;
			this.isRight = false;
		}
	}

	// Draw the enemy (main function)
	this.appear = function() {
		for(let i = 0; i < bullets_x.length; i++) {

			// Check distance between each bullet and the character
			let d = dist(this.currentX, this.y, bullets_x[i], bullets_y[i])
			if(d < 50) {
				this.isDrawn = false;
				bullets_init_x.splice(i, 1);
				bullets_x.splice(i, 1);
				bullets_y.splice(i, 1);
				bullets_directions.splice(i, 1);
			}
		}
		// snowman's body
		noStroke();
		fill(255);
		ellipse(this.currentX, this.y - 45, 20);
		ellipse(this.currentX, this.y - 25, 30);
		ellipse(this.currentX, this.y, 40);
		
		// snowman's hat
		fill(65, 105, 225);
		rect(this.currentX - 8, this.y - 75, 15, 20);
		rect(this.currentX - 13, this.y - 55, 25, 3);
		fill(0);
		rect(this.currentX - 8, this.y - 60, 15, 4);
		
		if(this.isRight) this.draw_left();
		else this.draw_right();
	}

	// Draw the enemy is still alive
	this.draw = function() {
		if(this.isDrawn) {
			this.appear();
		}
		this.update();
	}

	// snowman walking right
	this.draw_right = function() {

		// snowman's right hand
		strokeWeight(2);
		stroke(72, 60, 50);
		line(this.currentX + 29, this.y - 20, this.currentX + 16, this.y - 27);
		line(this.currentX + 29, this.y - 20, this.currentX + 33, this.y - 10);
		line(this.currentX + 29, this.y - 20, this.currentX + 40, this.y - 20);

		// snowman's left hand
		strokeWeight(2);
		stroke(92, 64, 51);
		line(this.currentX - 8, this.y - 10, this.currentX, this.y - 30);
		line(this.currentX - 8, this.y - 10, this.currentX - 15, this.y);
		line(this.currentX - 8, this.y - 10, this.currentX - 4, this.y);

		// snowman's nose
		noStroke();
		fill(255, 69, 0);
		triangle(
			this.currentX + 7, this.y - 47, 
			this.currentX + 7, this.y - 42, 
			this.currentX + 20, this.y - 44);

		// snowman's eye
		fill(0);
		ellipse(this.currentX + 3, this.y - 49, 3);

		// snowman's buttons
		fill(65, 105, 225);
		ellipse(this.currentX + 13, this.y - 32, 4, 5);
		ellipse(this.currentX + 14, this.y - 22, 4, 5);
	}

	// snowman walking left
	this.draw_left = function() {

		// snowman's right hand
		strokeWeight(2);
		stroke(72, 60, 50);
		line(this.currentX - 29, this.y - 20, this.currentX - 16, this.y - 27);
		line(this.currentX - 29, this.y - 20, this.currentX - 33, this.y - 10);
		line(this.currentX - 29, this.y - 20, this.currentX - 40, this.y - 20);

		// snowman's left hand
		strokeWeight(2);
		stroke(92, 64, 51);
		line(this.currentX + 8, this.y - 10, this.currentX, this.y - 30);
		line(this.currentX + 8, this.y - 10, this.currentX + 15, this.y);
		line(this.currentX + 8, this.y - 10, this.currentX + 4, this.y);

		// snowman's nose
		noStroke();
		fill(255, 69, 0);
		triangle(
			this.currentX - 7, this.y - 47, 
			this.currentX - 7, this.y - 42, 
			this.currentX - 20, this.y - 44);

		// snowman's eye
		fill(0);
		ellipse(this.currentX - 3, this.y - 49, 3);

		// snowman's buttons
		fill(65,105,225);
		ellipse(this.currentX - 13, this.y - 32, 4, 5);
		ellipse(this.currentX - 14, this.y - 22, 4, 5);
	}

	// Check contact with the game character
	this.checkContact = function(gc_x, gc_y) {
		var d = dist(gc_x, gc_y, this.currentX, this.y);

		if(d < 20 && this.isDrawn) {
			lives -= 1
			if (lives < 1){
				if(!ripSound.isPlaying()) {
					ripSound.play();
				  }
			}
			else{
				if(!deathSound.isPlaying()) {
					deathSound.play();
				}
			}
			return true;
		}
		return false;
	}
}

/**
 * Creates an AirEnemy object:
 * @param {x} - initial x coordinate
 * @param {y} - y coordinate
 * @param {range} - walking range
 * @param {isFlying} - binary flag to check if the enemy is currenyly flying.
 * @param {isDrawn} - check whether enemy is drawn or not (dead)
 * @param {currentX} - current x coordinate
 * @param {inc} - movement speed
 */
function AirEnemy(x, y, range) {
	this.x = x;
	this.y = y;
	this.isFlying = false;
	this.currentX = x;
	this.inc = 4;
	this.isDrawn = true;

	// Draw the enemy (main function)
	this.appear = function(){
		for(let i = 0; i < bullets_x.length; i++) {

		// Check distance between each bullet and the character
		let d = dist(this.currentX+60, this.y+30, bullets_x[i], bullets_y[i]);
			if(d < 30) {
				this.isDrawn = false;
				bullets_init_x.splice(i, 1);
				bullets_x.splice(i, 1);
				bullets_y.splice(i, 1);
				bullets_directions.splice(i, 1);
			}
	}

		// bird's beek
		strokeWeight(1);
		stroke(0);
		fill(255,255,0);
		triangle(
			this.currentX + 39, this.y - 2, 
			this.currentX + 28, this.y - 2,
			this.currentX + 39, this.y - 10
			);
		triangle(
			this.currentX + 39, this.y - 2, 
			this.currentX + 30, this.y - 2,
			this.currentX + 39, this.y + 6
		);

		// bird's tail
		fill(0);
		triangle(
			this.currentX + 70, this.y - 3, 
			this.currentX + 75, this.y - 11,
			this.currentX + 78, this.y - 6
		);
		triangle(
			this.currentX + 67, this.y - 1, 
			this.currentX + 83, this.y - 4,
			this.currentX + 85, this.y + 3
		);
		
		triangle(
			this.currentX + 67, this.y, 
			this.currentX + 78, this.y + 4,
			this.currentX + 75, this.y + 9
		);

		// bird's body
		strokeWeight(1);
		stroke(0);
		fill(255, 0, 0);
		ellipse(this.currentX + 68, this.y - 17, 10, 10);
		ellipse(this.currentX + 60, this.y - 22, 9, 15);
		ellipse(this.currentX + 55, this.y - 2, 35, 40);

		noStroke();
		fill(254, 186, 79);
		beginShape();
			vertex(this.currentX + 55, this.y + 8);
			vertex(this.currentX + 62, this.y + 9);
			vertex(this.currentX + 67, this.y + 11);
			vertex(this.currentX + 62, this.y + 15);
			vertex(this.currentX + 55, this.y + 17);
			vertex(this.currentX + 48, this.y + 15);
			vertex(this.currentX + 42, this.y + 11);
			vertex(this.currentX + 46, this.y + 9);
		endShape();

		// bird's eye
		strokeWeight(1);
		stroke(0);
		fill(255);
		ellipse(this.currentX + 45, this.y - 7, 9, 11);
		fill(0);
		ellipse(this.currentX + 44, this.y - 6, 4, 4);
		triangle(
			this.currentX + 43, this.y - 12,
			this.currentX + 50, this.y - 20,
			this.currentX + 52, this.y - 18
			);
		fill(128, 0, 0);
		ellipse(this.currentX + 51, this.y + 1, 5, 5);
		ellipse(this.currentX + 58, this.y + 3, 5, 5);	
	}

	// Start flying when game character is within the range
	this.update = function() {
		var d = abs(gameChar_x - this.currentX);

		if(d < 600) {
			this.isFlying = true;
		} 
		
		if(this.isFlying) {
			this.currentX -= this.inc;
		}
	}

	// Draw the enemy
	this.draw = function() {
		if (this.isDrawn){
			this.appear()
		};

		this.update();

	}

	// Check contact with the game character
	this.checkContact = function(gc_x, gc_y) {
		var d = dist(gc_x, gc_y - 35, this.currentX + 47, this.y);

		if(d < 40 && this.isDrawn) {
			lives -= 1
			if (lives < 1){
				if(!ripSound.isPlaying()) {
					ripSound.play();
				  }
			}
			else{
				if(!deathSound.isPlaying()) {
					deathSound.play();
				}
			}
			return true;
		}
		return false;
	}
}

/**
 * Initialise / Reinitialise enemies when the game is started / restarted
 */
function initialiseEnemies(){
	enemies = [];
	enemies.push(new GroundEnemy(1150, floorPos_y - 10, 300));
	enemies.push(new GroundEnemy(1790, floorPos_y - 10, 330));
	enemies.push(new GroundEnemy(3330, floorPos_y - 10, 135));

	enemies.push(new AirEnemy(1220, floorPos_y - 152, 1000, gameChar_x, gameChar_y));
	enemies.push(new AirEnemy(2600, floorPos_y - 200, 1000, gameChar_x, gameChar_y));
	enemies.push(new AirEnemy(3400, floorPos_y - 152, 1000, gameChar_x, gameChar_y));
}


/**
 * Sraw all enemies from the enemies array
 */
function drawEnemies(){
	noStroke();
		for(var i = 0; i < enemies.length; i++) {
		enemies[i].draw();

		var isContact = enemies[i].checkContact(gameChar_x, gameChar_y);

		if(isContact) {
			if(lives > 0) {
				startGame();
				break;
			}
		}
	}
}