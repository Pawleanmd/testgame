/**
 * Create the flagpole that changes state when reached (e.g. flag up or down)
 */
function renderFlagpole() {
    // Draw Flagpole
    push();
    strokeWeight(5);
    stroke(180);
    line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 250);
    noStroke();

    // Flag is up when flagpole is reached
    if(flagpole.isReached) {
        fill(65, 105, 225);
        rect(flagpole.x_pos, floorPos_y - 250, 25, 50);
        fill(255, 215, 0);
        rect(flagpole.x_pos + 25, floorPos_y - 250, 25, 50);
        fill(255, 0, 0);
        rect(flagpole.x_pos + 50, floorPos_y - 250, 25, 50);
    } 

    // Flag is down when flagpole is not reached
    else {
        fill(65, 105, 225);
        rect(flagpole.x_pos, floorPos_y - 50, 25, 50);
        fill(255, 215, 0);
        rect(flagpole.x_pos + 25, floorPos_y - 50, 25, 50);
        fill(255, 0, 0);
        rect(flagpole.x_pos + 50, floorPos_y - 50, 25, 50);
      }
    pop();
}


/**
 * Check if the flagpole is reached by the game character
 */
function checkFlagpole() {

  // check if the game character touches the flagpole
    var d = abs(gameChar_x - flagpole.x_pos);

    if(d < 15) {
        flagpole.isReached = true;

        // If the flagpole is reached, start the rain
        // Initialise drops x coordinates
        for (var i = 0; i < clouds.length; i++) {
            clouds[i].drops_x = []
            for (var j = -0.1; j < 0.8; j+=0.1){
                clouds[i].drops_x.push(clouds[i].x_pos - clouds[i].width * j,)
            }
        // Initialise drops y coordinates
        for (var j = 0; j < 10; j++) {
            clouds[i].drops_y.push(clouds[i].y_pos + random(0, clouds[i].width));
          }
        }

        // Grow flowers when it is raining
        for (var i = 0; i < flowers.length; i++) {
            flowersMaxHeight.push(flowers[i].stem_h + 60);
          }
      }
  }