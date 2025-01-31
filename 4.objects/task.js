function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student("Mike", "male", 25);
let student2 = new Student("Rick", "male", 29);
let student3 = new Student("John", "male", 30);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [];
  }

  this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  return avg = sum / this.marks.length
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.exclude = reason;
}


