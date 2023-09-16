//Clouds position variables
var numClouds;
var initCloud_x;
var clouds;

// Clouds movement variables
var m_clouds;
var b_clouds;
var clouds_fill;

// Number of clouds
numClouds = 150;

/**
 * Draw all clouds from the clouds array.
 * The function uses dynamic fill for the clouds which gets darker the 
 * closer the game character is to the flagpole simulating rainy weather.
 * The clouds move following a sine wave.
 */
function drawClouds() {
	
	// cloud fill is calculated using a linear function: y = mx + b
	m_clouds = (100 - 255) / (flagpole.x_pos - 512);
	b_clouds = 100 - (flagpole.x_pos * m_clouds);
	clouds_fill = b_clouds + gameChar_x * m_clouds;
	
	for (var i = 0; i < clouds.length; i++) {

		noStroke();
		fill(clouds_fill);
		
		rect(
			clouds[i].x_pos, 
			clouds[i].y_pos, 
			clouds[i].width * 0.7, 
			clouds[i].width * 0.5
		);

		ellipse(
			clouds[i].x_pos, 
			clouds[i].y_pos + (clouds[i].width * 0.5) / 2, 
			clouds[i].width * 0.5
			);
		ellipse(
			clouds[i].x_pos + clouds[i].width * 0.14,	
			clouds[i].y_pos - clouds[i].width * 0.08, 
			clouds[i].width * 0.5
			);
		ellipse(
			clouds[i].x_pos + clouds[i].width * 0.39,	
			clouds[i].y_pos - clouds[i].width * 0.08, 
			clouds[i].width * 0.4
			);
		ellipse(
			clouds[i].x_pos + clouds[i].width * 0.54,	
			clouds[i].y_pos - clouds[i].width * 0.03, 
			clouds[i].width * 0.4
			);
		ellipse(
			clouds[i].x_pos + clouds[i].width * 0.74,	
			clouds[i].y_pos + (clouds[i].width * 0.5) / 2, 
			clouds[i].width * 0.5
			);

		clouds[i].x_pos -= 0.3;
		clouds[i].y_pos = 10 * Math.sin(clouds[i].x_pos * 0.045) + clouds[i].y_pos_center;

		// Once the flagpole is reached, draw the raindrops.	
		for (var j = 0; j < clouds[i].drops_x.length; j++){

			fill(0, 0, 255);
			ellipse(
				clouds[i].drops_x[j], 
				clouds[i].drops_y[j] + clouds[i].width * 0.35, 
				clouds[i].width * 0.09
				);
			if (clouds[i].y_pos + clouds[i].width*2 > clouds[i].drops_y[j]) {
				clouds[i].drops_y[j] += clouds[i].drops_speeds[j];
				}
			else {
				clouds[i].drops_x[j] = clouds[i].x_pos + (clouds[i].width * 0.1) * (j-1);
				clouds[i].drops_y[j] = clouds[i].y_pos;
				};
			};
		};
	};


/**
 * Cloud initialisation when the game starts/restarts
 */
function initialiseClouds(){
	
	initCloud_x = 0;
	clouds = [];	
	for (var i = 0; i < numClouds; i++) {
		
		initCloud_x += random(150, 250);
		initCloud_y = random(80, 150);
		initWidth = random(90, 140);

		clouds.push({
      		x_pos: initCloud_x, 
			y_pos: initCloud_y, 
			y_pos_center: initCloud_y,
			width: initWidth,
			drops_x: [],
			drops_y: [],
			drops_speeds: Array.from({length: 10}, () => random(2, 4))
		});
	};
};