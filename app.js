$(function() {
	//We instantiate our model
	var model = new DinnerModel();	
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"), model);
	var dishView = new DishView($("#dishView"), model);
	var sidebarView = new SidebarView($("#sidebarView"), model);
	var selectedDishView = new SelectedDishView($("#selectedDishView"), model);
	var dinnerPrepView = new DinnerPrepView($("#dinnerPrepView"), model);
	var fullMenuView = new FullMenuView($("#fullMenuView"), model);
	var homeScreenView = new HomeScreenView($("#homeScreenView"),model);

});
