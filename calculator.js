let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");

let display = document.getElementById("calculator_display");
let clear = document.getElementById("clear");
let sum = document.getElementById("sum");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let calculate = document.getElementById("calculate");
let decimal = document.getElementById("decimal");


display.innerHTML = "";
let broj = 0;
let broj2 = 0;

one.addEventListener(`click`, function(){
	display.innerHTML += "1";
	broj += "1";
	broj = parseFloat(broj);
	

} );

decimal.addEventListener(`click`, function dec(event){
	let br = broj.toString();
	if (!br.includes(".")) {
	display.innerHTML += ".";
	broj += ".";
	parseFloat(broj);
	}else{
		event.stopPropagation();
	}
})

two.addEventListener("click", function(){
	display.innerHTML += "2";
	broj += "2";
	broj = parseFloat(broj);
	
} );

three.addEventListener("click", function (){
	display.innerHTML += "3";
	broj += "3";
	broj = parseFloat(broj);
	
});

four.addEventListener("click", function(){
	display.innerHTML += "4";
	broj += "4";
	broj = parseFloat(broj);
	
} );

five.addEventListener("click", function(){
	display.innerHTML += "5";
	broj += "5";
	broj = parseFloat(broj);
	
} );

six.addEventListener("click", function(){
	display.innerHTML += "6";
	broj += "6";
	broj = parseFloat(broj);
	
} );

seven.addEventListener("click", function(){
	display.innerHTML += "7";
	broj += "7";
	broj = parseFloat(broj);
	
} );

eight.addEventListener("click", function(){
	display.innerHTML += "8";
	broj += "8";
	broj = parseFloat(broj);
	
} );

nine.addEventListener("click", function(){
	display.innerHTML += "9";
	broj += "9";
	broj = parseFloat(broj);
	
} );

zero.addEventListener("click", function(){
	display.innerHTML += "0";
	broj += "0";
	broj = parseFloat(broj);
	
} );

clear.addEventListener("click", function(){
	display.innerHTML = "";
	broj = 0;
	broj2 = 0;

} );

sum.addEventListener("click", function(){
	display.innerHTML += "+";
	broj2 += broj;
	broj = "";
	calculate.addEventListener("click", function suma(){
		display.innerHTML = "";
		broj2 += broj;
		display.innerHTML =  broj2 ;
		broj2 = "";
		calculate.removeEventListener("click", suma);
	})
} );

subtract.addEventListener("click", function(){
	display.innerHTML += "-";
	broj2 = broj;
	broj = "";
	calculate.addEventListener("click", function suma(){
		display.innerHTML = ""
		broj2 -= broj;
		display.innerHTML =  broj2 ;
		broj2 = "";
		calculate.removeEventListener("click", suma);
	})
} );

multiply.addEventListener("click", function(){
	display.innerHTML += "*";
	broj2 = broj;
	broj = "";
	calculate.addEventListener("click", function suma(){
		display.innerHTML = "";
		broj2 *= broj;
		display.innerHTML =  broj2 ;
		broj2 = "";
		calculate.removeEventListener("click", suma);
	})
} );

divide.addEventListener("click", function(){
	display.innerHTML += "/";
	broj2 = broj;
	broj = "";
	calculate.addEventListener("click", function suma(){
		display.innerHTML = ""
		broj2 /= broj;
		display.innerHTML =  broj2 ;
		broj2 = "";
		if(broj == "0" || broj2 == "0"){
			display.innerHTML =  `Enter another numbers!`
		}
		calculate.removeEventListener("click", suma);
	})
});