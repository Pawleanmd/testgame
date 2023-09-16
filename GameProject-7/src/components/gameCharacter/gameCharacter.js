/**
 * Draw the game character.
 * The character drawing depends on multiple factors:
 * 1) If going left, right or standing still
 * 2) If jumping or not
 * 3) If plummeting or not
 * 4) If Super powers are active or not
 */
function drawGameChar() {

  //========================= Character jumping left =========================//
  	noStroke();
	if(isLeft && isFalling && !isPlummeting && flagpole.isReached == false && !isDead) {

		// Head
		fill(204, 204, 0);
		ellipse(gameChar_x, gameChar_y - 57, 20);
		
		// Ears
		triangle(
			gameChar_x - 7, gameChar_y - 59,
			gameChar_x + 1, gameChar_y - 64,
			gameChar_x - 2, gameChar_y - 75
			);

		triangle(
			gameChar_x - 1, gameChar_y - 61,
			gameChar_x + 7, gameChar_y - 59,
			gameChar_x + 3, gameChar_y - 75
			);

		// Hands
		// The character is holding a pistol if Super powers are activated
		if(counterSuper) {
			strokeWeight(10);
			stroke(153, 153, 0);
			line(gameChar_x + 2, gameChar_y - 40, gameChar_x - 20, gameChar_y - 40);
			strokeWeight(4);
			stroke(0);
			line(gameChar_x - 20, gameChar_y - 38, gameChar_x - 20, gameChar_y - 45);
			line(gameChar_x - 20, gameChar_y - 45, gameChar_x - 35, gameChar_y - 45);
		}
		else {
			strokeWeight(10);
			stroke(153, 153, 0);
			line(gameChar_x - 7, gameChar_y - 38, gameChar_x - 18, gameChar_y - 50);
		}
		strokeWeight(10);
		stroke(153, 153, 0);

		// Feet
		line(gameChar_x - 2, gameChar_y - 25, gameChar_x - 15, gameChar_y - 28);
		line(gameChar_x - 15, gameChar_y - 28, gameChar_x - 13, gameChar_y - 12);
		line(gameChar_x - 2, gameChar_y - 25, gameChar_x - 3, gameChar_y - 15);
		line(gameChar_x - 3, gameChar_y - 15, gameChar_x + 4, gameChar_y - 5);
		strokeWeight(0);

		// Body
		ellipse(gameChar_x, gameChar_y - 35, 20, 30);

		// Eyes
		stroke("black");
		strokeWeight(5);
		point(gameChar_x - 5, gameChar_y - 60, 10, 20);
		strokeWeight(1);

		// Mouth
		// THE CODE FOR MOUTH ADAPTED FROM: https://www.youtube.com/watch?v=IWLpIJMVRtg&ab_channel=ProfessorChris
		arc(gameChar_x - 5, gameChar_y - 55, 12, 8, 0.1, PI - 0.8);

		// Super Body and Super Glasses
		if(counterSuper == true) {
			// Super body
			noStroke();
			fill(70, 70, 255);
			ellipse(gameChar_x, gameChar_y - 30, 20, 40);
			fill(255,0,0);
			textSize(20);
			text('S', gameChar_x-6, gameChar_y - 25);
			textSize(12);
			fill(204, 204, 0);
			
			//Head
			fill(204, 204, 0);
			noStroke();
			ellipse(gameChar_x, gameChar_y - 57, 20);
			
			// Mouth
			// THE CODE FOR MOUTH ADAPTED FROM: https://www.youtube.com/watch?v=IWLpIJMVRtg&ab_channel=ProfessorChris
			stroke(0);
			arc(gameChar_x - 5, gameChar_y - 55, 12, 8, 0.1, PI - 0.8);

			// Glasses
			fill(255, 0, 0);
			stroke(255, 0, 0);
			ellipse(gameChar_x - 5, gameChar_y - 60, 6, 6);
			line(gameChar_x - 5, gameChar_y - 60, gameChar_x + 5, gameChar_y - 60);
		}
	} 


	//========================= Character jumping left =========================//
	else if(isRight && isFalling && !isPlummeting && flagpole.isReached == false && !isDead) {

		//Head
		fill(204, 204, 0);
		ellipse(gameChar_x, gameChar_y - 57, 20);

		// Ears
		triangle(
			gameChar_x - 7, gameChar_y - 59,
			gameChar_x + 1, gameChar_y - 64,
			gameChar_x - 2, gameChar_y - 75
		);
		triangle(
			gameChar_x - 1, gameChar_y - 61,
			gameChar_x + 7, gameChar_y - 59,
			gameChar_x + 3, gameChar_y - 75
		);

		// Hands
		// The character is holding a pistol if Super powers are activated
		if(counterSuper) {
			strokeWeight(10);
			stroke(153, 153, 0);
			line(gameChar_x + 2, gameChar_y - 40, gameChar_x + 20, gameChar_y - 40);
			strokeWeight(4);
			stroke(0);
			line(gameChar_x + 20, gameChar_y - 38, gameChar_x + 20, gameChar_y - 45);
			line(gameChar_x + 20, gameChar_y - 45, gameChar_x + 35, gameChar_y - 45);
		}
		else {
			strokeWeight(10);
			stroke(153, 153, 0);
			line(gameChar_x + 7, gameChar_y - 38, gameChar_x + 18, gameChar_y - 50);
		}
		
		// Feet
		strokeWeight(10);
		stroke(153, 153, 0);
		line(gameChar_x + 2, gameChar_y - 25, gameChar_x + 15, gameChar_y - 28);
		line(gameChar_x + 15, gameChar_y - 28, gameChar_x + 13, gameChar_y - 12);
		line(gameChar_x + 2, gameChar_y - 25, gameChar_x + 3, gameChar_y - 15);
		line(gameChar_x + 3, gameChar_y - 15, gameChar_x - 4, gameChar_y - 5);
		strokeWeight(0);

		// Body
		ellipse(gameChar_x, gameChar_y - 35, 20, 30);

		// Eyes
		stroke("black");
		strokeWeight(5);
		point(gameChar_x + 5, gameChar_y - 60, 10, 20);
		strokeWeight(1);

		// Mouth
		// THE CODE FOR MOUTH ADAPTED FROM: https://www.youtube.com/watch?v=IWLpIJMVRtg&ab_channel=ProfessorChris
		arc(gameChar_x + 5, gameChar_y - 56, 12, 8, 0.7, PI - 0.2);

		// Super Body and Super Glasses
		if(counterSuper == true) {
			
			// Super body
			noStroke();
			fill(70, 70, 255);
			ellipse(gameChar_x, gameChar_y - 30, 20, 40);
			fill(255, 0, 0);
			textSize(20);
			text('S', gameChar_x-6, gameChar_y - 25);
			textSize(12);
			fill(204, 204, 0);
			
			//Head
			fill(204, 204, 0);
			noStroke();
			ellipse(gameChar_x, gameChar_y - 57, 20);
			
			// Mouth
			// THE CODE FOR MOUTH ADAPTED FROM: https://www.youtube.com/watch?v=IWLpIJMVRtg&ab_channel=ProfessorChris
			stroke(0);
			arc(gameChar_x + 5, gameChar_y - 56, 12, 8, 0.7, PI - 0.2);

			// Glasses
     		fill(255, 0, 0);
			stroke(255, 0, 0);
			ellipse(gameChar_x + 5, gameChar_y - 60, 6, 6);
			line(gameChar_x - 5, gameChar_y - 60, gameChar_x + 5, gameChar_y - 60);
		}
	} 

	
	//========================= Character walking left =========================//
	else if(isLeft && !isPlummeting && flagpole.isReached == false && !isDead) {

		strokeWeight(10);
		stroke(153, 153, 0);

		// Toggle walk for walking animation which has two positions for hands and feet
		if(toggleWalk) {

			// Hands first position
			if(counterSuper) {
				line(gameChar_x + 2, gameChar_y - 40, gameChar_x - 20, gameChar_y - 40);
				strokeWeight(4);
				stroke(0);
				line(gameChar_x - 20, gameChar_y - 38, gameChar_x - 20, gameChar_y - 45);
				line(gameChar_x - 20, gameChar_y - 45, gameChar_x - 35, gameChar_y - 45);
			}
			else {
				line(gameChar_x + 8, gameChar_y - 40, gameChar_x + 14, gameChar_y - 25);
				line(gameChar_x - 8, gameChar_y - 40, gameChar_x - 20, gameChar_y - 35);
			}
			
			// Feet first position
			strokeWeight(10);
			stroke(153, 153, 0);
			line(gameChar_x - 3, gameChar_y - 22, gameChar_x - 15, gameChar_y - 5);
			line(gameChar_x + 2, gameChar_y - 18, gameChar_x + 4, gameChar_y - 3);
		}
		else {

			// Hands second position
			// The character is holding a pistol if Super powers are activated
			if(counterSuper) {
				line(gameChar_x + 2, gameChar_y - 40, gameChar_x - 20, gameChar_y - 40);
				strokeWeight(4);
				stroke(0);
				line(gameChar_x - 20, gameChar_y - 38, gameChar_x - 20, gameChar_y - 45);
				line(gameChar_x - 20, gameChar_y - 45, gameChar_x - 35, gameChar_y - 45);
			}
			else {
				line(gameChar_x + 8, gameChar_y - 40, gameChar_x + 19, gameChar_y - 30);
				line(gameChar_x - 8, gameChar_y - 40, gameChar_x - 13, gameChar_y - 28);
			}
			
			// Feet second position
			strokeWeight(10);
			stroke(153, 153, 0);
			line(gameChar_x - 3, gameChar_y - 22, gameChar_x - 8, gameChar_y - 5);
			line(gameChar_x + 2, gameChar_y - 18, gameChar_x + 12, gameChar_y - 5);
		}

		// Play walking sound which depends if the character is on a platform or on the ground
		if(!walkingSound.isPlaying() && !isJumping && !onPlatform) {
			walkingSound.play();
		}
		else if(!walkingPlatformSound.isPlaying() && !isJumping && onPlatform) {
			walkingPlatformSound.play();
		}

		// Body
		strokeWeight(0);
		fill(204, 204, 0);
		ellipse(gameChar_x, gameChar_y - 30, 20, 40);

		//Head
		ellipse(gameChar_x, gameChar_y - 57, 20);

		// Ears
		triangle(
			gameChar_x - 7, gameChar_y - 59,
			gameChar_x + 1, gameChar_y - 64,
			gameChar_x - 2, gameChar_y - 75
		);
		triangle(
			gameChar_x - 1, gameChar_y - 61,
			gameChar_x + 7, gameChar_y - 59,
			gameChar_x + 3, gameChar_y - 75
		);

		// Eyes
		stroke("black");
		strokeWeight(5);
		point(gameChar_x - 5, gameChar_y - 60, 10, 20);
		strokeWeight(1);

		// Mouth
		// THE CODE FOR MOUTH ADAPTED FROM: https://www.youtube.com/watch?v=IWLpIJMVRtg&ab_channel=ProfessorChris
		arc(gameChar_x - 5, gameChar_y - 55, 12, 8, 0.1, PI - 0.8);

		// Super Body and Super Glasses
		if(counterSuper == true) {

			// Super body
			noStroke();
			fill(70, 70, 255);
			ellipse(gameChar_x, gameChar_y - 30, 20, 40);
			fill(255,0,0);
			textSize(20);
			text('S', gameChar_x-6, gameChar_y - 25);
			textSize(12);
			fill(204, 204, 0);
			
			// Head
			fill(204, 204, 0);
			noStroke();
			ellipse(gameChar_x, gameChar_y - 57, 20);
			
			// Mouth
			// THE CODE FOR MOUTH ADAPTED FROM: https://www.youtube.com/watch?v=IWLpIJMVRtg&ab_channel=ProfessorChris
			stroke(0);
			arc(gameChar_x - 5, gameChar_y - 55, 12, 8, 0.1, PI - 0.8);

			// Glasses
      		fill(255, 0, 0);
			stroke(255, 0, 0);
			ellipse(gameChar_x - 5, gameChar_y - 60, 6, 6);
			line(gameChar_x - 5, gameChar_y - 60, gameChar_x + 5, gameChar_y - 60);
		}
	} 
		
		//========================= Character walking right =========================//
		else if(isRight && !isPlummeting && flagpole.isReached == false && !isDead) {

		//Head
		fill(204, 204, 0);
		ellipse(gameChar_x, gameChar_y - 57, 20);

		// Ears
		triangle(
			gameChar_x - 7, gameChar_y - 59,
			gameChar_x + 1, gameChar_y - 64,
			gameChar_x - 2, gameChar_y - 75
		);

		triangle(
			gameChar_x - 1, gameChar_y - 61,
			gameChar_x + 7, gameChar_y - 59,
			gameChar_x + 3, gameChar_y - 75
		);

		// Toggle walk for walking animation which has two positions for hands and feet
		strokeWeight(10);
		stroke(153, 153, 0);
		if(toggleWalk) {

			// Hands first position
			// The character is holding a pistol if Super powers are activated
			if (counterSuper){
				line(gameChar_x + 2, gameChar_y - 40, gameChar_x + 20, gameChar_y - 40);
				strokeWeight(4);
				stroke(0);
				line(gameChar_x + 20, gameChar_y - 38, gameChar_x + 20, gameChar_y - 45);
				line(gameChar_x + 20, gameChar_y - 45, gameChar_x + 35, gameChar_y - 45);
			}
			else {
				line(gameChar_x - 8, gameChar_y - 40, gameChar_x - 20, gameChar_y - 30);
				line(gameChar_x + 8, gameChar_y - 40, gameChar_x + 14, gameChar_y - 28);
			}

			// Feet first position
			strokeWeight(10);
			stroke(153, 153, 0);
			line(gameChar_x - 3, gameChar_y - 22, gameChar_x + 8, gameChar_y - 5);
			line(gameChar_x + 2, gameChar_y - 18, gameChar_x - 12, gameChar_y - 5);
		}
		else {
			
			// Hands second position
			// The character is holding a pistol if Super powers are activated
			if(counterSuper){
				line(gameChar_x + 2, gameChar_y - 40, gameChar_x + 20, gameChar_y - 40);
				strokeWeight(4);
				stroke(0);
				line(gameChar_x + 20, gameChar_y - 38, gameChar_x + 20, gameChar_y - 45);
				line(gameChar_x + 20, gameChar_y - 45, gameChar_x + 35, gameChar_y - 45);
			}
			else {
				line(gameChar_x + 8, gameChar_y - 40, gameChar_x + 19, gameChar_y - 35);
				line(gameChar_x - 8, gameChar_y - 40, gameChar_x - 13, gameChar_y - 25);
			}
		
		// Feet second position
		strokeWeight(10);
		stroke(153, 153, 0);
		line(gameChar_x - 2, gameChar_y - 18, gameChar_x - 4, gameChar_y - 3);
		line(gameChar_x + 2, gameChar_y - 22, gameChar_x + 15, gameChar_y - 5);
		}

		// Play walking sound which depends if the character is on a platform or on the ground
		if(!walkingSound.isPlaying() && !isJumping && !onPlatform) {
			walkingSound.play();
		}
		else if(!walkingPlatformSound.isPlaying() && !isJumping && onPlatform) {
			walkingPlatformSound.play();
		}

		// Feet first position
		if (toggleWalk){
			line(gameChar_x - 3, gameChar_y - 22, gameChar_x + 8, gameChar_y - 5);
			line(gameChar_x + 2, gameChar_y - 18, gameChar_x - 12, gameChar_y - 5);
		}
		// Feet second position
		else {
			line(gameChar_x - 2, gameChar_y - 18, gameChar_x - 4, gameChar_y - 3);
			line(gameChar_x + 2, gameChar_y - 22, gameChar_x + 15, gameChar_y - 5);
		}
		
		// Body
		strokeWeight(0);
		ellipse(gameChar_x, gameChar_y - 30, 20, 40);

		// Eyes
		stroke("black");
		strokeWeight(5);
		point(gameChar_x + 5, gameChar_y - 60, 10, 20);
		strokeWeight(1);

		// Mouth
		// THE CODE FOR MOUTH ADAPTED FROM: https://www.youtube.com/watch?v=IWLpIJMVRtg&ab_channel=ProfessorChris
		arc(gameChar_x + 5, gameChar_y - 56, 12, 8, 0.7, PI - 0.2);

		// Super Body and Super Glasses
		if(counterSuper == true) {

			// Super body
			noStroke();
			fill(70, 70, 255);
			ellipse(gameChar_x, gameChar_y - 30, 20, 40);
			fill(255, 0, 0);
			textSize(20);
			text('S', gameChar_x-6, gameChar_y - 25);
			textSize(12);
			fill(204, 204, 0);
			
			//Head
			fill(204, 204, 0);
			noStroke();
			ellipse(gameChar_x, gameChar_y - 57, 20);
			
			// Mouth
			// THE CODE FOR MOUTH ADAPTED FROM: https://www.youtube.com/watch?v=IWLpIJMVRtg&ab_channel=ProfessorChris
			stroke(0);
			arc(gameChar_x + 5, gameChar_y - 56, 12, 8, 0.7, PI - 0.2);

			// Glasses
			fill(255, 0, 0);
			stroke(255, 0, 0);
			ellipse(gameChar_x + 5, gameChar_y - 60, 6, 6);
			line(gameChar_x - 5, gameChar_y - 60, gameChar_x + 5, gameChar_y - 60);
		}
	}
	
	//========================= Character jumping facing forward =========================//
	else if((isFalling || isJumping) && flagpole.isReached == false && !isDead) {

		// Head
		fill(204, 204, 0);
		ellipse(gameChar_x, gameChar_y - 57, 20);

		// Ears
		triangle(
			gameChar_x - 10, gameChar_y - 59,
			gameChar_x + 1, gameChar_y - 64,
			gameChar_x - 7, gameChar_y - 75
		);

		triangle(
			gameChar_x - 1, gameChar_y - 61,
			gameChar_x + 10, gameChar_y - 59,
			gameChar_x + 8, gameChar_y - 75
		);

		// Hands
		strokeWeight(10);
		stroke(153, 153, 0);
		line(gameChar_x + 7, gameChar_y - 38, gameChar_x + 16, gameChar_y - 55);
		line(gameChar_x - 7, gameChar_y - 38, gameChar_x - 16, gameChar_y - 55);

		// Feet
		line(gameChar_x - 3, gameChar_y - 22, gameChar_x - 5, gameChar_y - 6);
		line(gameChar_x + 2, gameChar_y - 18, gameChar_x + 5, gameChar_y - 6);
		
		// Body
		strokeWeight(0);
		ellipse(gameChar_x, gameChar_y - 30, 20, 40);

		// Eyes
		stroke("black");
		strokeWeight(5);
		point(gameChar_x - 5, gameChar_y - 60, 10, 20);
		point(gameChar_x + 5, gameChar_y - 60, 10, 20);
		strokeWeight(1);

		// Mouth
		arc(gameChar_x, gameChar_y - 55, 12, 8, 0.1, PI - 0.1);

		// Game character with the water mask
		if(isPlummeting) {
			
			// Head
			noStroke();
			fill(204, 204, 0);
			ellipse(gameChar_x, gameChar_y - 57, 20);

			// Eyes
			stroke("black");
			strokeWeight(5);
			point(gameChar_x - 5, gameChar_y - 60, 10, 20);
			point(gameChar_x + 5, gameChar_y - 60, 10, 20);
			strokeWeight(1);

			// Mouth
			stroke(1);
			ellipse(gameChar_x, gameChar_y - 53, 3);

			// Mask
			noStroke();
			fill(0, 100, 200, 200);
			ellipse(gameChar_x - 5, gameChar_y - 60, 10);
			ellipse(gameChar_x + 5, gameChar_y - 60, 10);

			// Breathing tube
			strokeWeight(2);
			stroke(0, 100, 200, 200);
			line(gameChar_x + 12, gameChar_y - 53, gameChar_x + 12, gameChar_y - 75);
			line(gameChar_x, gameChar_y - 53, gameChar_x + 12, gameChar_y - 53);
			strokeWeight(1);

			// Water bubbles
			noFill();
			strokeWeight(1);
			stroke(255);
			ellipse(gameChar_x + 12, gameChar_y - 80, 4);
			ellipse(gameChar_x + 12, gameChar_y - 84, 3);
			ellipse(gameChar_x + 12, gameChar_y - 88, 2);
		}

		// Super Body and Super Glasses
		if (counterSuper == true && !isPlummeting) {

			// Super body
			noStroke();
			fill(70, 70, 255);
			ellipse(gameChar_x, gameChar_y - 30, 20, 40);
			fill(255,0,0);
			textSize(20);
			text('S', gameChar_x-6, gameChar_y - 25);
			textSize(12);
			fill(204, 204, 0);
			
			// Head
			fill(204, 204, 0);
			noStroke();
			ellipse(gameChar_x, gameChar_y - 57, 20);
			
			// Eyes
			stroke("black");
			strokeWeight(5);
			point(gameChar_x - 5, gameChar_y - 60, 10, 20);
			point(gameChar_x + 5, gameChar_y - 60, 10, 20);
			strokeWeight(1);
			
			// Mouth
			// THE CODE FOR MOUTH IS ADAPTED FROM: https://www.youtube.com/watch?v=IWLpIJMVRtg&ab_channel=ProfessorChris
			arc(gameChar_x, gameChar_y - 55, 12, 8, 0.1, PI - 0.1);

			// Glasses
			fill(255, 0, 0);
			stroke(255, 0, 0);
			ellipse(gameChar_x - 5, gameChar_y - 60, 6, 6);
			ellipse(gameChar_x + 5, gameChar_y - 60, 6, 6);
			line(gameChar_x - 5, gameChar_y - 60, gameChar_x + 5, gameChar_y - 60);
		}
	} 

	//========================= Game character front facing =========================//
	else {
		// Head
		fill(204, 204, 0);
		ellipse(gameChar_x, gameChar_y - 57, 20);

		// Ears
		triangle(
			gameChar_x - 10, gameChar_y - 59,
			gameChar_x + 1, gameChar_y - 64,
			gameChar_x - 7, gameChar_y - 75
		);
		triangle(
			gameChar_x - 1, gameChar_y - 61,
			gameChar_x + 10, gameChar_y - 59,
			gameChar_x + 8, gameChar_y - 75
		);

		// Hands
		strokeWeight(10);
		stroke(153, 153, 0);
		line(gameChar_x + 7, gameChar_y - 38, gameChar_x + 18, gameChar_y - 43);
		line(gameChar_x - 7, gameChar_y - 38, gameChar_x - 18, gameChar_y - 43);

		// Feet
		line(gameChar_x - 3, gameChar_y - 22, gameChar_x - 8, gameChar_y - 3);
		line(gameChar_x + 3, gameChar_y - 22, gameChar_x + 8, gameChar_y - 3);
		strokeWeight(0);

		// Body
		ellipse(gameChar_x, gameChar_y - 30, 20, 40);

		// Head
		fill(204, 204, 0);
		ellipse(gameChar_x, gameChar_y - 57, 20);
		
		// Ears
		triangle(
			gameChar_x - 10, gameChar_y - 59,
			gameChar_x + 1, gameChar_y - 64,
			gameChar_x - 7, gameChar_y - 75
		);
		triangle(
			gameChar_x - 1, gameChar_y - 61,
			gameChar_x + 10, gameChar_y - 59,
			gameChar_x + 8, gameChar_y - 75
		);
		
		// Eyes dead
		if (isDead){
			stroke("black");
			strokeWeight(2);
			line(gameChar_x - 7, gameChar_y - 63, gameChar_x-2,  gameChar_y - 59)
			line(gameChar_x - 2, gameChar_y - 63, gameChar_x-7,  gameChar_y - 59)

			line(gameChar_x + 7, gameChar_y - 63, gameChar_x + 2,  gameChar_y - 59)
			line(gameChar_x + 2, gameChar_y - 63, gameChar_x + 7,  gameChar_y - 59)

		}
		// Eyes alive
		else{
			stroke("black");
			strokeWeight(5);
			point(gameChar_x - 5, gameChar_y - 60, 10, 20);
			point(gameChar_x + 5, gameChar_y - 60, 10, 20);
			strokeWeight(1);
		}
		
		stroke("black");
		strokeWeight(1);
		// Mouth
		// THE CODE FOR MOUTH IS ADAPTED FROM: https://www.youtube.com/watch?v=IWLpIJMVRtg&ab_channel=ProfessorChris
		arc(gameChar_x, gameChar_y - 55, 12, 8, 0.1, PI - 0.1);

		// Super Body and Super Glasses
		if (counterSuper == true && flagpole.isReached == false) {
			// Super body
			noStroke();
			fill(70, 70, 255);
			ellipse(gameChar_x, gameChar_y - 30, 20, 40);
			fill(255, 0, 0);
			textSize(20);
			text('S', gameChar_x-6, gameChar_y - 25);
			textSize(12);
			fill(204, 204, 0);
			
			// Head
			fill(204, 204, 0);
			noStroke();
			ellipse(gameChar_x, gameChar_y - 57, 20);
			
			// Eyes
			stroke("black");
			strokeWeight(5);
			point(gameChar_x - 5, gameChar_y - 60, 10, 20);
			point(gameChar_x + 5, gameChar_y - 60, 10, 20);
			strokeWeight(1);
			
			// Mouth
			// THE CODE FOR MOUTH IS ADAPTED FROM: https://www.youtube.com/watch?v=IWLpIJMVRtg&ab_channel=ProfessorChris
			arc(gameChar_x, gameChar_y - 55, 12, 8, 0.1, PI - 0.1);

			// Glasses
			fill(255, 0, 0);
			stroke(255, 0, 0);
			ellipse(gameChar_x - 5, gameChar_y - 60, 6, 6);
			ellipse(gameChar_x + 5, gameChar_y - 60, 6, 6);
			line(gameChar_x - 5, gameChar_y - 60, gameChar_x + 5, gameChar_y - 60);
		}
	}
}

/**
 * Check if the player died and subtrack 1 life
 */
function checkPlayerDie() {
	if(gameChar_y >= 537) {
	    lives -= 1;
	    if(lives > 0) {
		    startGame();
	      }
	  }
  }
  
/**
 * Toggle character walking animation states
 */
function toggleWalk() {
	toggleWalk = !toggleWalk;
}
  