/**
 * Add darkness effect to the screen that is a function of the distance between
 * the game character and the flagpole. The closer to flagpole the darker.
 */
function addDarkness(){
    fill(0, 0, 0, (gameChar_x * 100) / flagpole.x_pos);
    rect(cameraPosX, 0, width, height);
}
