class Client {
  // Objeto que recebe os valores do estudante
  client = {};
  // Array que armazena os objetos dos estudantes
  clients = [];

  addClient(client) {
    this.client['name'] = client[1].value;
    this.client['ra'] = client[2].value;
    this.client['email'] = client[3].value;
    this.client['sex'] = client[4].value;
    this.client['age'] = client[5].value;
    this.client['phone'] = client[6].value;
    this.client['address'] = client[7].value;
    this.clients.push(this.client);
    this.client = {};
  }

  getClients() {
    return this.clients;
  }
}

client = new Client();

// Função para buscar todos alunos e carregá-los na tela
function listClients() {
  clients = client.getClients();
  const list = document.getElementById('client-list');

  // Reseta a lista de estudantes inserindo o cabeçalho novamente
  list.innerHTML = `<tr id="list-header">
      <th>Nome</th>
      <th>RA</th>
      <th>Email</th>
      <th>Sexo</th>
      <th>Idade</th>
      <th>Telefone</th>
      <th>Endereço</th>
    </tr>`;

  // Executa uma função para cada elemento do array clients
  clients.forEach((object, index) => {
    var item = Object.entries(object);
    // Cria uma linha na lista
    var i, newLine = document.createElement('tr');

    // Colocar um id "interlayer" a cada 2 elementos(tr) para diferenciá-los na lista
    if(index%2 == 1) {
      newLine.setAttribute('id', 'interlayer'); 
    }
    // Cria uma coluna para cada item do objeto client e insere na linha
    for(i = 0; i < 7; i++) {
      newLine.innerHTML += `<td>${item[i][1]}</td>`
    }
  
    var header = document.getElementById('list-header');
    // Insera a linha na tabela
    list.insertBefore(newLine, header.nextSibling);
  });
}

function openClientForm() {
  window.location.replace('client-registration.html');
}

function deleteClient() {
  alert('teste');
}


