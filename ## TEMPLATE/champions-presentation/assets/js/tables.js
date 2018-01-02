$(document).ready(function() {

	var $table1 = $('.table1'),
		$table2 = $('.table2'),
		$table3 = $('.table3');

	table1($table1);
	table2($table2);
	table3($table3);

});

var table1 = function ($table) {

	var counter = parseInt(0);

	$table.each(function() {
		$('.table1 thead tr th').each(function() {
			// console.log($(this));
			counter++;

			switch (counter) {
				case 1:
					$(this).html('Time (interval)');
					break;
				case 2:
					$(this).html('Description');
					break;
				case 3:
					$(this).html('Day');
					break;
			}

		});
	});

};


var table2 = function ($table) {

	var counter = parseInt(0);

	$table.each(function() {
		$('.table2 thead tr th').each(function() {
			// console.log($(this));
			counter++;

			switch (counter) {
				case 1:
					$(this).html('Time (interval)');
					break;
				case 2:
					$(this).html('Description');
					break;
				case 3:
					$(this).html('Day');
					break;
			}

		});
	});

};


var table3 = function ($table) {

	var counter = parseInt(0);

	$table.each(function() {
		$('.table3 thead tr th').each(function() {
			// console.log($(this));
			counter++;

			switch (counter) {
				case 1:
					$(this).html('Time (interval)');
					break;
				case 2:
					$(this).html('Description');
					break;
				case 3:
					$(this).html('Day');
					break;
			}

		});
	});

};