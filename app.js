console.log('have fun !');
var obj = {
	firstName : null,
	lastName  :null ,
	city : null
}


$("input").change(function(){
		
		var inp = $(this).attr("name");
		if(inp === "first_name"){
			obj.firstName = $(this).val();
		}
		if(inp === "last_name"){
			obj.lastName = $(this).val();
		}
		if(inp === "city"){
			obj.city = $(this).val();
		}
		console.log(obj);
		$("#username").text(obj.firstName+" "+obj.lastName)
	
});