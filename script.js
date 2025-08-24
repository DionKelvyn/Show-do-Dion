const perguntas = [
    {
        pergunta: "Em C#, qual a diferença entre `struct` e `class`?",
        opcoes: [
            "Struct é um tipo de referência, class é um tipo de valor.",
            "Struct é um tipo de valor, class é um tipo de referência.",
            "Ambos são tipos de referência.",
            "Ambos são tipos de valor."
        ],
        respostaCorreta: 1,
        nivel: 1
    },
    {
        pergunta: "Qual a função do Padrão MVC na Engenharia de Software?",
        opcoes: [
            "Separar a aplicação em três camadas: Model, View e Controller.",
            "Garantir que a View tenha acesso direto ao banco de dados.",
            "Apenas controlar as rotas da aplicação.",
            "Fornecer um ambiente de virtualização para a aplicação."
        ],
        respostaCorreta: 0,
        nivel: 1
    },
    {
        pergunta: "No ASP.NET Core, para que serve o `appsettings.json`?",
        opcoes: [
            "Para armazenar o código-fonte da aplicação.",
            "Para configurar o servidor IIS.",
            "Para armazenar configurações como strings de conexão e chaves de API.",
            "Para definir as classes do modelo de dados."
        ],
        respostaCorreta: 2,
        nivel: 2
    },
    {
        pergunta: "Qual a diferença entre Entity Framework Core e Dapper?",
        opcoes: [
            "EF Core é um ORM leve, Dapper é um ORM completo.",
            "EF Core é um micro-ORM, Dapper é um ORM completo.",
            "EF Core é um ORM completo com mapeamento objeto-relacional, Dapper é um micro-ORM que foca em velocidade.",
            "Dapper é um ORM completo, EF Core é um micro-ORM."
        ],
        respostaCorreta: 2,
        nivel: 3
    },
    {
        pergunta: "O que o GIT é capaz de gerenciar?",
        opcoes: [
            "Apenas arquivos de texto.",
            "Apenas código-fonte.",
            "Histórico e versionamento de arquivos.",
            "Apenas arquivos de imagens."
        ],
        respostaCorreta: 2,
        nivel: 1
    },
    {
        pergunta: "Qual o principal objetivo do Docker?",
        opcoes: [
            "Gerenciar o banco de dados da aplicação.",
            "Criar máquinas virtuais completas.",
            "Empacotar e isolar aplicações em contêineres.",
            "Executar testes de software automatizados."
        ],
        respostaCorreta: 2,
        nivel: 2
    },
    {
        pergunta: "No contexto de DevOps, para que servem os `Pipelines` no Azure DevOps?",
        opcoes: [
            "Para agendar reuniões com a equipe de desenvolvimento.",
            "Para criar o banco de dados da aplicação.",
            "Para automatizar os processos de build, teste e deploy do software.",
            "Para gerenciar os usuários do sistema."
        ],
        respostaCorreta: 2,
        nivel: 3
    }
];

const valores = [
    1000, 2000, 3000, 4000, 5000, 10000, 20000, 30000, 50000, 100000, 200000, 300000, 400000, 500000, 1000000
];

let perguntaAtualIndex = 0;
let pontuacaoAtual = 0;
let pularDisponivel = 3;

const telaInicial = document.getElementById('tela-inicial');
const telaJogo = document.getElementById('tela-jogo');
const botaoJogar = document.getElementById('botao-jogar');
const perguntaTexto = document.getElementById('pergunta-texto');
const botoesOpcao = document.querySelectorAll('.opcao');
const listaValores = document.getElementById('lista-valores');
const valorParar = document.getElementById('valor-parar');
const valorAcertar = document.getElementById('valor-acertar');

// Funções de controle do jogo
function iniciarJogo() {
    telaInicial.classList.add('escondido');
    telaJogo.classList.remove('escondido');
    carregarPergunta();

    // Esta é a parte corrigida!
    // As referências e os eventos de clique para os botões de pulo
    // devem ser adicionados aqui, após a tela do jogo ter sido exibida.
    const botoesPulo = document.querySelectorAll('.pulo');
    botoesPulo.forEach(botao => {
        botao.addEventListener('click', pularPergunta);
    });
}

function carregarPergunta() {
    if (perguntaAtualIndex >= perguntas.length) {
        alert("Parabéns! Você chegou ao fim do jogo e ganhou o prêmio máximo!");
        reiniciarJogo();
        return;
    }

    const questao = perguntas[perguntaAtualIndex];
    perguntaTexto.textContent = questao.pergunta;

    botoesOpcao.forEach((botao, index) => {
        botao.textContent = `${index + 1}. ${questao.opcoes[index]}`;
        botao.dataset.index = index;
        botao.classList.remove('correta', 'incorreta', 'escondido');
        botao.disabled = false;
    });

    atualizarPlacar();
    atualizarValoresBotoes();
}

function verificarResposta(e) {
    const respostaClicada = parseInt(e.target.dataset.index);
    const questao = perguntas[perguntaAtualIndex];

    if (respostaClicada === questao.respostaCorreta) {
        e.target.classList.add('correta');
        pontuacaoAtual = valores[perguntaAtualIndex];
        setTimeout(() => {
            perguntaAtualIndex++;
            carregarPergunta();
        }, 1500);
    } else {
        e.target.classList.add('incorreta');
        botoesOpcao[questao.respostaCorreta].classList.add('correta');
        setTimeout(() => {
            gameOver();
        }, 2000);
    }
}

function atualizarPlacar() {
    document.querySelectorAll('.item-valor').forEach(item => {
        item.classList.remove('item-atual');
    });

    const itemAtual = listaValores.querySelector(`[data-valor='${valores[perguntaAtualIndex]}']`);
    if (itemAtual) {
        itemAtual.classList.add('item-atual');
    }
}

function atualizarValoresBotoes() {
    if (perguntaAtualIndex > 0) {
        const valorAnterior = valores[perguntaAtualIndex - 1];
        valorParar.textContent = `R$ ${valorAnterior.toLocaleString('pt-BR')}`;
    }

    const valorProximo = valores[perguntaAtualIndex];
    valorAcertar.textContent = `R$ ${valorProximo.toLocaleString('pt-BR')}`;
}

function gameOver() {
    alert(`Você errou! Sua pontuação final é: R$ ${pontuacaoAtual.toLocaleString('pt-BR')}`);
    reiniciarJogo();
}

function pararJogo() {
    alert(`Você decidiu parar! Sua pontuação final é: R$ ${pontuacaoAtual.toLocaleString('pt-BR')}`);
    reiniciarJogo();
}

function pularPergunta(e) {
    if (pularDisponivel > 0) {
        pularDisponivel--;
        perguntaAtualIndex++;

        e.target.style.cursor = 'not-allowed';
        e.target.style.opacity = '0.4';
        e.target.removeEventListener('click', pularPergunta);

        carregarPergunta();
    } else {
        alert("Você não tem mais pulos disponíveis!");
    }
}

function reiniciarJogo() {
    perguntaAtualIndex = 0;
    pontuacaoAtual = 0;
    pularDisponivel = 3;
    telaJogo.classList.add('escondido');
    telaInicial.classList.remove('escondido');
}

// Event Listeners
botaoJogar.addEventListener('click', iniciarJogo);
botoesOpcao.forEach(botao => {
    botao.addEventListener('click', verificarResposta);
});

// Botão de parar (simples, pode ser melhorado)
document.getElementById('valor-parar').closest('.acao-btn').addEventListener('click', pararJogo);