var list = document.getElementById("task-list");

const addvalue = () => {
  let data = document.getElementById("user-input");
  let li = document.createElement("li");
  let list = document.getElementById("task-list");
  let liText = document.createTextNode(data.value);
  li.appendChild(liText);

  //Delete button
  let delbtn = document.createElement("button");
  let deltext = document.createTextNode("DELETE");
  delbtn.setAttribute("class", "btn");
  delbtn.setAttribute("onclick", "del(this)");
  delbtn.appendChild(deltext);

  //Edit Button
  let editbtn = document.createElement("button");
  let edittxt = document.createTextNode("EDIT");
  delbtn.setAttribute("class", "btn");
  editbtn.setAttribute("onclick", "edit(this)");
  editbtn.appendChild(edittxt);

  li.appendChild(editbtn);
  li.appendChild(delbtn);
  list.appendChild(li);

  data.value = "";
  console.log(li);
};

const del = (e) => {
  e.parentNode.remove();
};

const Deleteall = () => {
  var list = document.getElementById("task-list");
  list.innerHTML = "";
};

const edit = (e) => {
  let value = e.parentNode.firstChild.nodeValue;
  let editvalue = prompt("Enter Edit Value", value);
  e.parentNode.firstChild.nodeValue = editvalue;
};
