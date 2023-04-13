class User {
  constructor(fname, city) {
    this.fname = fname;
    this.city = city;
  }
  greet() {
    console.log("Namaste!, I'm", this.fname);
  }
  native() {
    console.log("I'm from", this.city);
  }
}
let user1 = new User("bhagvanji", "rajkot");
let user2 = new User("dhara", "rajkot");
user1.greet();
user1.native();
user2.greet();  
user2.native();
