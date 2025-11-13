






let students = [];





const tablebody = document.querySelector('.student_table tbody');

showStudent();

function showStudent(){
	
	students = getStudentsFromLocalStorage();

	
    let tableRow="";
    let conunter=1;
    for(i=0; i<students.length; i ++){
        tableRow += "<tr><td>" + conunter + "</td><td>" + students[i].name +"</td><td>" + students[i].age + "</td><td><button  class='btn btn-danger' onClick='deleteItem(" + i + ")'>حذف</button><button  class='btn btn-success mx-3' onClick='editItem(" + i + ")'>ادیت</button></td></tr>"
        conunter++
    }
    tablebody.innerHTML=(tableRow);
}


function AddNewStudent(){
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    if(name==="" ||age===""){
        alert("لطفا اسم خود را وارد کنید");
    }else{
        const student = { name: name, age: age };
		
		let students = getStudentsFromLocalStorage();
		students.push(student);
		
		setStudentsToLocalStorage(students);
       
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        showStudent();
    }
}

function getStudentsFromLocalStorage(){
	let current_students = localStorage.getItem('students');
	if(current_students!=null){
		
		current_students =  JSON.parse(current_students);
	}else{
		current_students = [];
	}
	return current_students;
}

function setStudentsToLocalStorage(students){
	let current_students = JSON.stringify(students);
	localStorage.setItem('students', current_students);
}

function removeStudentFromEnd(){
    
	
	let students = getStudentsFromLocalStorage();
	
	students.pop();
	
	setStudentsToLocalStorage(students);
		
    showStudent();
}

function removeStudentFromStart(){
	
	let students = getStudentsFromLocalStorage();
	
	students.shift();
	
	setStudentsToLocalStorage(students);
	
    
    showStudent();
}

function deleteItem(index){
	
	let students = getStudentsFromLocalStorage();
	
    students.splice(index , 1);
	
	setStudentsToLocalStorage(students);
	
    showStudent();
}

function editItem(index){
    document.getElementById('name').value = students[index].name;
    document.getElementById('age').value = students[index].age;

    document.getElementById('index_for_edit').value = index;

    document.getElementById('btn_update').style.display = "block";
    document.getElementById('btn_add').style.display = "none";
}

function updateStudent(){
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;

    let index = document.getElementById('index_for_edit').value;

    if(name==="" ||age===""){
        alert("لطفا اسم خود را وارد کنید");
    }else{
        const studnet = { name: name, age: age };
        
		let students = getStudentsFromLocalStorage();
		students[index] = studnet;
	
		setStudentsToLocalStorage(students);
		
        

        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('index_for_edit').value = '';

        document.getElementById('btn_update').style.display = "none";
        document.getElementById('btn_add').style.display = "block";

        showStudent();
    }
}




let employees = [];

const emp_table = document.getElementById('employee_table');


fetch('employee.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        employees = data;
		console.log(employees)
			let tableRow="";
			let conunter=1;
			for(let i=0; i<employees.length; i ++){
				
				tableRow += "<tr><td>" + conunter + "</td><td>" + employees[i].firstName +"</td><td>" + employees[i].lastName + "</td></tr>"
				conunter++
			}
			emp_table.innerHTML = (tableRow);
			})
    .catch(error => {
        console.log('There has been a problem with your fetch operation:', error);
    });
