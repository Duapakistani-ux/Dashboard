// =======================
// Constructor Function
// =======================

function Student(name, age, course){

  this.name = name;
  this.age = age;
  this.course = course;

  // Object Method
  this.introduce = function(){
    return "Hi, my name is " + this.name;
  };

  // Object Method
  this.courseDetails = function(){
    return "I study " + this.course;
  };

}

// Array to store students
const students = [];

// Button Event
document.getElementById("addBtn").addEventListener("click", addStudent);

// =======================
// Add Student Function
// =======================

function addStudent(){

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const course = document.getElementById("course").value;

  if(name === "" || age === "" || course === ""){
    alert("Please fill all fields");
    return;
  }

  // Create Student Object
  const student = new Student(name, age, course);

  // Add to array
  students.push(student);

  // Display students
  displayStudents();

  // Clear fields
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("course").value = "";
}

// =======================
// Display Students
// =======================

function displayStudents(){

  const studentList = document.getElementById("studentList");

  studentList.innerHTML = "";

  students.forEach(function(student){

    studentList.innerHTML += `
    
      <div class="student-card">

        <p><strong>Name:</strong> ${student.name}</p>

        <p><strong>Age:</strong> ${student.age}</p>

        <p><strong>Course:</strong> ${student.course}</p>

        <p>${student.introduce()}</p>

        <p>${student.courseDetails()}</p>

      </div>

    `;

  });

}

// =======================
// Digital Clock
// =======================

function updateClock(){

  const now = new Date();

  document.getElementById("clock").innerHTML =
    now.toLocaleTimeString();

}

setInterval(updateClock, 1000);

updateClock();

// =======================
// Study Timer
// =======================

let seconds = 0;

setInterval(function(){

  seconds++;

  document.getElementById("timer").innerHTML = seconds;

}, 1000);

// =======================
// Auto Counter
// =======================

let counter = 0;

setInterval(function(){

  counter++;

  document.getElementById("counter").innerHTML = counter;

}, 2000);