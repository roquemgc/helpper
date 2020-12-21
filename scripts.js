class Student {
  // Objeto que recebe os valores do estudante
  student = {};
  // Array que armazena os objetos dos estudantes
  students = [];

  addStudent(student) {
    this.student['name'] = student[1].value;
    this.student['ra'] = student[2].value;
    this.student['email'] = student[3].value;
    this.student['sex'] = student[4].value;
    this.student['age'] = student[5].value;
    this.student['phone'] = student[6].value;
    this.student['address'] = student[7].value;
    this.students.push(this.student);
    this.student = {};
  }

  getStudents() {
    return this.students;
  }
}

student = new Student();

// TimeoutFuncion para que a busca do elemento ocorra somente após o seu carregamento
setTimeout(() => {
  const el = document.getElementById('create-student');
  el.addEventListener('submit', event => {
    event.preventDefault();
    student.addStudent(el.elements);
  })
}, 0)

// Função para buscar todos alunos e carregá-los na tela
function listStudents() {
  students = student.getStudents();
  const list = document.getElementById('student-list');

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

  // Executa uma função para cada elemento do array students
  students.forEach((object, index) => {
    var item = Object.entries(object);
    // Cria uma linha na lista
    var i, newLine = document.createElement('tr');

    // Colocar um id "interlayer" a cada 2 elementos(tr) para diferenciá-los na lista
    if(index%2 == 1) {
      newLine.setAttribute('id', 'interlayer'); 
    }
    // Cria uma coluna para cada item do objeto student e insere na linha
    for(i = 0; i < 7; i++) {
      newLine.innerHTML += `<td>${item[i][1]}</td>`
    }
  
    var header = document.getElementById('list-header');
    // Insera a linha na tabela
    list.insertBefore(newLine, header.nextSibling);
  });
}


