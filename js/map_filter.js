// Both map and filter and returns a new array but filter returns only when it  get as true or false

var array = [1,2,3,4,5,6]


//map
var a1 = array.map((el)=>
{
    return el*2;
})
console.log(a1)
// as now we can see it returns all value my multiplying them with 2

var a2 = array.filter((el)=>{
    return (el%2==0);
}).map((el)=>{
    return el*2;
})
console.log(a2)
// with these we can say that filter is condition specific that it returns based on the given condition
// in this case we are applying filter but it will return only true so we can't manipulate the oringin value

// conclusion they both create an array but filter will always the value that is present inside original array
// where as with map we can modify the existing value of array and can store in our new array

// in both the cases the original array will remain unmodified

var modifiedAndFilteredArray = array
  .map((el) => {
    return el % 2 === 0 ? el * 2 : el;
  })
  .filter((el) => {
    return el % 2 === 0;
  });

console.log(modifiedAndFilteredArray);