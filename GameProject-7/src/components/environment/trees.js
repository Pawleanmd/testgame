// Tree variables declaration
var trees_x_positions;
var treePos_y;
var initTree_x;
var numTrees;

// Initial tree position and number of trees
treePos_y = (576 - 10) / 2;
numTrees = 50;

/**
 * Draw all trees.
 */
function drawTrees() {
	for (var i = 0; i < trees_x_positions.length; i++) {
			
		// Tree trunk
		fill(102, 51, 0);
		rect(trees_x_positions[i], treePos_y -40, 30, 190);

		// Foliage
		fill(102, 204, 0);
		ellipse(trees_x_positions[i] + 15, treePos_y + 8, 100, 100);

		// Branches
		fill(102, 51, 0);
		triangle(
			trees_x_positions[i] + 27, treePos_y,
			trees_x_positions[i] + 27, treePos_y + 13,
			trees_x_positions[i] + 85, treePos_y - 15
		);

		triangle(
			trees_x_positions[i] + 36, treePos_y + 6,
			trees_x_positions[i] + 46, treePos_y,
			trees_x_positions[i] + 58, treePos_y - 27
		);

		triangle(
			trees_x_positions[i] + 50, treePos_y - 2,
			trees_x_positions[i] + 55, treePos_y - 7,
			trees_x_positions[i] + 80, treePos_y
		);

		triangle(
			trees_x_positions[i] - 3, treePos_y + 40,
			trees_x_positions[i] - 3,	treePos_y + 27,
			trees_x_positions[i] - 55, treePos_y + 5
		);

		triangle(
			trees_x_positions[i] - 13, treePos_y + 25,
			trees_x_positions[i] - 20, treePos_y + 25,
			trees_x_positions[i] - 30, treePos_y - 1
		);

		triangle(
			trees_x_positions[i] - 10, treePos_y + 25,
			trees_x_positions[i] - 10, treePos_y + 32,
			trees_x_positions[i] - 47, treePos_y + 25
		);
	}
}


/**
 * Randomly Initialise / Reinitialise trees when the game starts / restarts
 */
function initialiseTrees(){
	// Update tree positions randomly
	trees_x_positions = [];
	initTree_x = Math.random(200, 300);

	for (var i = 0; i < numTrees; i++) {
		to_draw_tree = true;
		for (var j = 0; j < canyons.length; j++) {
			// Check if the tree is "on top" of a canyon. If yes don't draw it
			if(initTree_x >= canyons[j].x_pos - 50 && initTree_x <= canyons[j].x_pos + canyons[j].width + 50 ) {
				to_draw_tree = false;
				initTree_x += random(150, 300);
				break;
			}
		}

		// Add a tree if it is not on top of a canyon
		if (to_draw_tree === true) {
			trees_x_positions.push(initTree_x);
			initTree_x += random(150, 300);
		}
	}
}