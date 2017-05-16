function calculateArea(rad){
	return 3.14*rad*rad; 
}

function onButtonClick(){
		var area = calculateArea(7); //calling function calculateArea by passing the value of rad as argument. It will return the area of circle with radius 7. The value will be stored in area variable.
		console.log(area);
		document.getElementById("myId").innerHTML="The area of circle is "+area;
}