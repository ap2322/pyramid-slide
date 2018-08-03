
/**
 * determineHeightAndThenDrawPyramid
 *
 * Determines the current value that the user has typed in the 'How high?' text-box,
 * and then draws a pyramid with that height.
 */

// Add sliders
var slider = document.getElementById("myRange");
var output = document.getElementById("pyramidHeight");
output.innerHTML = slider.value; 

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
    determineHeightAndThenDrawPyramid();
}

function determineHeightAndThenDrawPyramid() {

    // figure out the height the user typed (replace the "5" below)
    // var input = document.querySelector("#height");
    // heightStr = input.value;

    // replace the above document.querySelector('#height'); with the slider input
    //var output = document.getElementById("#pyramidHeight");
    heightStr = slider.value;

    // here we convert the string to an int
    height = parseInt(heightStr);

    // draw the pyramid with the given height
    drawPyramid(height);
    console.log("you should have successfully drawn a pyramid")
    

}

// TODO: Add dropdown to select brick character




/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
 function drawPyramid(height) {

     // TODO 4
     // before drawing, clear the old content
     document.getElementById("pyramid").innerHTML = '';

     // for each row....
     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += String.fromCharCode(160);
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += "#";
         }

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
