let counter = 1;
let getdata = () => {
  console.log("Data fetched....!", counter++);
};

let debounceFunc = (getdata, limit) => {
  let time;
  return function () {
    let context = this;
    let arg = arguments;
    clearTimeout(time);
    time = setTimeout(() => {
      getdata.apply(context, arg);
    }, limit);
  };
};
const optimizedFunc = debounceFunc(getdata, 500);

// Throttling
const mainFunc = () => {
  console.count("Throttled Function");
};

const throttle = (fn, limit) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const bettermainfunc = throttle(mainFunc, 1000);

window.addEventListener("resize", bettermainfunc);

const normalFunc = () => {
  console.count("Normal Function");
};

window.addEventListener("resize", normalFunc);
