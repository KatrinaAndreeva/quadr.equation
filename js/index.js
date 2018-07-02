const a = parseInt(prompt('Enter A'));
const b = parseInt(prompt('Enter B'));
const c = parseInt(prompt('Enter C'));

function calcD(a, b, c) {
 return D = b * b - 4 * a * c;  //func for D
}


let valD = calcD(a, b, c);
alert("Your D is"); //result of calc D
alert(valD);

function root1() {
	return (-b+Math.sqrt(valD))/(2*a);
}

function root2(a, b, c) {
	return (-b-Math.sqrt(valD))/(2*a);
}
let val1 = root1(a, b, c);
let val2 = root2(a, b, c);


 if (valD < 0) {
	alert("this example has no roots");
}
else if (valD == 0) {
	alert("this example has only one root");
	alert(val1);
}
else if (valD > 0) {
	alert("this example has two roots");
	alert(val1);
	alert(val2);
}



// function root1(a, b, c) {
// 	const val1
// }
