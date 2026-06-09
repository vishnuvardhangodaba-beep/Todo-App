function addTask(){

let input = document.getElementById("taskInput");

let task = input.value;

if(task===""){
return;
}

let li=document.createElement("li");

li.innerHTML=`
${task}
<button onclick="this.parentElement.remove()">
❌
</button>
`;

li.addEventListener("click",function(){
li.style.textDecoration="line-through";
});

document.getElementById("taskList").appendChild(li);

input.value="";
}