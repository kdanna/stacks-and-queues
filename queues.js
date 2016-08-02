// **Example**
//total is 9004.29

var q = [
  { name: 'banana',  price: 0.29 },
  { name: 'smoothie', price: 4.00 },
  { name: 'car', price: 10000 },
  { name: 'cake',  price: 3.29 },
  { name: 'beets', price: 4.00 },
  { name: 'bread', price: 1.00 },
  { name: 't-shirt',  price: 6.29 },
  { name: 'jam', price: 4.00 },
  { name: 'peanuts', price: 0.59 },
  { name: 'apples',  price: 1.29 },
  { name: 'candy', price: 4.00 },
  { name: 'kiwis', price: 1.50 },
  { name: 'salmon', price: 9.00 },
  { name: 'jacket', price: 200 },
  { name: 'kite',  price: 9.29 },
  { name: 'pants', price: 50 },
  { name: 'blanket', price: 150 },
  { name: 'ring',  price: 900 },
  { name: 'belt', price: 90.00 },
  { name: 'sunglasses', price: 100 },
];

// loop through var q
// array to hold new queue of values - newArr
// if q[i] % 3 === 0 then access q[i].price * 90%, then push into newArr
// else if q[i] % 5 === 0 then access q[i].price * 80%, then push into newArr
// else if q[i] % 5 && % 3 === 0 then access q[i].price * 70%, then push into newArr
// else push original into newArr

function calculateTotal(array){
	var discountArray = [];
	var counter = 0;
	var total = 0;
while (array.length > 0){
var current_element = array.shift();
  counter++;
  if (counter % 3 === 0){
  	discountArray.push(current_element.price * .9);
  }
  else if (counter % 5 === 0){
  	discountArray.push(current_element.price * .8);
  }
  else if (counter % 15 === 0) {
  	discountArray.push(current_element.price * .7);
  }
  else{
  	discountArray.push(current_element.price);
  }
}
	for(var i = 0; i< discountArray.length; i++){
		total += discountArray[i];
	}
	console.log(total);
}
calculateTotal(q);


