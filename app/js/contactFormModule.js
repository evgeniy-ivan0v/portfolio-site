var contactFormModule = (function () {
	var formChek;
	// включаем модуль
	var init = function () {
		setUpListener();
	};
	// отслеживаем события
	var setUpListener = function (){
		$(".contact_form").on('submit', function(e) {
			event.preventDefault ? event.preventDefault() : (event.returnValue=false);
			formChek = new FormChek(this, callback);
		});
		$('.reset_btn').on('click', function(){
			formChek ? formChek.removeErrorAll() : null;
		});
	};

	var callback = function () {
		console.log("форма отправлена");
	};

	return {
		init: init
	};
})();
contactFormModule.init();