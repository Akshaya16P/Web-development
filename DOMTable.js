function fun() {
    let newTable = document.createElement("table");
    newTable.setAttribute("border","none");
    let row = document.getElementsByTagName("input")[0].value;
    let column =document.getElementsByTagName("input")[1].value;
    for (let i = 0; i < row; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < column; j++) {
            let td = document.createElement("td");
            tr.appendChild(td);
            td.innerText="1";
            if(j%2==0){
            td.innerText="Labubu";
            }
            else{
                td.innerText="Laddu";
            }
        }
        newTable.appendChild(tr);
    }
     newTable.style="border:1px solid red";
    document.body.appendChild(newTable);
    let table = document.getElementsByTagName("table")[0];


}

