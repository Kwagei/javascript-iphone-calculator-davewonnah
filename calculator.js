// const screen = document.getElementById('screen')
// console.log(screen)

// const keyboard = document.getElementsByClassName('keyboard')
// console.log()

let calculator_input_Number_V = document.getElementById('calculator_input_Number');
let calculator_input_number_previews_V = document.getElementById('calculator_input_number_previews');

let calculator_input_AC_V = document.getElementById('calculator_input_AC');

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

// switch theme section

const modes = () =>{
    body.calculator_iphone.switch('white')
}

switch_bgColor.addEventListener('click',modes)