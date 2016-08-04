

document.addEventListener('keypress', function(e){
   if (e.which == 13) {
      adicionarTarefa();
   }
}, false);


function adicionarTarefa() {
	
	var tarefa = document.getElementById("nova-tarefa");

	if (tarefa.value.length === 0) {
		alert('Por favor, digite uma tarefa!');
	} else {

		var lista = document.getElementById("tarefas");

		// Cria um novo <li> e coloca a tarefa dentro
		var item = document.createElement('li');
		item.innerHTML = '<span>' + tarefa.value + '</span>' +
		'<button onclick="removerTarefa(this)">X</button>';

		lista.appendChild(item);

		tarefa.value = '';
	}
}

function removerTarefa(item) {
	
	var lista = document.getElementById("tarefas");

	lista.removeChild(item.parentElement);
}




