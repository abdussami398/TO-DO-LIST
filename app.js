var list = document.getElementById("task-list")


const add = () =>{
    let data = document.getElementById("user-input");
    let li = document.createElement("li")
    let list = document.getElementById("task-list")
    let liText = document.createTextNode(data.value)
    li.appendChild(liText)


    //Delete button 
    let delbtn = document.createElement("button")
    let deltext = document.createTextNode("DELETE")
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","del(this)")
    delbtn.appendChild(deltext)
    li.appendChild(delbtn)
    list.appendChild(li)
   

    data.value = ""
    console.log(li)

}



const del = (e) =>{
    e.parentNode.remove()
}