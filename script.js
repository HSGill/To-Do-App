var button = document.getElementById("Enter");
var inputText =document.getElementById("userInput");

var ul =  document.getElementById("num1");


var btnClose = document.getElementsByClassName("close");
btnClose.addEventListener("click", function(){



})

button.addEventListener("click", function(){
	if (inputText.value.length>0){
	
	var li= document.createElement("div");
	li.setAttribute("class","alert alert-success ")
	var btn1= document.createElement("button");
	btn1.setAttribute("class","close");
	btn1.appendChild(document.createTextNode("x"));
	
	 li.appendChild(document.createTextNode(inputText.value));
	 li.appendChild(btn1);
	ul.appendChild(li);
	
	inputText.value ="";
	}
      
})