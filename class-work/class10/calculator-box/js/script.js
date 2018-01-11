/*• Clicking on a "plus" box adds to the total in the center

• Clicking on a "minus" box subtracts from the total

• Clicking the red box makes the background of the center box to red

• Clicking the blue box makes the background of the center box to blue

• Clicking the center box will make its background white and reset the value inside to zero

*/
var total=0;

$('#a10').click(a10Function);

function a10Function () {
	$('#out').html(total +10);
}

$('#a20').click(a20Function);

function a20Function () {
	
}
}

$('#a30').click(a30Function)

function a30Function () {
	//do something
}

$('#n10').click(n10Function)

function n10Function () {
	//do something
}

$('#n20').click(n20Function)

function n20Function () {
	//do something
}
$('#n30').click(n30Function)

function n30Function () {
	//do something
}
$('#red').click(redFunction)

function redFunction () {
	$('#out').css('background', 'red');
}
$('#blue').click(blueFunction)

function blueFunction () {
	$('#out').css('background', 'blue');
}

$('#out').click(outFunction)

function outFunction () {
$('#out').css('background','white').html('0');
}
