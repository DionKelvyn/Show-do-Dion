const perguntas = [
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