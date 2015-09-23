const numValsRgb = 3;
const maxRgb = 255;

$("a").on("mouseover", function() {
	var rgbArray = randomRgb();
	$(this).css("color", "rgb(" + rgbArray[0] + "," + rgbArray[1] + "," + rgbArray[2] + ")");
});

function randomRgb() {
	var rgbArray = [];

	for (var i = 0; i < numValsRgb; i++) {
		rgbArray.push(Math.floor(Math.random()*maxRgb));
	}

	return rgbArray;
}
