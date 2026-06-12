const lista = document.getElementById("lista");

mostrarTarefas();

function adicionarTarefa(){

    const texto = document.getElementById("tarefa").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    if(texto === ""){
        alert("Digite uma tarefa.");
        return;
    }

    const tarefa = {
        texto,
        data,
        hora
    };

    let tarefas =
        JSON.parse(
            localStorage.getItem("tarefas")
        ) || [];

    tarefas.push(tarefa);

    localStorage.setItem(
        "tarefas",
        JSON.stringify(tarefas)
    );

    document.getElementById("tarefa").value="";

    mostrarTarefas();
}

function mostrarTarefas(){

    lista.innerHTML="";

    let tarefas =
        JSON.parse(
            localStorage.getItem("tarefas")
        ) || [];

    tarefas.forEach((tarefa,index)=>{

        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${tarefa.texto}</strong>
            <br>
            📅 ${tarefa.data}
            <br>
            🕒 ${tarefa.hora}
            <br><br>

            <button onclick="concluir(this)">
                Concluir
            </button>

            <button onclick="remover(${index})">
                Excluir
            </button>
        `;

        lista.appendChild(li);

    });

}

function remover(index){

    let tarefas =
        JSON.parse(
            localStorage.getItem("tarefas")
        ) || [];

    tarefas.splice(index,1);

    localStorage.setItem(
        "tarefas",
        JSON.stringify(tarefas)
    );

    mostrarTarefas();
}

function concluir(botao){

    botao.parentElement.classList.toggle(
        "concluida"
    );

}