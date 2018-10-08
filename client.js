console.log('js');

let employeeInfo = [];

class employee {
    constructor(firstName, lastName, idNumber, jobTitle, annualSalary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.jobTitle = jobTitle;
        this.annualSalary = annualSalary;
    }
}

$(document).ready(onReady);
    
function onReady(){
    console.log('jq');
    $('#submit').on('click', addEmployee);
    //$('#totalMonthly').append('<h3>Total Monthly: $' + + '</h3>');
    $('#deleteEmployee').on('click', deleteEmployee);

}



function addEmployee(){
    event.preventDefault();
    console.log('addEmployee clicked');
    let firstNameIn = $('#firstNameIn').val();
    let lastNameIn = $('#lastNameIn').val();
    let idNumberIn = $('#idNumberIn').val();
    let jobTitleIn = $('#jobTitleIn').val();
    let annualSalaryIn = $('#annualSalaryIn').val();
    let newEmployee = new employee(firstNameIn, lastNameIn, idNumberIn, jobTitleIn, annualSalaryIn);
    employeeInfo.push(newEmployee);
    console.log('new employee');
    appendEmployeeList();
    //updateMonthly();
    $('input').val('');
}

function appendEmployeeList(){
    let element = $('#employeeList');
    element.empty();
    for(let employee of employeeInfo){
        console.log(employee);
        element.append(`<tr><td>` + employee.firstName + `</td><td>` + employee.lastName + `</td><td>` + employee.idNumber + '</td><td>' + employee.jobTitle + `</td><td>` + employee.annualSalary + 
        `</td><td><button class="deleteEmployee">Delete</button></td></tr>`);
    }
}

//function updateMonthly(){
    //console.log('in updateMontly');
    //let totalMonthly = 0;
    //let outputElement = $('#totalMontly');
    //outputElement.empty();
    //for(annualSalaryIn of employeeInfo){
        //totalMonthly += Number(employee.annualSalary);
        //outputElement.append('<h3' + totalMonthly + '</h3>');
        
    //}
    //console.log('totalMontly:', totalMonthly);
//}

function deleteEmployee(){
    console.log('clicked delete');
    let selectedItem = $(this).closest('tr').find("#employeeList").text();
    console.log(selectedItem);
    for(let i = 0; i < employeeInfo.length; i++){
        if(selectedItem.includes(employeeInfo[i].firstName)){
            employeeInfo.splice(i, 1);
            $(this).closest('tr').find('#employeeList'().remove());
            return true;
        }
    }
}