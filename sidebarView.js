//for selectdishscreen and dishscreen
var SidebarView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dName = container.find("#dName");
	this.cost = container.find("#cost");
	this.tot=container.find("#tot");
	this.number = container.find("#number");
	var dish=model.getSelectedDish('main dish');

	this.numberOfGuests.html(model.getNumberOfGuests());
	this.dName.html(model.getDish(dish).name);
	this.cost.html(model.getTotalDishPrice(100));
	this.tot.html(model.getTotalDishPrice(100));
	this.number.html(model.getNumberOfGuests());
	
}
