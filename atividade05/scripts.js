var ul = document.getElementById("todoList");
var li;
var tarefaId;
var tarefa
function adicionar(){
    if(document.getElementById("input-add").value != ""){
        tarefa = document.getElementById("input-add");
        tarefaId = ul.childElementCount;
        li = criartarefa(tarefa.value, tarefaId)
        li.appendChild(removertarefaBotao(tarefaId));
        ul.appendChild(li);
        tarefa.value = "";
    }

}

function removerTarefa(tarefaId) {
    for(let i = 0; i < ul.children.length; i++){
        if(ul.children[i].getAttribute("index") == tarefaId){
            ul.children[i].remove();
        }
    }
}
function criartarefa(tarefaValue, tarefaId){
    let li = document.createElement("li");
    li.setAttribute("index", tarefaId);
    li.appendChild(document.createTextNode(tarefaValue));
    return li;
}
function removertarefaBotao(tarefaId){
    let botao = document.createElement("button");
    botao.setAttribute("onclick", "removerTarefa("+tarefaId+")");
    botao.innerHTML = "X";
    return botao;
}
