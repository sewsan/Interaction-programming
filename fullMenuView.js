//fullMenuView Object constructor
var FullMenuView = function (container, model) {
	this.dishes=container.find("#dishes");
	this.totcost=container.find("#totcost");

	prutt=model.getFullMenu();
	html="";

	for (i in prutt) {

		html += "<div class='im'><img id='dish' src='"+prutt[i].image+"' class='img-polaroid' width='115px' height='115px' >";
		html += "<div id='box'><span>"+prutt[i].name+"</span></div><div id='costdish'><span><b>"+model.getTotalDishPrice(prutt[i].id)+"</span> SEK</b></div></div>";	}
	
	this.dishes.html(html);
	this.totcost.html(model.getTotalMenuPrice() + " SEK");
	
}
