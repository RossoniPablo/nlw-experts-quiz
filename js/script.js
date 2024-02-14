const perguntas = [
    {
        pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const"
        ],
        correta: 2 // A resposta correta é "const"
    },
    {
        pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "<!-- Este é um comentário -->",
            "/* Este é um comentário */"
        ],
        correta: 0 // A resposta correta é "// Este é um comentário"
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "="
        ],
        correta: 1 // A resposta correta é "==="
    },
    {
        pergunta: "Como você chama uma função chamada 'minhaFuncao' em JavaScript?",
        respostas: [
            "minhaFuncao()",
            "call minhaFuncao()",
            "invoke minhaFuncao()"
        ],
        correta: 0 // A resposta correta é "minhaFuncao()"
    },
    {
        pergunta: "Qual é o método usado para converter uma string em um número em JavaScript?",
        respostas: [
            "parseInt()",
            "stringToNumber()",
            "toNumber()"
        ],
        correta: 0 // A resposta correta é "parseInt()"
    },
    {
        pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
        respostas: [
            "log()",
            "print()",
            "console.log()"
        ],
        correta: 2 // A resposta correta é "console.log()"
    },
    {
        pergunta: "Qual é o operador usado para concatenar strings em JavaScript?",
        respostas: [
            "+",
            "&",
            "~"
        ],
        correta: 0 // A resposta correta é "+"
    },
    {
        pergunta: "Qual é o resultado da expressão 2 + '2' em JavaScript?",
        respostas: [
            "22",
            "4",
            "Erro"
        ],
        correta: 0 // A resposta correta é "22"
    },
    {
        pergunta: "Qual é a função usada para obter o comprimento de uma string em JavaScript?",
        respostas: [
            "length()",
            "size()",
            "length"
        ],
        correta: 2 // A resposta correta é "length"
    },
    {
        pergunta: "Qual é a maneira correta de incluir um arquivo JavaScript externo em um arquivo HTML?",
        respostas: [
            "<script href='script.js'></script>",
            "<script src='script.js'></script>",
            "<javascript src='script.js'></javascript>"
        ],
        correta: 1 // A resposta correta é "<script src='script.js'></script>"
    }
];

const quiz = document.querySelector('#quiz')
const tamplate = document.querySelector('template')
//Um objeto Set permite que você armazene valores sem repetição, o que significa que cada valor pode ocorrer apenas uma vez no conjunto, utilizando o 'add' na linha 121
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


for(const item of perguntas) {
    //Clonando
    const quizItem = tamplate.content.cloneNode(true)

    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        //Clonando
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta
            //Se acertar a resposta mantem, resolvou mudar de alternativa ele deta a posição
          corretas.delete(item)

          if(estaCorreta) {
            corretas.add(item)
          }
          
          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

        }

        quizItem.querySelector('dl').appendChild(dt)
    }

  
    quizItem.querySelector('dl dt').remove()


    //Coloca a pergunta na tela
    quiz.appendChild(quizItem)
}