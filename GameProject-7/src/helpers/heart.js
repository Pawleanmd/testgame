// Code adapted from: https://editor.p5js.org/Mithru/sketches/Hk1N1mMQg
/**
 * A helper function to draw a heart to display lives
 */
function heart(x, y, size) {
    beginShape();
    vertex(x, y);
    bezierVertex(
        x - size / 2, 
        y - size / 2, 
        x - size, 
        y + size / 3, 
        x, y + size
    );
    bezierVertex(
        x + size, 
        y + size / 3, 
        x + size / 2, 
        y - size / 2, 
        x, y
    );
    endShape(CLOSE);
}