
function getFormData(event){
    event.preventDefault();
    const form_elements = event.target;

    const username_element=form_elements[0];
    const lastname_element=form_elements[1];
    const fathername_element=form_elements[2];
    const email_element=form_elements[3];



    const username=username_element.value;
    const lastname=lastname_element.value;
    const fathername=fathername_element.value;
    const email=email_element.value;
    
    const username_message = username_element.nextElementSibling;
    const lastname_message = lastname_element.nextElementSibling;
    const fathername_message = fathername_element.nextElementSibling;
    const email_message = email_element.nextElementSibling;
    
    if(username==''){
        username_message.classList.add('has_error');
        username_message.innerText = "نام شما خالی است";
    }else{
        username_message.classList.remove('has_error');
        username_message.innerText = '';
    }

    if(lastname==''){
        lastname_message.classList.add('has_error');
        lastname_message.innerText = "تخلص شما خالی است";
    }else{
        lastname_message.classList.remove('has_error');
        lastname_message.innerText = '';
    }
}