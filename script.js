const digit_buttons = document.querySelectorAll('.digit');
const operators_buttons = document.querySelectorAll('.operators');
const display_screen = document.querySelector('.display');
const clean = document.querySelector('.clear');
const delete_btn = document.querySelector('.delete');

//variables
let display_value = [];
let operator = '';
let just_finished_operation = false;


function add(a,b) {
	return a+b;
  };
  
function subtract(a,b) {
	return a-b;
  };
  
function multiply(a,b) {

	return a*b;
  };

function divide(a,b){
	if(b == 0){
		return 'ERROR';
	}
	return a/b;
}


// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(operator,num1,num2){
	switch(operator){
		case 'add':
			console.log(add(+num1, +num2));
			display_screen.textContent = add(+num1, +num2);
			break;
		case 'subtract':
			display_screen.textContent = subtract(+num1, +num2);
			break;
		case 'multiply':
			display_screen.textContent = multiply(+num1, +num2);
			break;
		case 'division':
			display_screen.textContent = divide(+num1, +num2);
			break;

	}

	just_finished_operation = !just_finished_operation;
}

// Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

function display(){
	if(just_finished_operation){
		display_screen.textContent = '';
		just_finished_operation = !just_finished_operation;
	}
	display_screen.textContent += this.textContent;
}

// Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.



digit_buttons.forEach(btn => {
	btn.addEventListener('click', display);

})

operators_buttons.forEach(btn =>{
	btn.addEventListener('click', function() {


		display_value.push(display_screen.textContent);
		console.log('first operand and second: ' + display_value);

		if(display_value.length ==2){
			console.log('complete operands: ' + display_value);
			operate(operator, display_value[0], display_value[1]);
			display_value = [];
			display_value.push(display_screen.textContent);
			console.log('after checked length: ' + display_value)
			stored_value = '';
			operator = this.getAttribute('class').split(' ')[1];
			return;

		}
		if(!this.getAttribute('class').includes('equal')){
			operator = this.getAttribute('class').split(' ')[1];
			display_screen.textContent = '';
		}
		else{
			console.log(display_value)
			operate(operator, display_value[0], display_value[1]);
			display_value = [];
		}
		
	})
})

clean.addEventListener('click', ()=>{
	display_screen.textContent = '';
	display_value = [];
})
delete_btn.addEventListener('click', ()=>{
	display_screen.textContent = display_screen.textContent.slice(0,-1);

})