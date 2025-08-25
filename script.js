const perguntas = [
    // .NET C#
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
        pergunta: "Qual palavra-chave é utilizada em C# para criar uma variável que não pode ter seu valor alterado após a inicialização?",
        opcoes: [
            "`static`",
            "`const`",
            "`readonly`",
            "`var`"
        ],
        respostaCorreta: 1,
        nivel: 1
    },
    {
        pergunta: "No C#, qual a principal diferença entre `public` e `private`?",
        opcoes: [
            "`public` limita o acesso a uma classe, `private` permite acesso irrestrito.",
            "`private` limita o acesso a uma classe, `public` permite acesso irrestrito.",
            "Não há diferença.",
            "Ambos são usados para herança."
        ],
        respostaCorreta: 1,
        nivel: 1
    },
    {
        pergunta: "Qual das seguintes estruturas de controle de fluxo é utilizada para iteração em uma coleção em C#?",
        opcoes: [
            "`for`",
            "`while`",
            "`do-while`",
            "`foreach`"
        ],
        respostaCorreta: 3,
        nivel: 1
    },
    {
        pergunta: "O que é um 'namespace' em C#?",
        opcoes: [
            "Uma forma de organizar o código e evitar conflitos de nomes.",
            "Uma variável global.",
            "Um tipo de dado.",
            "Um tipo de método."
        ],
        respostaCorreta: 0,
        nivel: 1
    },
    // Padrão MVC
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
        pergunta: "No padrão MVC, qual componente é responsável por gerenciar a lógica de negócio e os dados da aplicação?",
        opcoes: [
            "Model",
            "View",
            "Controller",
            "Route"
        ],
        respostaCorreta: 0,
        nivel: 2
    },
    {
        pergunta: "Qual a responsabilidade do componente 'View' no padrão MVC?",
        opcoes: [
            "Processar a lógica de negócio.",
            "Controlar o fluxo de dados.",
            "Apresentar a interface de usuário.",
            "Interagir com o banco de dados."
        ],
        respostaCorreta: 2,
        nivel: 2
    },
    // ASP.NET Core e Web APIs
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
        pergunta: "Em ASP.NET Core, o que são `Middleware`?",
        opcoes: [
            "Classes que lidam com a View.",
            "Componentes que processam requisições e respostas HTTP.",
            "Rotas de navegação da aplicação.",
            "Bancos de dados temporários."
        ],
        respostaCorreta: 1,
        nivel: 3
    },
    {
        pergunta: "Qual anotação é usada para expor um método de Controller como um endpoint HTTP GET em uma Web API?",
        opcoes: [
            "`[HttpPost]`",
            " `[HttpPut]`",
            " `[HttpGet]`",
            " `[HttpDelete]`"
        ],
        respostaCorreta: 2,
        nivel: 3
    },
    // HTML, CSS e JavaScript
    {
        pergunta: "Em HTML, qual tag é usada para criar um hiperlink?",
        opcoes: [
            " `<link>`",
            " `<a>`",
            " `<href>`",
            " `<nav>`"
        ],
        respostaCorreta: 1,
        nivel: 1
    },
    {
        pergunta: "Em CSS, qual propriedade é usada para alterar a cor do texto de um elemento?",
        opcoes: [
            " `background-color`",
            " `text-color`",
            " `font-color`",
            " `color`"
        ],
        respostaCorreta: 3,
        nivel: 1
    },
    {
        pergunta: "O que o JavaScript faz em uma página web?",
        opcoes: [
            "Define a estrutura da página.",
            "Define o estilo e a aparência.",
            "Adiciona interatividade e lógica à página.",
            "Gerencia o banco de dados."
        ],
        respostaCorreta: 2,
        nivel: 1
    },
    // SQL Server, EF Core e Dapper
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
        pergunta: "Em SQL, qual cláusula é usada para filtrar linhas de uma tabela com base em uma condição?",
        opcoes: [
            " `JOIN`",
            " `GROUP BY`",
            " `ORDER BY`",
            " `WHERE`"
        ],
        respostaCorreta: 3,
        nivel: 2
    },
    {
        pergunta: "Em SQL, o comando `DELETE` é usado para:",
        opcoes: [
            "Remover uma tabela.",
            "Remover linhas de uma tabela.",
            "Remover uma coluna de uma tabela.",
            "Remover um banco de dados."
        ],
        respostaCorreta: 1,
        nivel: 2
    },
    {
        pergunta: "No Entity Framework Core, o que o comando `Add-Migration` faz?",
        opcoes: [
            "Cria um novo banco de dados.",
            "Aplica as migrações existentes.",
            "Cria uma nova migração com base nas mudanças no modelo.",
            "Deleta as migrações."
        ],
        respostaCorreta: 2,
        nivel: 3
    },
    // Controle de Versão (GIT)
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
        pergunta: "Qual comando GIT é usado para enviar as alterações do seu repositório local para um repositório remoto?",
        opcoes: [
            " `git commit`",
            " `git pull`",
            " `git push`",
            " `git status`"
        ],
        respostaCorreta: 2,
        nivel: 2
    },
    {
        pergunta: "O que o comando `git clone` faz?",
        opcoes: [
            "Cria uma nova branch.",
            "Copia um repositório remoto para a sua máquina local.",
            "Envia alterações para o servidor.",
            "Verifica o status do repositório."
        ],
        respostaCorreta: 1,
        nivel: 2
    },
    // Containers (Docker)
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
        pergunta: "O que é uma 'imagem' Docker?",
        opcoes: [
            "Uma máquina virtual completa.",
            "Um arquivo de texto para configurar a aplicação.",
            "Um template ou 'blueprint' de um contêiner.",
            "O ambiente de execução da aplicação."
        ],
        respostaCorreta: 2,
        nivel: 2
    },
    {
        pergunta: "Qual comando é usado para construir uma imagem Docker a partir de um Dockerfile?",
        opcoes: [
            " `docker run`",
            " `docker build`",
            " `docker pull`",
            " `docker stop`"
        ],
        respostaCorreta: 1,
        nivel: 2
    },
    // Metodologias Ágeis (Scrum e Kanban)
    {
        pergunta: "No Scrum, o que é um 'Sprint'?",
        opcoes: [
            "Uma reunião diária de 15 minutos.",
            "Um período de tempo fixo para a equipe trabalhar e entregar um incremento do produto.",
            "Um documento de requisitos do projeto.",
            "Uma ferramenta de automação."
        ],
        respostaCorreta: 1,
        nivel: 3
    },
    {
        pergunta: "No Scrum, qual é a principal responsabilidade do 'Product Owner'?",
        opcoes: [
            "Gerenciar a equipe de desenvolvimento.",
            "Assegurar que o processo Scrum está sendo seguido.",
            "Priorizar e gerenciar o Product Backlog.",
            "Executar os testes de software."
        ],
        respostaCorreta: 2,
        nivel: 3
    },
    {
        pergunta: "O que é um 'Kanban Board'?",
        opcoes: [
            "Um cronograma de projeto.",
            "Um quadro visual para gerenciar o fluxo de trabalho.",
            "Uma lista de requisitos.",
            "Um relatório de bugs."
        ],
        respostaCorreta: 1,
        nivel: 2
    },
    // DevOps (Azure DevOps)
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
    },
    {
        pergunta: "O que é 'Continuous Integration' (Integração Contínua) em DevOps?",
        opcoes: [
            "Um processo manual de implantação.",
            "A prática de integrar o código em um repositório compartilhado várias vezes ao dia.",
            "O processo de escrever testes de unidade.",
            "A criação de backups do código-fonte."
        ],
        respostaCorreta: 1,
        nivel: 3
    }
];

const valores = [
    1000, 2000, 3000, 4000, 5000, 10000, 20000, 30000, 50000, 100000, 200000, 300000, 400000, 500000, 1000000
];

let perguntaAtualIndex = 0;
let pontuacaoAtual = 0;
let pularDisponivel = 3;
let ajudaCartasDisponivel = true;
let ajudaPlateiaDisponivel = true;
let ajudaPlacaDisponivel = true;

const telaInicial = document.getElementById('tela-inicial');
const telaJogo = document.getElementById('tela-jogo');
const botaoJogar = document.getElementById('botao-jogar');
const perguntaTexto = document.getElementById('pergunta-texto');
const botoesOpcao = document.querySelectorAll('.opcao');
const listaValores = document.getElementById('lista-valores');
const valorParar = document.getElementById('valor-parar');
const valorAcertar = document.getElementById('valor-acertar');
const ajudaCartasBtn = document.getElementById('ajuda-cartas');
const ajudaPlateiaBtn = document.getElementById('ajuda-plateia');
const ajudaPlacaBtn = document.getElementById('ajuda-placa');

// Função para embaralhar o array (algoritmo de Fisher-Yates)
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Funções de controle do jogo
function iniciarJogo() {
    telaInicial.classList.add('escondido');
    telaJogo.classList.remove('escondido');

    // Embaralha as perguntas antes de começar o jogo
    embaralharArray(perguntas);

    // Reseta a disponibilidade das ajudas ao iniciar um novo jogo
    ajudaCartasDisponivel = true;
    ajudaPlateiaDisponivel = true;
    ajudaPlacaDisponivel = true;
    
    // Mostra as ajudas novamente
    ajudaCartasBtn.style.opacity = '1';
    ajudaPlateiaBtn.style.opacity = '1';
    ajudaPlacaBtn.style.opacity = '1';
    ajudaCartasBtn.style.cursor = 'pointer';
    ajudaPlateiaBtn.style.cursor = 'pointer';
    ajudaPlacaBtn.style.cursor = 'pointer';

    carregarPergunta();
    
    // Adicionando os event listeners para as ajudas aqui para garantir que funcionem
    ajudaCartasBtn.addEventListener('click', ajudaCartas);
    ajudaPlateiaBtn.addEventListener('click', ajudaPlateia);
    ajudaPlacaBtn.addEventListener('click', ajudaPlaca);

    const botoesPulo = document.querySelectorAll('.pulo');
    botoesPulo.forEach(botao => {
        botao.addEventListener('click', pularPergunta);
    });
}

function carregarPergunta() {
    if (perguntaAtualIndex >= valores.length) {
        alert("Parabéns! Você chegou ao fim do jogo e ganhou o prêmio máximo de R$ 1.000.000,00!");
        reiniciarJogo();
        return;
    }
    
    if (perguntaAtualIndex >= perguntas.length) {
        alert("Parabéns! Você respondeu todas as perguntas disponíveis e conquistou o prêmio de R$ " + valores[perguntaAtualIndex - 1].toLocaleString('pt-BR'));
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
    } else {
        valorParar.textContent = `R$ 0`;
    }

    if (perguntaAtualIndex < valores.length) {
        const valorProximo = valores[perguntaAtualIndex];
        valorAcertar.textContent = `R$ ${valorProximo.toLocaleString('pt-BR')}`;
    } else {
        valorAcertar.textContent = `R$ 1.000.000`;
    }
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

function ajudaCartas() {
    if (ajudaCartasDisponivel) {
        ajudaCartasDisponivel = false;
        const questao = perguntas[perguntaAtualIndex];
        const opcoesIncorretas = [];

        botoesOpcao.forEach((botao, index) => {
            if (index !== questao.respostaCorreta) {
                opcoesIncorretas.push(botao);
            }
        });

        const indexParaRemover1 = Math.floor(Math.random() * opcoesIncorretas.length);
        opcoesIncorretas[indexParaRemover1].classList.add('escondido');
        opcoesIncorretas.splice(indexParaRemover1, 1);

        const indexParaRemover2 = Math.floor(Math.random() * opcoesIncorretas.length);
        opcoesIncorretas[indexParaRemover2].classList.add('escondido');

        ajudaCartasBtn.style.cursor = 'not-allowed';
        ajudaCartasBtn.style.opacity = '0.4';
        ajudaCartasBtn.removeEventListener('click', ajudaCartas);
    } else {
        alert("Ajuda 'Cartas' já foi utilizada.");
    }
}

function ajudaPlateia() {
    if (ajudaPlateiaDisponivel) {
        ajudaPlateiaDisponivel = false;
        const questao = perguntas[perguntaAtualIndex];
        const respostaCorretaOpcao = botoesOpcao[questao.respostaCorreta].textContent;
        alert(`A plateia votou na opção correta: ${respostaCorretaOpcao}`);
        
        ajudaPlateiaBtn.style.cursor = 'not-allowed';
        ajudaPlateiaBtn.style.opacity = '0.4';
        ajudaPlateiaBtn.removeEventListener('click', ajudaPlateia);
    } else {
        alert("Ajuda 'Platéia' já foi utilizada.");
    }
}

function ajudaPlaca() {
    if (ajudaPlacaDisponivel) {
        ajudaPlacaDisponivel = false;
        const questao = perguntas[perguntaAtualIndex];
        const respostaCorretaOpcao = botoesOpcao[questao.respostaCorreta].textContent;
        alert(`O apresentador está consultando a placa... A resposta é: ${respostaCorretaOpcao}`);
        
        ajudaPlacaBtn.style.cursor = 'not-allowed';
        ajudaPlacaBtn.style.opacity = '0.4';
        ajudaPlacaBtn.removeEventListener('click', ajudaPlaca);
    } else {
        alert("Ajuda 'Placa' já foi utilizada.");
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