// const screen = document.getElementById('screen')
// console.log(screen)

// const keyboard = document.getElementsByClassName('keyboard')
// console.log()

let calculator_input_Number_V = document.getElementById('calculator_input_Number');
let calculator_input_number_previews_V = document.getElementById('calculator_input_number_previews');

let calculator_input_AC_V = document.getElementById('calculator_input_AC');

let newValue = document.getElementById('delete');

let switch_btn = document.getElementById('switch-btn');

let calculator_container = document.getElementById('calculator_container');

let DisplayValue;

function display(DisplayValue){
    calculator_input_Number_V.value+=DisplayValue;

}

calculator_input_AC_V.addEventListener('click',()=>{
    calculator_input_Number_V.value="";
    calculator_input_number_previews_V.value="";
})

function displaySolve(){
    
    let eq = calculator_input_Number_V.value;

    calculator_input_number_previews_V.value=eq;

    let y= eval(eq);

    calculator_input_Number_V.value=y;
}

// delete a number 

function deleteDigit() {
    calculator_input_Number_V.value = calculator_input_Number_V.value.slice(0, -1);
}
  
// switch theme

function changeTheme(){
    
}

function changeTheme() {
    let element = document.body;
    element.classList.toggle("mode");
    calculator_container.classList.toggle("green-mode");
  }

