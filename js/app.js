let amigos = []; // Armazena os amigos adicionados

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value;
    let lista = document.getElementById('lista-amigos');
    if (amigo == ''){
      alert (' Adicione o nome do amigo');
      return;
    }
    if(amigos.includes(amigo.value)){
      alert ('Nome já adicionado');
      return;
   }
   
    if (amigo !== "") {
        amigos.push(amigo); // Adiciona o nome do amigo ao array
        lista.textContent = amigos.join(', '); // Atualiza a lista de amigos exibida
        document.getElementById('nome-amigo').value = ''; // Limpa o campo de entrada
    }
}

function sortear() {
   if(amigos.length < 4){
      alert (' Adicione pelo menos 4 amigos');
      return;
   }

  
   embaralha (amigos);
let sorteio = document.getElementById('lista-sorteio');

for (let i = 0; i< amigos.length; i++) { 
   if (i == amigos.length -1){ 
sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--> ' + amigos[0] + '<br>'
 } else {
   sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--> ' + amigos[i+1] + '<br>'
 }
}   
}


function embaralha(lista) {

   let indice = lista.length
   
   while(indice) {
       // atenção para o pós-incremento indice-- 
       const indiceAleatorio = Math.floor(Math.random() * indice--);
       [lista[indice], lista[indiceAleatorio]] = 
           [lista[indiceAleatorio], lista[indice]];
   }
}

function reiniciar() {
    amigos = []; // Limpa o array de amigos
    document.getElementById('lista-amigos').textContent = ""; // Limpa a lista de amigos exibida
    document.getElementById('lista-sorteio').textContent = ""; // Limpa o resultado do sorteio
}