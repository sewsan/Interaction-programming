//for dishscreen
var SelectedDishView = function (container, model) {
	this.dishes2=container.find("#dishes2");
	this.dishInfo=container.find("#numberOfGuests");
	this.dishIngred=container.find("#dishIngred");
	this.tot=container.find("#tot")
	
	var dish = (model.getDish(100));
	var ingr = dish.ingredients;
	var nr = model.getNumberOfGuests();
	var html="";
	var html2="";
	
		html += "<div id='box3'><span>"+dish.name+"</span></div><div class='im2'><img id='dish' src='"+dish.image+"' class='img-polaroid' width='100%' height='200px' >";
		html += "<div id='box4'><span>"+dish.description+"</span></div></div>";

	for (i in ingr) {
			name=ingr[i].name;
			quantity=ingr[i].quantity;
			unit=ingr[i].unit;
			price=ingr[i].price;
			html2+="<div class='row' id='ingRow'><div class='col-md-4'>"+Math.round(quantity*nr)+unit+"</div><div class='col-md-6'>"+name+"</div><div class='col-md-2'>"+"SEK "+price+"</div></div>";
		}

	this.dishes2.html(html);        
	this.dishInfo.html(model.getNumberOfGuests()); 
	this.dishIngred.html(html2);
	this.tot.html("SEK " + model.getTotalDishPrice(100));
	
}
