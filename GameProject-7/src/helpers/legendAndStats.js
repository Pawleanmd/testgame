/**
 * Display elements of the game legend:
 * *Score (number of collectables obtained)
 * *Music toggle On/Off button and status
 * *Shooting instructions
 * *Life tokens
 */
function drawLegend(){

    fill(0);
    noStroke();
    textStyle('bold');
    textSize(14);
    text('Score: ' + game_score + ' of ' + collectables.length, 20, 20);
    text('Press "m" to switch music', 150, 20);
    text('Press "k" facing Left or Right when super power is active to shoot', 400, 20);
    text('Music: ', 149, 48);

    if(backgroundMusicPlaying && lives > 0) {
        musicValue = "ON";
        fill(0, 255, 0);
    }
    else {
        
        if (flagpole.isReached){
            fill(0, 255, 0);
            musicValue = "ON";
        }
        else{
            fill(255, 0, 0);
            musicValue = "OFF";
        }
        
    }

    textStyle('bold');
    text(musicValue, 198,  48);

    // draw life tokens onto the screen
    drawLives();

}

/**
 * Draw life tokens (hearts) to the screen
 */
function drawLives() {
  for(var i = 1; i <= lives; i++) {
      fill(255, 0, 0);
      // The code for heart is adapted from: https://editor.p5js.org/Mithru/sketches/Hk1N1mMQg
      heart((i + 0.75) * 15, 40, 10);
  }
}
