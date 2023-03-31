const count = true;

let countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve("There is a count value.");
  } else {
    reject("There is no count value");
  }
});
countValue
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });
///////////////////////////////////////////////////////////////////
let multi = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
})
  .then(function (result) {
    alert(result);
    return result * 2;
  })
  .then(function (result) {
    setTimeout(() => {
      alert(result);
    }, 2000);
    return result * 2;
  })
  .then(function (result) {
    setTimeout(() => {
      alert(result);
    }, result * 1000 * 2);
    return result * 2;
  });
/////////////////////////////////////////////////////////////////////
class Time {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    setTimeout(() => resolve(this.num * 2), 4000);
  }
}

new Promise((resolve) => resolve(1))
  .then((result) => {
    return new Time(result);
  })
  .then(alert);
///////////////////////////////////////////////////////////////////
