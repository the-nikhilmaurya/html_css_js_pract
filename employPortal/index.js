
    let primaryToken=[];
    // event.preventDefault();
    
        const form = document.getElementById("myForm");
        form.addEventListener('submit', (event) => {
        event.preventDefault();
        // event.stopPropagation();
        // console.log(readData());

        console.log('dail')
        // var formdata = readData();
            
        // validateID(formdata.id1)
        var formdata = readData();
        insertData(formdata);
        resetForm();
        
    });

    //funtion to validate given id
    function validateID(value)
    {
        // console.log(typeof value)
        console.log("try "+Number.isInteger(parseInt(value)))

        console.log(typeof value)
        if(value == ""){
            document.getElementById("isIdValid").innerHTML="Id can't be null"
            return false;
        }
        else if(Number.isInteger(parseInt(value))==true){
            let a =  parseInt(value)
            if(check(a)==true){
                document.getElementById("isIdValid").innerHTML=""
                return true;
            }
            else{
                document.getElementById("isIdValid").innerHTML="Id exist"
                return false;
            }
        }
        else{
            document.getElementById("isIdValid").innerHTML="Id must be a integer"
            return false;
        }

        //will check in whether id is used previousaly or not
        function check(value){
            console.log("check = "+value)
            for (i in primaryToken){
                if(value == primaryToken[i]){
                    return false;
                }
            }
            return true;
        }
        
    }

    function readData()         // this will help in reading the form data
    {
        var formdata = {}
        formdata["id1"] = document.getElementById('id1').value
        formdata["name"] = document.getElementById("name").value;
        formdata["age"] = document.getElementById("age").value;
        formdata["image"]=document.getElementById("image").value;
        formdata["gender"]=document.getElementById("gender").value;
        formdata["designation"]=document.getElementById("designation").value;
        // console.log(formdata);
        return formdata;
    }

    function insertData(data)    // this will help in inserting the data in table
    {
        
        // console.log("validdation"+validateID(data.id1))
        if(validateID(data.id1)==true && validateAge(data.age)){
        
        var table = document.getElementById("myTable").getElementsByTagName("tbody")[0];          
                //[0] indicates the first tbody within the mytable
        var newRow = table.insertRow(table.length)
        console.log(table.rows.length);

        var cell0 = newRow.insertCell(0);
            cell0.innerHTML = data.id1;

        var cell1 = newRow.insertCell(1);
            cell1.innerHTML = data.name;

        var cell2 = newRow.insertCell(2);
            cell2.innerHTML = data.age;

        var cell3 = newRow.insertCell(3);
            cell3.innerHTML = data.image;

        var cell4 = newRow.insertCell(4);
            cell4.innerHTML = data.gender;
            
        var cell5 = newRow.insertCell(5);
            cell5.innerHTML = data.designation;
            
        var cell6 = newRow.insertCell(6);
            cell6.innerHTML = `<td><button type="button" class="btn btn-success">VIEW</button>
            <button type="button" class="btn btn-secondary">EDIT</button>
            <button type="button" class="btn btn-danger">DELETE</button></td>`
        primaryToken.push(data.id1)
        }
        else{
            return console.log("hi");
        }

    }

    function validateAge(value)
    {
        if(value==""){
            document.getElementById('isAgeValid').innerHTML="";
            return true;
        }
        else if(Number.isInteger(parseInt(value))==true){
            let a =  parseInt(value)
            if(a>=18 && a<=60){
                document.getElementById('isAgeValid').innerHTML="";         
                return true;
            }
            else{
                document.getElementById('isAgeValid').innerHTML="age must be within 18 and 60";
            }
        }
        else{
            document.getElementById('isAgeValid').innerHTML="Age must be Integer";
        }
    }



    // trypart
    // if value.parse
        // if(value == ""){

        // }
        // var table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
        // for(i=0;i<table.rows.length;i++){
        //     console.log("value = "+table.rows[i].cells[0].innerText==value)
        //     if(table.rows[i].cells[0].innerText==value){
        //         document.getElementById("isIdValid").innerHTML="ID is used"
        //         return false;
        //     }
        // } 