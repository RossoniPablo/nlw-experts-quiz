const perguntas = [
    {
        pergunta: "Qual país sediará as Olimpíadas de Inverno de 2022?",
        respostas: [
            "Estados Unidos",
            "China",
            "Canadá"
        ],
        correta: 1 // A resposta correta é "China"
    },
    {
        pergunta: "Qual foi a primeira criptomoeda a atingir um valor de mercado de 1 trilhão de dólares?",
        respostas: [
            "Bitcoin",
            "Ethereum",
            "Dogecoin"
        ],
        correta: 0 // A resposta correta é "Bitcoin"
    },
    {
        pergunta: "Qual país recentemente realizou um referendo para decidir se legalizaria o aborto?",
        respostas: [
            "Argentina",
            "Brasil",
            "México"
        ],
        correta: 0 // A resposta correta é "Argentina"
    },
    {
        pergunta: "Qual país lançou recentemente uma sonda espacial para estudar Marte?",
        respostas: [
            "Estados Unidos",
            "China",
            "Rússia"
        ],
        correta: 1 // A resposta correta é "China"
    },
    {
        pergunta: "Qual é o nome da variante do coronavírus identificada pela primeira vez na África do Sul?",
        respostas: [
            "Delta",
            "Omicron",
            "Beta"
        ],
        correta: 2 // A resposta correta é "Beta"
    },
    {
        pergunta: "Qual empresa recentemente anunciou planos para lançar turismo espacial comercial?",
        respostas: [
            "SpaceX",
            "Virgin Galactic",
            "Blue Origin"
        ],
        correta: 1 // A resposta correta é "Virgin Galactic"
    },
    {
        pergunta: "Qual cidade foi recentemente afetada por fortes inundações na Europa?",
        respostas: [
            "Paris",
            "Berlim",
            "Veneza"
        ],
        correta: 0 // A resposta correta é "Paris"
    },
    {
        pergunta: "Qual país recentemente legalizou o casamento entre pessoas do mesmo sexo?",
        respostas: [
            "Brasil",
            "China",
            "Malta"
        ],
        correta: 2 // A resposta correta é "Malta"
    },
    {
        pergunta: "Qual jogador de futebol recentemente quebrou o recorde de maior número de gols na história da seleção?",
        respostas: [
            "Lionel Messi",
            "Cristiano Ronaldo",
            "Pelé"
        ],
        correta: 0 // A resposta correta é "Lionel Messi"
    },
    {
        pergunta: "Qual foi o último filme a ganhar o Oscar de Melhor Filme?",
        respostas: [
            "Nomadland",
            "Parasita",
            "Coringa"
        ],
        correta: 0 // A resposta correta é "Nomadland"
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