// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employees = [];
// Collect employee data
const collectEmployees = function() {
  let addEmployee = true;
//Add while loop and isNan function
  while (addEmployee) {
      let firstName = prompt("Enter first name:");
      let lastName = prompt("Enter last name:");
      let salary = parseInt(prompt("Enter salary:")); 

      if (!isNaN(salary)) {
        employees.push({firstName, lastName, salary});
      } else {
        alert ("Enter a numeric salary");
      }
      addEmployee = confirm("Do you want to add another employee?");
  }
  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
      let totalSalary = 0;
      for(let i = 0; i < employeesArray.length; i ++) {
        console.log(i);
        const employee = employeesArray [i];
        const salary = employee.salary; 
        totalSalary += salary;        
      }
      const averageSalary = totalSalary / employeesArray.length;
      console.log(averageSalary);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
    const randomNum = Math.floor(Math.random () * employeesArray.length);
    const employee = employeesArray [randomNum];
    console.log(employee);
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
