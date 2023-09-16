// Bullet variables declaration
var bullets_speed;
var bullets_directions;
var bullets_x;
var bullets_init_x;
var bullets_y;
var bullets_max_dist;

// Bullet variables initialisation
bullets_speed = 15;
bullets_directions = [];
bullets_x = [];
bullets_init_x = [];
bullets_y = [];
bullets_max_dist = 400;

/**
 * Fire bullets from the corresponding arrays that represent x, y positions and direction.
 * The bullets that reach the maximum distance are removed from the arrays.
 */
function fireBullets(x, y, speeds, init_x, max_dist) {

	// Initialise variables
	this.x = x;
	this.y = y;
	this.speeds = speeds;
	this.init_x = init_x;
	this.max_dist = max_dist;

	// Iterate over the arrays and move bullets. Remove the ones that reached max distance
	strokeWeight(0)
	for (var i = 0; i < this.y.length; i++) {
		this.x[i] += this.speeds[i];
		if (abs(this.x[i] - this.init_x[i]) > this.max_dist) {
			this.init_x.splice(i, 1);
			this.x.splice(i, 1);
			this.y.splice(i, 1);
			this.speeds.splice(i, 1);
		}

		// Draw bullets
		fill(255);
		ellipse(this.x[i], this.y[i] - 40, 10);
	}
}