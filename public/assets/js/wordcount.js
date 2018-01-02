$(document).ready(function() {

	var word_count_one = parseInt(200),
		word_count_two = parseInt(200);

	$('#one').on('keyup', function() {
		var words = this.value.match(/\S+/g).length;

		if (words > 200) {
			var trimmed = $(this).val().split(/\s+/, 200).join(" ");
      		$(this).val(trimmed + " ");
		} else {
			$('.one_word_count').text(word_count_one - words);
		}
	});

	$('#two').on('keyup', function() {
		var words = this.value.match(/\S+/g).length;

		if (words > 200) {
			var trimmed = $(this).val().split(/\s+/, 200).join(" ");
      		$(this).val(trimmed + " ");
		} else {
			$('.two_word_count').text(word_count_two - words);
		}
	});

	$('#reset').on('click', function() {

		$('.two_word_count').text(word_count_one);
		$('.one_word_count').text(word_count_two);

	});

});