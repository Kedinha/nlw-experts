const perguntas = [
  {
    pergunta: "O que significa a palavra-chave 'var' em Javascript?",
    respostas: [
      "Variável",
      "Função",      
      "Classe",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o método usado para adicionar um elemento à array?",
    respostas: [
      "push()",
      "pop()",
      "shift()",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o operador de atribuição composta em Javascript?",
    respostas: [
      "+=",
      "-=",
      "**=",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o valor booleano falso em Javascript?",
    respostas: [
      "0",
      "false",
      "null",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é a estrutura de repetição usada em Javascript?",
    respostas: [
      "for",
      "while",
      "do-while",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o método usado para obter o tamanho de uma array em Javascript?",
    respostas: [
      "length",
      "size",
      "len()",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o tipo de dados de uma string em Javascript?",
    respostas: [
      "object",
      "string",
      "array",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é o escopo de uma variável declarada com a palavra-chave 'let' em Javascript?",
    respostas: [
      "Global",
      "Block",
      "Function",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é o tipo de dados de uma função em Javascript?",
    respostas: [
      "function",
      "object",
      "method",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é a diferença entre '==' e '===' em Javascript?",
    respostas: [
      "'==' compara apenas os valores, enquanto '===' compara os valores e os tipos de dados",
      "'==' compara os valores e os tipos de dados, enquanto '===' compara apenas os valores",
      "Não há diferença entre '==' e '===' em Javascript",
    ],
    correta: 0,
  },
];
//  pega o elemento pequisando o seletor
const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
	const quizItem = template.content.cloneNode(true);
	quizItem.querySelector("h3").textContent = item.pergunta;

  //instrução para a resposta no for aninhado
	for (let resposta of item.respostas) {
		const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = resposta;
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    //pega o valor de todas as respostas do item
    dt.querySelector('input').value = item.respostas.indexOf(resposta)

    //evento de mudança do input
    dt.querySelector('input').onchange = (event) => {
      const seCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (seCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

      // console.log(seCorreta);
    }


    //pega o elemento filho 
		quizItem.querySelector("dl").appendChild(dt);
	}

	quizItem.querySelector("dl dt").remove();

	// insere a pergunta na tela
	quiz.appendChild(quizItem);
}