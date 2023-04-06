// function student(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let student1 = new student("bhagvanji", 21);
// console.log(student1);

// student.prototype;
// console.log(student.prototype);
// console.log(student1.prototype);
// console.log(student1.__proto__);
// console.log(student.prototype === student1.__proto__);

let User = function (username, id, role) {
  this.username = username;
  this.id = id;
  this.role = role;
  this.work = function () {
    console.log(this.username + " working as " + this.role);
  };
};
User.prototype.details = function () {
  console.log("I'm " + this.username + " and my id is: " + this.id);
};
let user1 = new User("dhara", 22, "HR");
console.log(user1);
user1.work();
user1.details();
