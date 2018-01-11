// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

/*$('#first').click(swapCity1);
function swapCity1 () {
	$('#bigimage').attr('src', 'img/1.jpg');
}

$('#second').click(swapCity2);
function swapCity2 () {
	$('#bigimage').attr('src', 'img/2.jpg');
}
$('#third').click(swapCity3);
function swapCity3 () {
	$('#bigimage').attr('src', 'img/3.jpg');
}
$('#fourth').click(swapCity4);
function swapCity4 () {
	$('#bigimage').attr('src', 'img/4.jpg');
}*/

$('.thumb').click(swapCity);
function swapCity () {
	var imageUrl = $(this).attr('src');
	$('#bigimage').attr('src', imageUrl);
}

