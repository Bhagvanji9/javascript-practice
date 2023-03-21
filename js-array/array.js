// simple array example
const array = ['hii','i','bhagvanji','nakum']
console.log(array.length); //give array length
console.log(array);
console.log(array[2]);
array[1]= 'I';

//multidimensional array 
const random = ['tree', 795, [00, 11, 22]];
console.log(random[2][1]);// output:11

//push and pop
const array1=[1,2,3,4,5,6]
array1.pop(); 
const popValue=  array1.pop(); 
array1.push(5);

//check variable is an array or not:
const fullname={ 
    fname:'bhagvanji',
    lname:'nakum',         
 }
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(typeof fullname);
console.log(typeof fruits);
console.log(Array.isArray(fruits));
console.log(Array.isArray(fullname));

// sorting
fruits.sort();
fruits.reverse();

const sortNum = [13, 8,20,1,5]
sortNum.sort(function(a, b){return a - b});
sortNum.sort(function(a, b){return b - a});


//Array iterate Methods

// map
const MethodsArray = [13,14,5,6]
function Amethod(element) {
    return element + 15;  
}
const newMethodsArray=MethodsArray.map(Amethod);

//filter
function check(num) {
    return num>=10;
}
const checknum = MethodsArray.filter(check);
