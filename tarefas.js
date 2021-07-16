function Tarefa(nome, categoria, realizada) {
  this.nome = nome;
  this.categoria = categoria;
  this.realizada = realizada;
}
Tarefa.prototype.adicionaNaPagina = function () {
  const listaDeTarefas = document.querySelector("#lista-tarefas");

  const novaTarefa = document.createElement("li");
  novaTarefa.classList.add("item-tarefa", `categoria-${this.categoria}`);
  if (this.realizada == true) {
    novaTarefa.classList.add("marcado");
  }
  novaTarefa.innerHTML = this.nome;
  novaTarefa.addEventListener("click", concluiTarefa);
  listaDeTarefas.appendChild(novaTarefa);
};

let tarefas = [
  new Tarefa("Verificar Emails", "estudos", false),
  new Tarefa("Verificar Dieta", "lazer", true),
  new Tarefa("Tomar Suplementos", "lazer", true),
  new Tarefa("Treinar", "lazer", true),
];

for (let item of tarefas) {
  item.adicionaNaPagina();
}
