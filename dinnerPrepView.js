//dinnerPrepView Object constructor
var DinnerPrepView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.dishes = container.find("#dishes");
	prutt=model.getFullMenu();
	html="";

	for (i in prutt) {

	html += "<div id='prepBox'><div class='row'><div class='col-md-2'><img id='prepImage' src='"+prutt[i].image+"'></div><div class='col-md-3'><div class='row'><span style='font-size:150%'><b>"+prutt[i].name.toUpperCase()+"<br/></b></span></div><div class='row'><span>"+prutt[i].description+"</span></div></div><div class='col-md-1'/><div class='col-md-4'><p style='font-size:120%'><b>PREPARATION</b></p><span>"+prutt[i].description+"</span></div><div class='col-md-3'/></div><div class='row'><div class='col-md-6'/><div class='col-md-5'><span>"+prutt[i].description+"</span></div></div></div>";
	}
	
	this.dishes.html(html);
	
}
