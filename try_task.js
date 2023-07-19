
let arr = []
function getInfo(){
    // event.preventDefault()
    readData();
    
    
}
var str = ""

function readData(){
    let id = document.getElementById("id").value;
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    arr.push(id);
    arr[id] = {"name":name,"email":email};
    // var str = printData(id,email,name)
    // console.log(printData(id,email,name))
    // document.getElementById("one").innerHTML=str
    // // insertdata(arr[id])
    
}
function printData(id,email,name){
    str +=  `<tr><td>${id}<td><td>${arr[id].email}</td>  <td>${arr[id].name}</td>`
    // document.write(str);
    
    
}
function validation(){

}
function insertdata(data){
    console.log(data);
    var table = document.getElementById("list").getElementsByTagName("tbody")[0];
    
    var newrow = table.insertRow(table.length);
    console.log("table.length"+table.length);
    console.log(newrow);
    var cell0 = newrow.insertCell(0);
        cell0.innerHTML = data.email;
    console.log(data.email);
    var cell1 = newrow.insertCell(1);
        cell1.innerHTML = data.name;
}

// var obj = { 
//     id1:{"name":"nikhil","email":"nikhil@gmail.com"}
// }
// var arr = [{"name":"nikhil","email":"nikhil@"}]
// console.log(arr)
// id=1
// arr.push(id)
// arr[id]= {"name":"vijay","email":"vijay@123"};
// console.log(arr)

// console.log(arr[1].email)
console.log(arr);
