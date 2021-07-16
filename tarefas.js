function Tarefa(nome, categoria, realizada) {
  this.nome = nome;
  this.categoria = categoria;
  this.realizada = realizada;
}
Tarefa.prototype.adicionaNaPagina = function () {
  const listaDeTarefas = document.querySelector("#lista-tarefas");
  const novaTarefa = document.createElement("li");
  novaTarefa.classList.add("item-tarefa", `categoria-${this.categoria}`);
  if (this.realizada) {
    novaTarefa.classList.add("marcado");
  }
  novaTarefa.innerHTML = this.nome;
  novaTarefa.addEventListener("click", concluiTarefa);
  listaDeTarefas.appendChild(novaTarefa);
};
function concluiTarefa(event) {
  const tarefa = event.currentTarget;
  tarefa.classList.toggle("marcado");
}
let tarefas = [
  new Tarefa("Verificar Emails", "estudos", false),
  new Tarefa("Verificar Dieta", "lazer", true),
  new Tarefa("Tomar Suplementos", "lazer", true),
  new Tarefa("Treinar", "lazer", false),
  new Tarefa("Lapiseira Pentel", "compras", false),
];

for (let tarefa of tarefas) {
  tarefa.adicionaNaPagina();
}

// Exercicio 2

// incluir uma nova tarefa
function adicionartarefa(event) {
  const nome = document.querySelector("#nova-tarefa-nome");
  if (nome) {
    const categoria = document.querySelector("#nova-tarefa-categoria");
    const tarefa = new Tarefa(nome.value, categoria.value, false);
    tarefas.push(tarefa);
    tarefa.adicionaNaPagina();
    nome.value = "";
    categoria.value = "lazer";
  }
}

document
  .querySelector("#incluir-nova-tarefa")
  .addEventListener("click", adicionartarefa);

//Exercicio 3

document
  .querySelector("#filtro-de-categoria")
  .addEventListener("change", (e) => {
    document.querySelectorAll(".item-tarefa").forEach((item) => {
      if (e.currentTarget.value !== "") {
        if (
          item.classList.contains(`categoria-${e.currentTarget.value}`) ===
          false
        ) {
          item.classList.add("retido-no-filtro");
        } else {
          item.classList.remove("retido-no-filtro");
        }
      } else {
        item.classList.remove("retido-no-filtro");
      }
    });
  });
//Exercicio 4

document.querySelector("#nova-tarefa-nome").addEventListener("keyup", (e) => {
  if (e.key == "Enter" && e.target.value != "") {
    adicionartarefa();
  }
});
