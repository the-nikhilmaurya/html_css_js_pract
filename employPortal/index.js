
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


    function validateID(value)
    {
        var table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
        for(i=0;i<table.rows.length;i++){
            console.log("value = "+table.rows[i].cells[0].innerText==value)
            if(table.rows[i].cells[0].innerText==value){
                document.getElementById("isIdValid").innerHTML="ID is used"
                return false;
            }
        }    
        return true;     
        
    }

    function readData()         // this will help in reading the form data
    {
        var formdata = {}
        formdata["id1"] = document.getElementById('id1').value;
        primaryToken.push(formdata["id1"]); 

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
        if(validateID(data.id1)){
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
        }
        else{
            return;
        }

    }

    function resetForm()
    {
        document.getElementById('id1').innerText=""
    }