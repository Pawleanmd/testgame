/**
 * Check if the Game is over (the number of lives reached 0)
 * Or if the level is complete (the flagpole is reached)
 * Display game over screen and statistics
 */
function gameOverCheck(){
  
    // Check if the number of lives is 0
    if(lives < 1) {
        fill(255, 0, 0);
        textSize(30);
        textStyle(BOLD);
        text('Game over. Press space to continue.', 250, 200);
        if (!isPlummeting){
          isDead = true
        }
        spaceRestart();
        backgroundMusic.stop();
        counterSuper = false;
        

        // Return true if game is over to stop further intractions.
        return true;
      }
    
    // Check if flagpole is reached
    else if(flagpole.isReached) {
        if(!flagMusicPlaying) {
        flagMusic.play();
        flagMusicPlaying = true;
      }
      fill(0,255,127);
      textSize(30);
      textStyle(BOLD);

      // Display Level Complete message + statistics
      text('\t\t\t\t\tLevel complete!\n\tYour score is: ' + game_score + ' out of ' + collectables.length + '\n\tPress space to try again.', 300, 200);
      spaceRestart();
      backgroundMusicPlaying = false;
      backgroundMusic.stop();

      // Draw rain and lightning when the flagpole is reached
      drawLightning();
      growFlowers();

      // Return true if game is over to stop further intractions.
      return true;
      } 
    // Return false to continue interactions
    return false
}