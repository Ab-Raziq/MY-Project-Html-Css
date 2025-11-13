// Calcuator Input or Output Box
const input_output_box = document.querySelector(".input_output_box");

// Calcluator Buttons
const cal_btns = document.querySelectorAll(".cal_btns");

// Clear Button
const clearBtn = document.querySelector(".btn_clear");

// Eqaul Button
const equalBtn = document.querySelector(".equal");

// Delete each number
const deletaBtn = document.querySelector(".btn_delete");


cal_btns.forEach(val => {
    val.addEventListener("click", () => {
        input_output_box.value += val.value;
    })
});


// Clear Button
clearBtn.addEventListener("click", () => {
    input_output_box.value = "";
});

// Calaculate Final Result
equalBtn.addEventListener("click", () => {
    input_output_box.value = eval(input_output_box.value);
});

// Delete Button
deletaBtn.addEventListener("click", () => {
    input_output_box.value = input_output_box.value.slice(0, -1);
});

