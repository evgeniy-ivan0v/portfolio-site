function inputFileWork() {
	$(".input_file").on('change', function () {
		var elemLabel = $(this).siblings(".input_file_text"),
			text = elemLabel.data('text'),
		    str = $(this).val(),
	    	textNew = str.lastIndexOf('\\') >= 0 ?
	    			  str.slice(str.lastIndexOf('\\')+1) : 
	    			  text;

	   	elemLabel.text(textNew);

	   	textNew !== text ? elemLabel.addClass('active') : elemLabel.removeClass('active');
	});
};