// Sky variables declarations
var m_sky;
var b_sky;
var sky_green_fill;

/**
 * Draw a blue sky that gradually changes color the closer the game character is to the flagpole.
 */
function drawSky(){
	m_sky = (150-250) / (flagpole.x_pos - 512);
	b_sky = 150 - (flagpole.x_pos * m_sky);
	sky_green_fill = b_sky + gameChar_x * m_sky;
	background(100, 155, sky_green_fill); 

}

/**
 * Draw green grass.
 */
function drawGround(){
    noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height - floorPos_y); 
}