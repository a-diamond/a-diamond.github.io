$('#inputFBtn').click(convert)
function convert() {
	var value = parseInt($('#inputF').val());
	$('#first').html(value);
	var value = value -32 / 1.8;
	$('#here').html(value);

	if (value > 32) {
		$('body').css('background', 'red');
	} else if (value < 0) {
		$('body').css('background', 'blue');
	}
}

$('#inputCBtn').click(convert2)
function convert2() {
	var value = parseInt($('#inputC').val());
	$('#here').html(value);
	var value = value * 1.8 + 32;
	$('#first').html(value);

	if (value > 32) {
		$('body').css('background', 'red');
	} else if (value < 32) {
		$('body').css('background', 'blue');
	}
}