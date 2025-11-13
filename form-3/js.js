function submitFormData(event) {

    event.preventDefault();

    const form_elements = event.target;
    
    // Validate
    for (let i = 0; i < form_elements.length; i++) {

        // Select current input and current message
        let current_input = form_elements[i];
        let current_input_message = current_input.nextElementSibling;

        if (checkRequired(current_input, current_input_message)) {
            if (checkMinlength(current_input, current_input_message)) {
                if (checkMaxlength(current_input, current_input_message)) {
                    if (validateEmail(current_input, current_input_message)) {
                        isNumeric(current_input, current_input_message);
                    }
                }
            }
        }
    }


    // Dispaly Form Data
    const form_data_wrapper = document.getElementById('form_data');

    var error_elements = document.querySelectorAll('span.has_error');

    if (error_elements.length == 0) {

        form_data_wrapper.style.display = 'block';
        form_data_wrapper.innerHTML = "";

        let title = document.createElement("h1");
        title.textContent = "معلومات شما: "
        form_data_wrapper.appendChild(title);

        for (let i = 0; i < form_elements.length; i++) {
            let new_data = document.createElement("div");
            new_data.textContent = form_elements[i].value;
            form_data_wrapper.appendChild(new_data);
        }
    } else {
        form_data_wrapper.style.display = 'none';
        form_data_wrapper.innerHTML = '';
    }



}

function validateEmail(current_input, current_input_message) {
    if (current_input.getAttribute('type') == "email") {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(current_input.value)) {
            current_input_message.classList.add('has_error');
            current_input_message.innerText = current_input.getAttribute('data-label') + ' نامعتبر می باشد';
            return false;
        } else {
            current_input_message.classList.remove('has_error');
            current_input_message.innerText = "";
            return true;
        }
    }

    return true;
}

function isNumeric(current_input, current_input_message) {

    if (current_input.getAttribute('type') == "number") {
        if (isNaN(current_input.value) && current_input.value !== '') {
            current_input_message.classList.add('has_error');
            current_input_message.innerText = current_input.getAttribute('data-label') + '  باید عدد باشد';
            return false;
        } else {
            current_input_message.classList.remove('has_error');
            current_input_message.innerText = "";
            return true;
        }
    }

    return true;
}

function checkRequired(current_input, current_input_message) {
    if (current_input.hasAttribute('required')) {
        if ((current_input.value == "") || (current_input.getAttribute('type') == "checkbox" && !current_input.checked)) {
            current_input_message.classList.add('has_error');
            current_input_message.innerText = current_input.getAttribute('data-label') + ' ضروری است.';
            return false;
        } else {
            current_input_message.classList.remove('has_error');
            current_input_message.innerText = "";
            return true;
        }
    }

    return true;
}

function checkMinlength(current_input, current_input_message) {
    if (current_input.hasAttribute('min')) {
        if (current_input.value.length < current_input.getAttribute('min') && current_input.value != '') {
            current_input_message.classList.add('has_error');
            current_input_message.innerText = current_input.getAttribute('data-label') + '  نباید کمتر از ' + current_input.getAttribute('min') + ' حرف باشد';
            return false;
        } else {
            current_input_message.classList.remove('has_error');
            current_input_message.innerText = "";
            return true;
        }
    }

    return true;
}

function checkMaxlength(current_input, current_input_message) {
    if (current_input.hasAttribute('max')) {
        if (current_input.value.length > current_input.getAttribute('max') && current_input.value != '') {
            current_input_message.classList.add('has_error');
            current_input_message.innerText = current_input.getAttribute('data-label') + '    نباید بیشتر از ' + current_input.getAttribute('max') + ' حرف باشد';
            return false;
        } else {
            current_input_message.classList.remove('has_error');
            current_input_message.innerText = "";
            return true;
        }
    }

    return true;
}
