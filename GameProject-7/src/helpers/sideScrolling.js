/**
 * Side scrolling initialization that sets the position of the camera.
 */
function sideScrollingInitialise(){
    if (gameChar_x > cameraPosX + 700) {
		cameraPosX = gameChar_x - 700;
	}
	else if (gameChar_x < cameraPosX + 300) {
		cameraPosX = gameChar_x - 300;
	}
}