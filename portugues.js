const perguntas = [
    //Interpretação de texto, fato/opinião, implícitos, intencionalidade discursiva, ideias principais/ secundárias e recursos de argumentação
    {
        pergunta: "Leia o fragmento: “A propaganda afirma que o produto trará felicidade imediata a quem o consumir. No entanto, não há qualquer comprovação científica sobre seus efeitos.” Assinale a alternativa correta:",
        opcoes: [
            "A primeira frase expressa um fato e a segunda, uma opinião.",
            "A primeira frase expressa uma opinião e a segunda, um fato.",
            "Ambas as frases expressam opiniões.",
            "Ambas as frases expressam fatos."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Leia o texto: “O jornal noticiou que a taxa de desemprego caiu no último trimestre. Já o colunista opinou que esse número não reflete a realidade, pois muitos trabalhadores vivem de subempregos.” Nesse fragmento, identificam-se:",
        opcoes: [
            "Um implícito e uma ideia secundária.",
            "Um fato e uma opinião.",
            "Dois subentendidos.",
            "Dois fatos independentes."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Considere o trecho: “O autor critica o sistema educacional, mas não apresenta propostas para superá-lo.” A função da expressão destacada “mas não apresenta propostas” é:",
        opcoes: [
            "Construir uma oposição, reforçando a ideia de incompletude do discurso.",
            "Apresentar um argumento de autoridade.",
            "Marcar a conclusão do texto.",
            "Estabelecer causa e consequência."
        ],
        respostaCorreta: 0
    },
    {
        pergunta: "Leia o fragmento: “É comum ouvirmos que vivemos na era da informação. Porém, mais do que informação, o que nos rodeia são discursos com diferentes intenções.” Esse trecho pode ser interpretado, à luz de Eni Orlandi, como:",
        opcoes: [
            "Um exemplo de fato objetivo.",
            "Um exemplo de intencionalidade discursiva.",
            "Um caso de neutralidade textual.",
            "Um exemplo de polissemia lexical."
        ],
        respostaCorreta: 1    
    },
    {
        pergunta: "Analise o trecho: “Segundo especialistas, o clima da Terra passa por mudanças cíclicas naturais. Contudo, muitos cientistas alertam que as ações humanas intensificam tais transformações.” Nesse trecho, a ideia principal é:",
        opcoes: [
            "As ações humanas provocam mudanças naturais.",
            "O clima da Terra sofre mudanças cíclicas.",
            "O alerta de cientistas sobre a intensificação das mudanças climáticas.",
            "A divergência de posicionamentos sobre as causas das mudanças climáticas."
        ],
        respostaCorreta: 3
    },
    {
        pergunta: "Sobre a interpretação de textos, segundo José Luiz Fiorin e Francisco Platão Savioli, é correto afirmar que:",
        opcoes: [
            "A interpretação ocorre apenas pelo que está explicitamente no texto.",
            "A interpretação depende de identificar relações entre elementos explícitos e implícitos.",
            "O sentido do texto é único e imutável.",
            "O leitor não participa do processo de construção de sentido."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Leia o fragmento: “É preciso reconhecer os avanços tecnológicos, mas não se pode ignorar as desigualdades que eles evidenciam.” O recurso de argumentação empregado é:",
        opcoes: [
            "Citação de autoridade.",
            "Argumento de oposição.",
            "Argumento por exemplificação.",
            "Argumento de causa e consequência."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Um texto apresenta a seguinte afirmação: “O governo anunciou a criação de novos empregos. Entretanto, não especificou em quais setores.” O trecho em destaque constitui:",
        opcoes: [
            "Uma ideia secundária.",
            "Uma opinião.",
            "Um implícito.",
            "Uma restrição ao fato apresentado."
        ],
        respostaCorreta: 3
    },
    {
        pergunta: "Leia o excerto: “A manchete anuncia queda da inflação, mas os preços nos mercados continuam subindo.” Nesse trecho, podemos identificar:",
        opcoes: [
            "Uma contradição entre fato e opinião.",
            "A presença de implícitos que reforçam o efeito de sentido.",
            "Um recurso de comparação entre ideias principais.",
            "Uma oposição entre informação oficial e percepção cotidiana."
        ],
        respostaCorreta: 3
    },
    {
        pergunta: "De acordo com os estudos de Eni Orlandi e Ingedore Villaça Koch, o implícito em um texto pode ser identificado quando:",
        opcoes: [
            "O leitor observa apenas o que está gramaticalmente expresso.",
            "O sentido depende do conhecimento prévio e do contexto.",
            "Há repetição de ideias principais em diferentes parágrafos.",
            "O texto apresenta enumeração objetiva de dados."
        ],
        respostaCorreta: 1
    }
];

let perguntaAtualIndex = 0;
let respostaCorretaOriginal = null;

const perguntaTexto = document.getElementById('pergunta-texto');
const botoesOpcao = document.querySelectorAll('.opcao');

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function carregarPergunta() {
    // Verifica se todas as perguntas foram respondidas
    if (perguntaAtualIndex >= perguntas.length) {
        finalizarJogo();
        return;
    }

    const questao = perguntas[perguntaAtualIndex];
    perguntaTexto.textContent = `${perguntaAtualIndex + 1}/${perguntas.length}: ${questao.pergunta}`;

    const opcoesEmbaralhadas = [...questao.opcoes];
    embaralharArray(opcoesEmbaralhadas);

    const respostaCorretaTexto = questao.opcoes[questao.respostaCorreta];
    respostaCorretaOriginal = respostaCorretaTexto;

    botoesOpcao.forEach((botao, index) => {
        botao.textContent = `${index + 1}. ${opcoesEmbaralhadas[index]}`;
        botao.dataset.opcoes = opcoesEmbaralhadas[index];
        botao.classList.remove('correta', 'incorreta');
        botao.disabled = false;
    });    
}

function verificarResposta(e) {
    const respostaClicadaTexto = e.target.dataset.opcoes;

    botoesOpcao.forEach(botao => botao.disabled = true);

    if (respostaClicadaTexto === respostaCorretaOriginal) {
        e.target.classList.add('correta');
        setTimeout(() => {
            perguntaAtualIndex++;
            carregarPergunta();
        }, 1500);
    } else {
        e.target.classList.add('incorreta');

        botoesOpcao.forEach(botao => {
            if (botao.dataset.opcoes === respostaCorretaOriginal) {
                botao.classList.add('correta');
            }
        });

        setTimeout(() => {
            alert(`Você errou! A resposta correta era: ${respostaCorretaOriginal}.`);
            window.location.href = "index.html";
        }, 2000);
    }
}

function finalizarJogo() {
    alert("Parabéns! Você aguentou todas as perguntas e venceu o desafio!");
    setTimeout(() => {
        window.location.href = "index.html";
    }, 5000); // Redireciona após 5 segundos
}

// Inicia o jogo
embaralharArray(perguntas);
carregarPergunta();

// Event Listeners
botoesOpcao.forEach(botao => {
    botao.addEventListener('click', verificarResposta);
});