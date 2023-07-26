async function test(){
    // console.log("A1")
    const response =  await fetch("data.json")
    // console.log("B1")
    const students = await response.json();
    // console.log(students)
    return students
}

// console.log("D1")

// let a = test()
// console.log("E1")
// console.log(a)


test().then((res)=>{
    console.log(res);
    console.log("aaa")
}).catch((err)=>{
    console.log("errrorr")
})
console.log("E1")






// function test2(){
//     return new Promise((resolve,reject)=>{
//         console.log("A2");
//         setTimeout(()=>{
//             console.log("B2");
//         },1000);
//         console.log("C2")
//     }).then(()=>{
//         console.log("i am resolve")
//     }).catch((err)=>{
//         console.error("error:"+err)
//     })
// }

// test2()
// console.log("D2")
// console.log("E2")



