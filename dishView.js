//for selectDishscreen
var DishView = function (container, model) {
	this.dishes=container.find("#dishes");
	var p = (model.getAllDishes("main dish"));

	var html="";
	for (j=0; j<=p.length-1; j++) {

		html += "<div class='im'><img id='dish' src='"+p[j].image+"' class='img-polaroid' width='115px' height='115px' >";
		html += "<div id='box'><span>"+p[j].name+"</span></div><div id='box2'><span>"+p[j].description+"</span></div></div>";
	}

	this.dishes.html(html);
	
}
