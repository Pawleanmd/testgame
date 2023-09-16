// Flower variables declarations
var flowers;
var flowerAngle;
var flowerFluct;
var flowerDir;
var flowersMaxHeight;
var numFlowers;

// Initialize base flower parameters
flowerAngle = degreesToRadians(45);
flowerFluct = 0;
flowerDir = 0.5;
flowersMaxHeight = [];
numFlowers = 100;


// This function is an adaptation from the debug challenge in Week 13
/**
 * Draw a single flower with randomised colors for petals and center.
 */
function draw_flower(_flower) {
	noFill();
	strokeWeight(2);
	stroke(255,200,50);

	// Stem
	beginShape();
    curveVertex(_flower.base_x + 200 + flowerFluct, _flower.base_y + 100);
    curveVertex(_flower.base_x, _flower.base_y);
	curveVertex(_flower.base_x+ flowerFluct, _flower.base_y - _flower.stem_h);
	curveVertex(_flower.base_x - 200+ flowerFluct, _flower.base_y-20);
	endShape();
	
	// Petals
	noStroke();
	fill(_flower.col);
	ellipse(_flower.base_x + 12 + flowerFluct, _flower.base_y - _flower.stem_h + (flowerFluct * 0.5), 20, 15); // right
	ellipse(_flower.base_x - 12 + flowerFluct, _flower.base_y - _flower.stem_h + (flowerFluct * 0.5), 20, 15); // left
	ellipse(_flower.base_x + flowerFluct, _flower.base_y + 12 - _flower.stem_h + (flowerFluct * 0.5), 15, 20); // bottom
	ellipse(_flower.base_x + flowerFluct, _flower.base_y - 12 - _flower.stem_h + (flowerFluct * 0.5), 15, 20); // top
    
	// flip the colour
	new_color= color(
    blue(_flower.col),
    red(_flower.col),
    green(_flower.col)
    );
    
	// Center
	fill(new_color);
	ellipse(_flower.base_x + flowerFluct, _flower.base_y - _flower.stem_h + (flowerFluct * 0.5), 10, 10); 
}

/**
 * Draw all flowers in the flowers array.
 */
function draw_flowers() {

	for(var i = 0; i < flowers.length; i++) {
		toDraw = true;
		for (var j = 0; j < canyons.length; j++) {
			if(flowers[i].base_x > canyons[j].x_pos - 20 && flowers[i].base_x < canyons[j].x_pos + canyons[j].width + 20) {
				toDraw = false;
			}
		}
		if(toDraw) {
			draw_flower(flowers[i]);
		}
	}

	if (flowerFluct == 5 || flowerFluct == -5) {
		flowerDir *= -1;
		flowerFluct += flowerDir;
	}
	else {
		flowerFluct += flowerDir;
	}
}

/**
 * Increase the height of flowers gradually when the flagpole is reached and it is raining
 */
function growFlowers() {
	if(flagpole.isReached && flowersMaxHeight[0] - flowers[0].stem_h > 0) {
		for (var i = 0; i < flowers.length; i++) {
			flowers[i].stem_h += 0.5;
		}
	}
}

// Function adjusted from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-33.php
/**
 * Convert degrees to radians for curve
 */
function degreesToRadians(degrees)
{
  return degrees * (Math.PI/180);
}

/**
 *	Initialise flowers randomly when the game starts/restarts
 */
function initialiseFlowers(){
	flowers = [];
	for(var i = 0; i < numFlowers; i++) {
		flowers.push({
			  base_x: i * 100, 
			  base_y: floorPos_y + 150, 
			  stem_h: random(40, 100), 
			  col: color(random(0,255), random(0,255), random(0,255))
		  });
	}
}
