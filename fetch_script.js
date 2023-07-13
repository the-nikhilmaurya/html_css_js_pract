let p = fetch("https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817")
p.then((response)=>{
    return response.json();
    
}).then((result)=>{
        
        let data = result.data;
        let str = `<h1>${result.message}</h1>
        <table>
        <thead>
            
              <th>Name</th>
              <th>office</th>
              <th>position</th>
              <th>salary</th>
            
        </thead>  
        <tbody>
        `;
        for (x in data){
        
            str += `<tr>
            <td>${data[x].name}</td>
            <td>${data[x].office}</td>
            <td>${data[x].position}</td>
            <td>${data[x].salary}</td>
            </tr>`;
        }
        str += '</tbody></table>'
       
        document.getElementById("container").insertAdjacentHTML("beforeend",str);
       
        console.log(data);
        


    })
    
