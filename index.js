// Write your solution in this file!
const employee =  {
    name: ['name'],
    streetAddress: ['streetAddress']
}

function updateEmployeeWithKeyAndValue(employee, name, streetAddress){
    const newEmployee = {...employee}
    newEmployee[name]=streetAddress;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress){
    employee[name]=streetAddress;

    return employee;
}

function deleteFromEmployeeByKey(employee, name){
    const newEmployeeKey = {...employee}
    delete newEmployeeKey.name;

    return newEmployeeKey;

}

function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name;

    return employee;

}
