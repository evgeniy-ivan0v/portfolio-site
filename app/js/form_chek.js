function FormChek (elem, callback) {
	var elem, elements, status;
	var callback = callback || elem.submit;
	elem = this.elem = elem;
	//получаем нужные элементы формы
	elements = this.elements = this._elemFilter(elem.elements);
	//проверяем статус
	status = this.status = this._chekStatus(elements);

	status ? callback() : this._chekElem(elements);
};

FormChek.prototype._elemFilter = function (elems) {
	return [].filter.call(elems, function (item) {
			return item.getAttribute('type') !== "submit" && 
				   item.getAttribute('type') !== "reset";
	});
};
FormChek.prototype._chekStatus = function (elements) {
	return [].every.call(elements, function (item) {
		return !!item.value && item.getAttribute("placeholder") !== item.value;
	});
};
FormChek.prototype._chekElem = function (elements) {
	var self = this;
	[].forEach.call(elements, function (item) {
		if(!item.value || item.getAttribute("placeholder") === item.value) {
			self._setError(item);
		};
	});
};
FormChek.prototype._setError = function (elem) {
	var self = this;
	elem.closest('.form_row').classList.add("error");
	elem.addEventListener('focus', function (event) {
		var elem = event.target || this;
		self._removeError(elem)
	});
};
FormChek.prototype._removeError = function (elem) {
	elem.closest('.form_row').classList.remove("error");
};
FormChek.prototype.removeErrorAll = function () {
	var errorElems = this.elem.querySelectorAll('.error');
	 if(errorElems.length > 0){
		[].forEach.call(errorElems, function (item) {
			item.classList.remove('error');
		});	
	};
};