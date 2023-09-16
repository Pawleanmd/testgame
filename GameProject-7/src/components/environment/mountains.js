// Flower variables declarations
var numMountains;
var mountains;
var initMountains_x;

// The default number of mounts drawn
numMountains = 20;

/**
 *	Draw all mountain objects in the mountains array
 */
function drawMountains() {
		for (var i = 0; i < mountains.length; i++) {

			// Mountain rock (big brown triangles)
			fill(184, 134, 11);
			triangle(
				mountains[i].x_pos, floorPos_y,
				mountains[i].x_pos + mountains[i].width, floorPos_y,
				mountains[i].x_pos + mountains[i].width / 2, 420 - mountains[i].width
			);
			triangle(
				mountains[i].x_pos - 60, floorPos_y,
				mountains[i].x_pos - 60 + mountains[i].width * 0.8, floorPos_y,
				mountains[i].x_pos - 60 + (mountains[i].width * 0.8) / 2, 460 - mountains[i].width
			);
			triangle(
				mountains[i].x_pos + 100, floorPos_y,
				mountains[i].x_pos + 100 + mountains[i].width * 0.7, floorPos_y,
				mountains[i].x_pos + 100 + (mountains[i].width * 0.7) / 2, 480 - mountains[i].width
			);
	
			// Snowy top (e.g. white triangles)
			fill(255);
		
			// calculate the slope of the first mountain for snowy peaks using the slope formula
			mountain1_slope = (420 - mountains[i].width - floorPos_y) / (mountains[i].x_pos + mountains[i].width / 2 - mountains[i].x_pos);

			triangle(
				mountains[i].x_pos + mountains[i].width * 0.3, floorPos_y + mountains[i].width * 0.3 * mountain1_slope,
				mountains[i].x_pos + mountains[i].width * 0.7, floorPos_y + mountains[i].width * 0.3 * mountain1_slope,
				mountains[i].x_pos + mountains[i].width / 2, 420 - mountains[i].width
			);
		
			// calculate the slope of the second mountain for snowy peaks
			mountain2_slope = (460 - mountains[i].width - floorPos_y) / (mountains[i].x_pos - 60 + (mountains[i].width * 0.8) / 2 - (mountains[i].x_pos - 60));
		
			triangle(
				mountains[i].x_pos - 60 + mountains[i].width * 0.8 * 0.3, floorPos_y + mountains[i].width * 0.3 * 0.8 * mountain2_slope,
				mountains[i].x_pos - 60 + mountains[i].width * 0.8 * 0.7, floorPos_y + mountains[i].width * 0.3 * 0.8 * mountain2_slope,
				mountains[i].x_pos - 60 + (mountains[i].width * 0.8) / 2, 460 - mountains[i].width
			);
		
			// calculate the slope of the third mountain for snowy peaks
			mountain3_slope = (480 - mountains[i].width - floorPos_y) / (mountains[i].x_pos + 100 + (mountains[i].width * 0.7) / 2 - (mountains[i].x_pos + 100));
			
			triangle(
				mountains[i].x_pos + 100 + mountains[i].width * 0.7 * 0.3, floorPos_y + mountains[i].width * 0.3 * 0.7 * mountain3_slope,
				mountains[i].x_pos + 100 + mountains[i].width * 0.7 * 0.7, floorPos_y + mountains[i].width * 0.3 * 0.7 * mountain3_slope,
				mountains[i].x_pos + 100 + (mountains[i].width * 0.7) / 2, 480 - mountains[i].width
			);
		}
	}

/**
 *	Initialise / Reinitialise mountain ranges when the game is restarted
 */
function initialiseMountains(){
	initMountains_x = 100;
	mountains = [];
	for (var i = 0; i < numMountains; i++) {
		mountains.push({
      		x_pos: initMountains_x, 
			width: random(150, 300)
		});
		initMountains_x += random(500, 700);
	};
}