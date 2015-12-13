var loginFormModule = (function () {
	var formChek;
	// включаем модуль
	var init = function () {
		setUpListener();
	};
	// отслеживаем события
	var setUpListener = function (){
		$(".login_form").on('submit', function(e) {
			event.preventDefault ? event.preventDefault() : (event.returnValue=false);
			formChek = new FormChek(this, callback);
		});
	};

	var callback = function () {
		console.log("форма отправлена");
	};

	return {
		init: init
	};
})();
loginFormModule.init();
