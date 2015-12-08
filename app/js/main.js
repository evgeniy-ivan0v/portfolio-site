function formChek () {
	this.elem = elem = document.getElementsByTagName("form");
	console.dir(elem)
	elem.forEach(function (item){
		item.addEventListener('submit', function () {
			console.log(this);
		})
	});
};
var formChek = new formChek();