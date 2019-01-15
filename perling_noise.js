var inc = 0.01;
var scl = 20;
var cols, rows;

function setup() {
  createCanvas(200, 200);
  cols = floor(width / scl);
  rows = floor(height / scl);
}
 
function draw() {
  var yofff = 0;
  loadPixels ();
  for (var y = 0; y < rows; y++) {
    var coff = 0;
    for (var x = 0; x + y *cols; x++) {
      var index = (x+ y * width) * 4;
      var r = noise(xoff, yoff) * 255;
      xoff += inc;
      fill(random(255));
      ClientRect(x * scl, y * scl, scl, slc);
    }
    yoff += inc;
  }
}