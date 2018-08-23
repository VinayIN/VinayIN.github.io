function popAlert(toggle){
	if(toggle==1){
		alert("Link is under construction!!!");
		alert("Link is under construction!!!\n\t\t Sorry...");
	}
	else if(toggle==0){
	}
	else
	{
		alert("Link Broken");
	}
}

$(document).ready(function(){
    $('font[data-toggle="tooltip"]').tooltip({ 
    	title: "final-year undergrad",
    	trigger: "hover"});   
});
