const perguntas = [
    {
        pergunta: "Os teóricos Halliday e Hasan (1976) propõem cinco mecanismos de coesão: referência, substituição, elipse, conjunção e coesão lexical (Cavalcante, 2014). Com base nessa fundamentação teórica sobre coesão textual, analise as assertivas a seguir: I. Referência e elipse são mecanismos que dependem da presença explícita dos elementos linguísticos no texto. II. Em conjunção, estabelece-se relação semântica entre orações, como causa, oposição ou adição. III. A coesão lexical abrange recursos como repetição, sinonímia, hiperonímia e colocação lexical. Quais estão corretas?",
     
        opcoes: [
            "Apenas II.",
            "Apenas III.",
            "Apenas I e III.",
            "Apenas II e III.",
            "I, II e III."
        ],
        respostaCorreta: 3
    },
    {
        pergunta: "Analise a frase a seguir: “O avanço tecnológico, aliado à capacidade humana de inovar, tem transformado de maneira acelerada a forma como nos comunicamos”. Com base nos aspectos de morfossintaxe, considerando classes de palavras e funções sintáticas, assinale a alternativa correta. ",
        opcoes: [
            "“Aliado à capacidade humana de inovar” constitui oração reduzida de particípio com valor adjetivo, funcionando como adjunto adverbial de causa do verbo “tem transformado”.",
            "Em “de maneira acelerada”, o núcleo é o substantivo “maneira”, modificado pelo adjetivo “acelerada”; o conjunto funciona como adjunto adverbial de intensidade.",
            "“Tem transformado” forma uma locução verbal em que “ter” atua como verbo auxiliar, indicando ação habitual com relevância no momento da enunciação. ",
            "O vocábulo “como” introduz oração subordinada adverbial conformativa, que exerce função de adjunto adverbial do núcleo nominal “forma”. ",
            "O sujeito da oração principal é composto, formado por “avanço tecnológico” e “capacidade humana de inovar”, coordenados pela expressão “aliado a”."
        ],
        respostaCorreta: 2
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