functionFactory;
function functionFactory(fname, age) {
  return {
    fname: fname,
    age: age,
    intro: function () {
      console.log(`hello, i am ${fname} and i'm ${age} years old`);
    },
  };
}
const myself = functionFactory("bhagvanji", 22);
console.log(myself);
console.log(myself.intro());
