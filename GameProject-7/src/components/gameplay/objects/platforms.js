// Platforms array
var platforms;

/**
 * Create a platform object:
 * @param {x} - x coordinate
 * @param {y} - y coordinate
 * @param {length} - platform length in pixels
 * @param {movement_dir} - movement direction. Can be "horizontal" or "vertical"
 * @param {vert_speed} - vertical movement speed. None if doesn't move vertically
 * @param {horiz_speed} - horizontal movement speed. None if doesn't move horizontally
 */
function createPlatform(x, y, length, movement_dir, vert_speed, horiz_speed) {
	{
		// Initialise parameters
		this.x = x, 
		this.y = y, 
		this.length = length, 
		this.movement_dir = movement_dir,
		this.vert_speed = vert_speed,
		this.horiz_speed = horiz_speed,

		// Draw the platform
		this.draw = function() {
			fill(132, 81, 0);
			rect(this.x + (this.length*0.03), this.y+10, this.length-(this.length*0.06), 20, 4);
			fill(0, 155, 0);
			rect(this.x, this.y, this.length, 20, 6);
		},

		// Check contact with the game character. The game character must be above the plarform to trigger.
		this.checkContact = function(gc_x, gc_y) {
			if((gc_x > this.x && gc_x <= this.x + this.length) && (gc_y < this.y + 2 && gc_y > this.y - 10)) {
				return true;
			}
			else {
				return false;
			}

		},

		// Initialise movement range parameters (horizontal or vertical but not both)
		this.max_move_down = this.y + 10,
		this.max_move_up = this.y - 80,
		this.max_move_left = this.x - 10,
		this.max_move_right = this.x + 250,

		// Move platform according to the movement_dir parameter
		this.movePlatform = function(movement_dir) {
			if(movement_dir == 'vertical') {
				if(this.y >= this.max_move_down || this.y <= this.max_move_up) {
					this.vert_speed *= -1;
				} 
				this.y += this.vert_speed;
			}
			else if(movement_dir == 'horizontal') {
				if(this.x >= this.max_move_right || this.x <= this.max_move_left) {
					this.horiz_speed *= -1;
				}
				if(this.checkContact(gameChar_x, gameChar_y)) {
					gameChar_x += this.horiz_speed;
				}
				this.x += this.horiz_speed;
			}
		}
	}
}


/**
 * Initialise / Reinitialise platforms when the game is started / restarted
 */
function createPlatforms() {
	platforms = []
	platforms.push(new createPlatform(700, floorPos_y - 100, 200, 'none', NaN, NaN));
	platforms.push(new createPlatform(2100, floorPos_y - 100, 200, 'vertical', 2, NaN));
	platforms.push(new createPlatform(2890, floorPos_y - 100, 120, 'horizontal', NaN, 2));
}


/**
 * Draw all platforms in the platforms array and move them accordingly
 */
function drawPlatforms() {
	for (var i = 0; i < platforms.length; i++) {
		platforms[i].draw();
		platforms[i].movePlatform(platforms[i].movement_dir);
	}
}
