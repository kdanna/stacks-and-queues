var arr1 = ["(", ")", "(", ")"];
var arr2 = ["(", ")", "(", ")", ")"];
var arr3 = ["(", ")", "(", ")"];
var arr4 = [")", "(", ")"];

//make a stack
//total the stack
//return outliers
//put stuff into the stack
function stackHug (array){
var stack = [];
var total = array.length;
	for(var i = 0; i < total; i++ ){
		var currentElement = array.shift();
		if (currentElement === "(") {
			stack.unshift(currentElement);
			console.log(stack);
			}
		else if (currentElement === ")" && stack.length === 0){
				return "right wins";
			}
			else {
				stack.shift();
			}
		}
	if (stack.length === 0){
		console.log("tie");
		return "it's a tie";
	}else {
		console.log("left wins");
		return "left wins";	
}
}

stackHug(arr1);



