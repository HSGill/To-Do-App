var button = document.getElementById("Enter");
var inputText =document.getElementById("userInput");

var ul =  document.getElementById("num1");


button.addEventListener("click", function(){
	if (inputText.value.length>0){
	
	var li= document.createElement("li");
	li.appendChild(document.createTextNode(inputText.value));
	
	ul.appendChild(li);
	inputText.value ="";
	}
      
})