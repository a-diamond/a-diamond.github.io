/*this is my jquery file
1) When a user hovers over any nav bar items, create a highlight effect*/
$('.nav-link').hover(){
	$('this').css('background', 'yellow');
}

/* 2) When a user clicks on a physician headshot, pop-up their bio*/
 $('.fox-bio').click() {
$('#fox-bio').slideToggle();
 }

$('.diamond-bio').click() {
$('#diamond-bio').slideToggle();
 }

$('.rosenberg-bio').click() {
$('#rosenberg-bio').slideToggle();
 }

$('.conigliari-bio').click() {
$('#conigliari-bio').slideToggle();
 }

$('.okunola-bio').click() {
$('#okunola-bio').slideToggle();
 }

$('.alias-bio').click() {
$('#alias-bio').slideToggle();
 }
