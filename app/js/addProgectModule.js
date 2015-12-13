var addProgectModule = (function () {
	var modalHtmlStatus = false;
	var formChek;
	// включаем модуль
	var init = function () {
		setUpListener();
	};
	// отслеживаем события
	var setUpListener = function (){
		$(".work_new").on("click", function(e){
			event.preventDefault ? event.preventDefault() : (event.returnValue=false);
			if(modalHtmlStatus) {
				bPopupInit($(".new_progect"));
			} else {
				getModalHtml();
			};
		});

	};
	var setUpNewListener = function (){
		$(".progect_form").on('submit', function(e) {
			event.preventDefault ? event.preventDefault() : (event.returnValue=false);
			formChek = new FormChek(this, callback);
		});
		$('.close_link').on('click', function(){
			event.preventDefault ? event.preventDefault() : (event.returnValue=false);
			formChek ? formChek.removeErrorAll() : null;
		});
		inputFileWork();
	};

	// включаем bPopup
	var bPopupInit = function (elem) {
		elem.bPopup({
			closeClass:'close_link'
		});
	};

	// получаем HTML с сервера
	var getModalHtml = function () {
		$.ajax({
			url: "../new_progect.html",
			success: function (data){
				addHtml(data);
			},
			dataType: "HTML"
		});
	};
	// добавляем HTML на страницу
	var addHtml = function (html) {
		$('body').append(html);
		setUpNewListener();
		bPopupInit($(".new_progect"));
		modalHtmlStatus = true;
	};
	var callback = function () {
		console.log("форма отправлена");
	}
	return {
		init: init
	};
})();
addProgectModule.init();