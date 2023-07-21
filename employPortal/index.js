
    let primaryToken=[];
    // event.preventDefault();
    
    //     const form = document.getElementById("myForm");
    //     form.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     // event.stopPropagation();
    //     // console.log(readData());
    //     // var formdata = readData();
            
    //     // validateID(formdata.id1)
    //     var formdata = readData();
        
    //     insertData(formdata);
    // });


    function inputForm(){
        event.preventDefault();
        var formdata = readData();
        insertData(formdata);
    }    


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

    function validateName(name){
        if(name == "")
        {
            document.getElementById("isNameValid").innerHTML="Name is required"
            document.getElementById("isNameValid_edit").innerHTML="Name is required"
            return false
        }
        else
        {
            document.getElementById("isNameValid").innerHTML=""
            document.getElementById("isNameValid_edit").innerHTML=""
            return true;
        }
    }

    function validateGender(gender){
        if(gender == "select"){
            document.getElementById("isGenderValid").innerHTML="select gender"
            document.getElementById("isGenderValid_edit").innerHTML="select gender"
            return false
        }
        else{
            document.getElementById("isGenderValid").innerHTML=""
            document.getElementById("isGenderValid_edit").innerHTML=""
            return true
        }
    }

    function validateDesg(desg){
        if(desg == "select"){
            document.getElementById("isDesgValid").innerHTML="select Designation"
            document.getElementById("isDesgValid_edit").innerHTML="select Designation"
            return false
        }
        else{
            document.getElementById("isDesgValid").innerHTML=""
            document.getElementById("isDesgValid_edit").innerHTML=""
            return true
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
        if(validateID(data.id1) && validateAge(data.age)  && validateName(data.name) && validateGender(data.gender) && validateDesg(data.designation)){
        
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
            cell3.className="imgHide"
    

        var cell4 = newRow.insertCell(4);
            cell4.innerHTML = data.gender;
            
        var cell5 = newRow.insertCell(5);
            cell5.innerHTML = data.designation;
            
        var cell6 = newRow.insertCell(6);
            cell6.innerHTML = `<td>
            <button type="button" onclick="onView(this)"  class="btn btn-success">VIEW</button>
            <button type="button" onclick="onEdit(this)"   class="btn btn-secondary">EDIT</button>
            <button type="button" onclick="onDelete(this)" class="btn btn-danger">DELETE</button></td>`
        primaryToken.push(data.id1)
        }
        else{
            return console.log("there might be some error");
        }

    }

    function validateAge(value)
    {
        if(value==""){
            document.getElementById('isAgeValid').innerHTML="Age required";
            document.getElementById('isAgeValid_edit').innerHTML="Age required";
            return false;
        }
        else if(Number.isInteger(parseInt(value))==true){
            let a =  parseInt(value)
            if((a >= 15 && a <=35) || (a >= 45 && a <= 65)){
                document.getElementById('isAgeValid').innerHTML="";         
                document.getElementById('isAgeValid_edit').innerHTML="";         
                return true;
            }
            else{
                document.getElementById('isAgeValid').innerHTML="age must be within 15 to 35 and 45 to 65";
                document.getElementById('isAgeValid_edit').innerHTML="age must be within 15 to 35 and 45 to 65";
                return false;
            }
        }
        else{
            document.getElementById('isAgeValid').innerHTML="Age must be Integer";
            document.getElementById('isAgeValid_edit').innerHTML="Age must be Integer";
            return false;
        }
    }


    function onDelete(target)            // to delete the selected row
    {
        
        var row = target.parentNode.parentNode;
        
        var table = row.parentNode;
      
        table.removeChild(row);
        // console.log(primaryToken)
    }

    // to traverse through table cell index
    var idx = null;
    console.log("idx befoer= "+idx)

    
    function onEdit(value)      // edit section here
    {
        idx=null
        document.getElementById("editable").style.display='block';
        document.getElementById("editable").style.width="400px";
        console.log(value)
        var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
        var row = value.parentNode.parentNode;
        // console.log(row.rowIndex)

        idx = row.rowIndex-1;
        document.getElementById("edit_id1").value = table.rows[idx].cells[0].innerText
        document.getElementById("edit_name").value = table.rows[idx].cells[1].innerText
        document.getElementById("edit_age").value = table.rows[idx].cells[2].innerText
        document.getElementById("edit_image").value = table.rows[idx].cells[3].innerText
        document.getElementById("edit_gender").value = table.rows[idx].cells[4].innerText
        document.getElementById("edit_designation").value = table.rows[idx].cells[5].innerText

        console.log("idx after= "+idx)
    }


    function update()           //once edited data is updated here
    {
        event.preventDefault();
        // console.log("idx update= "+idx)
        var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
        
        table.rows[idx].cells[1].innerText=document.getElementById("edit_name").value
        table.rows[idx].cells[2].innerText=document.getElementById("edit_age").value
        if(validateAge(document.getElementById("edit_age").value)==true){
            table.rows[idx].cells[3].innerText=document.getElementById("edit_image").value
            table.rows[idx].cells[4].innerText=document.getElementById("edit_gender").value
            table.rows[idx].cells[5].innerText=document.getElementById("edit_designation").value
            document.getElementById("editable").style.display='none';
        }else{
        document.getElementById("editable").style.display='block';

        }
        // console.log(table.rows[idx].cells[0])
        // document.getElementById("editable").style.display='none';
    }


   
    function onView(target)      //view section
    {
        var cellindx=null
        document.getElementById("view").style.display='block';
        var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
        var row = target.parentNode.parentNode;
        console.log(row.rowIndex)

        cellindx = row.rowIndex-1;
        document.getElementById("view_id1").value = table.rows[cellindx].cells[0].innerText
        document.getElementById("view_name").value = table.rows[cellindx].cells[1].innerText
        document.getElementById("view_age").value = table.rows[cellindx].cells[2].innerText
        document.getElementById("selfImage").src = table.rows[cellindx].cells[3].innerText
        
        document.getElementById("view_gender").value = table.rows[cellindx].cells[4].innerText
        document.getElementById("view_designation").value = table.rows[cellindx].cells[5].innerText

        
        console.log("cellindx after= "+cellindx)
        // document.getElementById("view").style.display='none'
    }

    function viewDone()             //once view done widnow closes
    {
        document.getElementById("view").style.display='none'
    }

    function searchData()  //search data 
    {
        
        let target = document.getElementById("searchFor").value;
        if(target == "" || target == "input something"  )
        {
            document.getElementById("searchFor").placeholder = "input something"
            // event.preventDefault();
            document.getElementById("searchButton").Disabled=true
        }
        else
        {
            document.getElementById('searchOffButton').style.display='block'
            // console.log(target);
            var table = document.getElementById("myTable").getElementsByTagName("tbody")[0];

                let flag = true
                for (let j=0;j<table.rows.length;j++)
                {
                    if(table.rows[j].cells[1].innerText == target)
                    {
                        flag = false
                    }
                    if(flag)
                    {
                        hideChildNodes(j,table.rows[j].cells.length)
                    }
            
                }
                document.getElementById("searchButton").style.display="none" 
            }         
    }

    function searchOff()
    {
         
        console.log("normal")
        var table = document.getElementById("myTable").getElementsByTagName("tbody")[0];

        showChildNodes()


        document.getElementById("searchButton").style.display="block"          
        document.getElementById('searchOffButton').style.display='none'
        document.getElementById("searchFor").value="";

    }
 
    let rowArr = []
    function hideChildNodes(rowIdx,cellIdx)
    {
        rowArr.push(rowIdx)
        console.log("r = "+rowIdx+"  c= "+cellIdx)
        var table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
        for (let i=0;i<cellIdx;i++)
        {
            table.rows[rowIdx].children[i].style.display="none"

        }
        console.log(rowArr)
    }

    function showChildNodes()
    {
        console.log("showchildnodes")
        var table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
        for (let i=0;i<rowArr.length;i++)
        {
            for(let j=0;j<7;j++)
            {
                
                table.rows[rowArr[i]].children[j].style.display=""
            }
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

