const perguntas = [
    // Arquitetura de Computadores e Sistemas Operacionais (10 questões)
    {
        pergunta: "Qual a função da Unidade Central de Processamento (CPU)?",
        opcoes: [
            "Armazenar dados permanentemente.",
            "Executar instruções de programas e processar dados.",
            "Conectar a rede Wi-Fi.",
            "Gerenciar a interface do usuário."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "O que é um 'kernel' em um sistema operacional?",
        opcoes: [
            "Um software antivírus.",
            "O núcleo do sistema operacional que gerencia recursos de hardware.",
            "A interface gráfica do usuário.",
            "Um tipo de aplicativo de escritório."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual das seguintes tarefas é responsabilidade de um sistema operacional?",
        opcoes: [
            "Escrever código de programação.",
            "Gerenciar o tempo de tela do usuário.",
            "Controlar a execução de programas e alocar memória.",
            "Criar documentos de texto."
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual a principal diferença entre Windows e Linux?",
        opcoes: [
            "Windows é um sistema de código aberto, Linux é proprietário.",
            "Windows é para servidores, Linux é para desktops.",
            "Windows tem interface gráfica, Linux não tem.",
            "Windows é proprietário e Linux é de código aberto."
        ],
        respostaCorreta: 3
    },
    {
        pergunta: "O que é um 'processo' em um sistema operacional?",
        opcoes: [
            "Um arquivo de texto.",
            "Um programa em execução.",
            "Uma pasta de documentos.",
            "Uma unidade de armazenamento."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual o principal objetivo da virtualização em arquitetura de computadores?",
        opcoes: [
            "Aumentar a velocidade do processador.",
            "Permitir que vários sistemas operacionais rodem em um único hardware físico.",
            "Melhorar a qualidade dos gráficos.",
            "Reduzir o consumo de energia."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "O que significa 'BIOS'?",
        opcoes: [
            "Basic Input/Output System.",
            "Binary Internal Operating System.",
            "Basic Integration Open Software.",
            "Binary Input/Output Standard."
        ],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual a função da memória RAM?",
        opcoes: [
            "Armazenar dados permanentemente.",
            "Armazenar dados temporariamente para a CPU acessar rapidamente.",
            "Conectar a internet.",
            "Executar jogos de alta performance."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Em Linux, qual comando é usado para listar arquivos e diretórios?",
        opcoes: [
            "`cd`",
            "`mkdir`",
            "`ls`",
            "`touch`"
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "O que é um 'driver' de dispositivo?",
        opcoes: [
            "Um programa para gerenciar arquivos.",
            "Uma interface de usuário.",
            "Um software que permite que o sistema operacional interaja com um hardware.",
            "Uma ferramenta de desenvolvimento."
        ],
        respostaCorreta: 2
    },

    // Fundamentos de Engenharia de Software e Análise de Sistemas (20 questões)
    {
        pergunta: "Qual a função do Padrão MVC na Engenharia de Software?",
        opcoes: [
            "Separar a aplicação em três camadas: Model, View e Controller.",
            "Garantir que a View tenha acesso direto ao banco de dados.",
            "Apenas controlar as rotas da aplicação.",
            "Fornecer um ambiente de virtualização para a aplicação."
        ],
        respostaCorreta: 0
    },
    {
        pergunta: "No padrão MVC, qual componente é responsável por gerenciar a lógica de negócio e os dados da aplicação?",
        opcoes: [
            "Model",
            "View",
            "Controller",
            "Route"
        ],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual a responsabilidade do componente 'View' no padrão MVC?",
        opcoes: [
            "Processar a lógica de negócio.",
            "Controlar o fluxo de dados.",
            "Apresentar a interface de usuário.",
            "Interagir com o banco de dados."
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual a principal característica de um ciclo de vida ágil de desenvolvimento?",
        opcoes: [
            "Planejamento detalhado e inflexível.",
            "Foco em entregas rápidas e incrementais.",
            "Ênfase em documentação extensa.",
            "Não permite mudanças após a fase de requisitos."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "O que é Análise de Sistemas?",
        opcoes: [
            "O processo de codificar um software.",
            "O estudo de como um sistema de software deve funcionar para atender às necessidades do usuário.",
            "O processo de testar um software.",
            "O processo de documentar o código."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "O que é 'Injeção de Dependência' (DI)?",
        opcoes: [
            "Um padrão de projeto para controlar o fluxo de dados.",
            "Um método de autenticação.",
            "Uma técnica para fornecer as dependências de um objeto de forma externa.",
            "Uma técnica de otimização de banco de dados."
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual o objetivo de um Diagrama de Classes UML?",
        opcoes: [
            "Mostrar a sequência de eventos em um sistema.",
            "Descrever a estrutura estática de um sistema.",
            "Representar o fluxo de dados.",
            "Demonstrar a interação entre objetos."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Em Orientação a Objetos, o que é 'Herança'?",
        opcoes: [
            "A capacidade de um objeto ter vários tipos.",
            "A capacidade de um objeto ter um estado interno.",
            "A capacidade de uma classe herdar atributos e métodos de outra classe.",
            "A capacidade de esconder a implementação interna."
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "O que é 'Encapsulamento' em POO?",
        opcoes: [
            "Um método de reutilização de código.",
            "A capacidade de um objeto assumir várias formas.",
            "O agrupamento de dados e métodos que operam nesses dados em uma única unidade.",
            "A capacidade de herdar comportamentos."
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "Em Engenharia de Software, o que é 'Coesão'?",
        opcoes: [
            "A dependência entre módulos diferentes.",
            "O grau em que os elementos de um módulo pertencem uns aos outros.",
            "A capacidade de um sistema crescer.",
            "A facilidade de uso de um software."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "O que é 'Acoplamento' em Engenharia de Software?",
        opcoes: [
            "O grau de interdependência entre os módulos de um sistema.",
            "A capacidade de um módulo ser independente.",
            "A facilidade de testar um módulo.",
            "A organização de arquivos no sistema."
        ],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual é a diferença entre um ciclo de vida tradicional (cascata) e um ciclo ágil?",
        opcoes: [
            "O modelo cascata é mais flexível a mudanças.",
            "O modelo ágil não requer documentação.",
            "O modelo cascata é linear, o ágil é iterativo e incremental.",
            "O modelo ágil é mais caro."
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual das seguintes atividades pertence à fase de Análise de Requisitos?",
        opcoes: [
            "Codificação do software.",
            "Modelagem do banco de dados.",
            "Coleta e documentação das necessidades do cliente.",
            "Realização de testes de aceitação."
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "O que é o conceito de 'Application Development Lifecycle Management' (ADLM)?",
        opcoes: [
            "O processo de gerenciamento de hardware.",
            "O gerenciamento de um aplicativo desde a sua concepção até a aposentadoria.",
            "A fase de manutenção do software.",
            "O processo de deploy contínuo."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual é o principal objetivo da Modelagem Entidade-Relacionamento?",
        opcoes: [
            "Descrever as funcionalidades do sistema.",
            "Representar a estrutura de dados e as relações entre eles.",
            "Gerenciar o ciclo de vida do desenvolvimento.",
            "Definir a interface do usuário."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "O que são 'ligações' em POO?",
        opcoes: [
            "Um tipo de relacionamento entre classes.",
            "Uma forma de criar herança múltipla.",
            "A conexão entre um objeto e outro.",
            "A forma como métodos são chamados."
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "O que é 'Polimorfismo' em POO?",
        opcoes: [
            "A capacidade de herdar atributos.",
            "A capacidade de esconder a implementação.",
            "A capacidade de um método assumir múltiplas formas.",
            "A capacidade de um objeto ter um único tipo."
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "Em UML, o que um diagrama de sequência representa?",
        opcoes: [
            "A estrutura estática do sistema.",
            "A interação entre objetos em uma sequência temporal.",
            "A relação entre entidades do banco de dados.",
            "O fluxo de atividades de um processo."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual é a principal função da Análise de Sistemas?",
        opcoes: [
            "Converter requisitos em código.",
            "Entender e documentar as necessidades do negócio.",
            "Testar o software.",
            "Implantar o software."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "O que significa o termo 'coleta de requisitos'?",
        opcoes: [
            "O processo de criar um banco de dados.",
            "O processo de documentar o código.",
            "O processo de obter as necessidades e expectativas dos stakeholders.",
            "O processo de escrever testes de software."
        ],
        respostaCorreta: 2
    },

    // Tecnologia .NET, C# e ASP.NET (40 questões)
    {
        pergunta: "Em C#, qual a diferença entre `struct` e `class`?",
        opcoes: [
            "Struct é um tipo de referência, class é um tipo de valor.",
            "Struct é um tipo de valor, class é um tipo de referência.",
            "Ambos são tipos de referência.",
            "Ambos são tipos de valor."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual palavra-chave é utilizada em C# para criar uma variável que não pode ter seu valor alterado após a inicialização?",
        opcoes: [
            "`static`",
            "`const`",
            "`readonly`",
            "`var`"
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "No C#, qual a principal diferença entre `public` e `private`?",
        opcoes: [
            "`public` limita o acesso a uma classe, `private` permite acesso irrestrito.",
            "`private` limita o acesso a uma classe, `public` permite acesso irrestrito.",
            "Não há diferença.",
            "Ambos são usados para herança."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual das seguintes estruturas de controle de fluxo é utilizada para iteração em uma coleção em C#?",
        opcoes: [
            "`for`",
            "`while`",
            "`do-while`",
            "`foreach`"
        ],
        respostaCorreta: 3
    },
    {
        pergunta: "O que é um 'namespace' em C#?",
        opcoes: [
            "Uma forma de organizar o código e evitar conflitos de nomes.",
            "Uma variável global.",
            "Um tipo de dado.",
            "Um tipo de método."
        ],
        respostaCorreta: 0
    },
    {
        pergunta: "O que a tecnologia .NET permite aos desenvolvedores?",
        opcoes: [
            "Criar apenas aplicativos Windows.",
            "Desenvolver aplicações para diversas plataformas como Windows, Linux e macOS.",
            "Apenas desenvolver jogos.",
            "Trabalhar exclusivamente com linguagens não-Microsoft."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual das seguintes linguagens de programação é a principal para o ecossistema .NET?",
        opcoes: [
            "Java",
            "Python",
            "C++",
            "C#"
        ],
        respostaCorreta: 3
    },
    {
        pergunta: "O que o .NET Core representa?",
        opcoes: [
            "Uma versão descontinuada do .NET.",
            "Uma plataforma .NET de código aberto e multiplataforma.",
            "Um ambiente de execução apenas para servidores.",
            "Uma ferramenta para desenvolvimento front-end."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual é o objetivo de uma 'REST API' em ASP.NET Core?",
        opcoes: [
            "Apenas criar páginas HTML.",
            "Permitir que diferentes sistemas se comuniquem por meio de requisições HTTP.",
            "Conectar-se diretamente a um banco de dados SQL Server.",
            "Executar códigos em segundo plano."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Em ASP.NET Core, para que serve o `appsettings.json`?",
        opcoes: [
            "Para armazenar o código-fonte da aplicação.",
            "Para configurar o servidor IIS.",
            "Para armazenar configurações como strings de conexão e chaves de API.",
            "Para definir as classes do modelo de dados."
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "Em ASP.NET Core, o que são `Middleware`?",
        opcoes: [
            "Classes que lidam com a View.",
            "Componentes que processam requisições e respostas HTTP.",
            "Rotas de navegação da aplicação.",
            "Bancos de dados temporários."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual anotação é usada para expor um método de Controller como um endpoint HTTP GET em uma Web API?",
        opcoes: [
            "`[HttpPost]`",
            " `[HttpPut]`",
            " `[HttpGet]`",
            " `[HttpDelete]`"
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual das seguintes opções é um exemplo de tratamento de erros em C#?",
        opcoes: [
            "`if/else`",
            "`for/foreach`",
            "`try/catch/finally`",
            "`switch/case`"
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual o principal objetivo de um 'log de erros'?",
        opcoes: [
            "Exibir mensagens de erro para o usuário.",
            "Armazenar dados do usuário.",
            "Registrar informações sobre falhas e exceções para análise futura.",
            "Otimizar o desempenho da aplicação."
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "O que é 'ADO.NET'?",
        opcoes: [
            "Uma ferramenta para criar sites estáticos.",
            "Uma tecnologia para acessar dados em aplicações .NET.",
            "Um framework para desenvolvimento de jogos.",
            "Uma ferramenta para design de interface."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual a diferença entre Entity Framework Core e Dapper?",
        opcoes: [
            "EF Core é um ORM leve, Dapper é um ORM completo.",
            "EF Core é um micro-ORM, Dapper é um ORM completo.",
            "EF Core é um ORM completo com mapeamento objeto-relacional, Dapper é um micro-ORM que foca em velocidade.",
            "Dapper é um ORM completo, EF Core é um micro-ORM."
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "Em SQL Server, qual tipo de dado é mais adequado para armazenar uma data e hora com alta precisão?",
        opcoes: [
            "`DATE`",
            "`TIME`",
            "`DATETIME2`",
            "`NVARCHAR`"
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual das seguintes cláusulas SQL é usada para combinar linhas de duas ou mais tabelas?",
        opcoes: [
            "`SELECT`",
            "`WHERE`",
            "`JOIN`",
            "`GROUP BY`"
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "O que significa 'Single Page Application' (SPA)?",
        opcoes: [
            "Uma aplicação que tem apenas uma página.",
            "Uma aplicação web que carrega dinamicamente o conteúdo sem recarregar a página inteira.",
            "Uma aplicação que é executada apenas em dispositivos móveis.",
            "Uma aplicação que não usa JavaScript."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Em C#, o que é o garbage collector?",
        opcoes: [
            "Uma função para apagar arquivos.",
            "Um programa que limpa o disco rígido.",
            "O gerenciador de memória do .NET que libera objetos não utilizados.",
            "Uma ferramenta para otimizar o código."
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "O que é 'ADO.NET'?",
        opcoes: [
            "Uma ferramenta para criar sites estáticos.",
            "Uma tecnologia para acessar dados em aplicações .NET.",
            "Um framework para desenvolvimento de jogos.",
            "Uma ferramenta para design de interface."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual é a principal função do Entity Framework Core?",
        opcoes: [
            "Gerenciar o ciclo de vida da aplicação.",
            "Fornecer um ORM para interagir com o banco de dados de forma orientada a objetos.",
            "Validar formulários.",
            "Conectar a aplicação a serviços de terceiros."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "O que a cláusula `INNER JOIN` em SQL faz?",
        opcoes: [
            "Retorna todas as linhas de ambas as tabelas.",
            "Retorna linhas que têm correspondência em ambas as tabelas.",
            "Retorna apenas as linhas da tabela da esquerda.",
            "Retorna apenas as linhas da tabela da direita."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual comando SQL é usado para adicionar uma nova coluna a uma tabela?",
        opcoes: [
            "`ADD COLUMN`",
            "`UPDATE COLUMN`",
            "`ALTER TABLE ... ADD COLUMN`",
            "`CREATE COLUMN`"
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "O que é 'ADO.NET'?",
        opcoes: [
            "Uma ferramenta para criar sites estáticos.",
            "Uma tecnologia para acessar dados em aplicações .NET.",
            "Um framework para desenvolvimento de jogos.",
            "Uma ferramenta para design de interface."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual o principal objetivo do Dapper?",
        opcoes: [
            "Mapeamento Objeto-Relacional completo.",
            "Ser um ORM para aplicações web.",
            "Ser um micro-ORM focado em performance para executar consultas SQL.",
            "Gerenciar migrações de banco de dados."
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "No contexto de C#, o que significa 'async' e 'await'?",
        opcoes: [
            "São palavras-chave para criar loops.",
            "São usadas para programação assíncrona, para não bloquear o thread principal.",
            "São usadas para definir classes.",
            "São usadas para herança."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual das seguintes opções é um tipo de dado primitivo em C#?",
        opcoes: [
            "`string`",
            "`class`",
            "`int`",
            "`array`"
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual o principal objetivo da Injeção de Dependências (DI) em .NET Core?",
        opcoes: [
            "Aumentar a velocidade do código.",
            "Reduzir o acoplamento entre os componentes da aplicação.",
            "Gerenciar o banco de dados.",
            "Criar a interface do usuário."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Em C#, o que é uma interface?",
        opcoes: [
            "Um tipo de classe que pode ser instanciada.",
            "Um contrato que define um conjunto de métodos e propriedades que uma classe deve implementar.",
            "Uma variável global.",
            "Um tipo de dado primitivo."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "O que é um 'Controller' em ASP.NET MVC?",
        opcoes: [
            "Uma classe que gerencia a lógica de negócio.",
            "Uma classe que renderiza a interface do usuário.",
            "Uma classe que manipula requisições de usuário e coordena a resposta.",
            "Uma classe que se conecta ao banco de dados."
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual das seguintes opções não é um verbo HTTP em uma REST API?",
        opcoes: [
            "GET",
            "PUT",
            "SAVE",
            "POST"
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "O que a cláusula `GROUP BY` em SQL faz?",
        opcoes: [
            "Filtra linhas de uma tabela.",
            "Ordena o resultado de uma consulta.",
            "Agrupa linhas com valores idênticos em uma ou mais colunas.",
            "Combina tabelas."
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual a diferença entre `INNER JOIN` e `LEFT JOIN`?",
        opcoes: [
            "INNER JOIN retorna todas as linhas, LEFT JOIN retorna apenas as correspondentes.",
            "INNER JOIN retorna apenas as linhas correspondentes, LEFT JOIN retorna todas da tabela da esquerda.",
            "Não há diferença.",
            "LEFT JOIN é mais rápido que INNER JOIN."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "O que o comando `SELECT DISTINCT` faz em SQL?",
        opcoes: [
            "Seleciona todas as colunas.",
            "Retorna apenas valores únicos de uma coluna.",
            "Conta o número de linhas.",
            "Ordena os resultados."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual é a principal função da tag `<script>` em HTML?",
        opcoes: [
            "Definir a folha de estilo.",
            "Criar um hiperlink.",
            "Inserir código JavaScript na página.",
            "Definir o título da página."
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "Em CSS, qual seletor é usado para selecionar um elemento por seu ID?",
        opcoes: [
            "`.` (ponto)",
            "`#` (hash)",
            "`*` (asterisco)",
            "` ` (espaço)"
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual das seguintes opções não é um tipo de teste de software?",
        opcoes: [
            "Teste de Unidade.",
            "Teste de Hardware.",
            "Teste Funcional.",
            "Teste de Aceitação."
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "O que o 'teste unitário' verifica?",
        opcoes: [
            "A funcionalidade de todo o sistema.",
            "A integração entre módulos.",
            "A menor parte testável de uma aplicação, como um método ou classe.",
            "O desempenho do sistema sob carga."
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "Em DevOps, o que é um 'Pipeline'?",
        opcoes: [
            "Um conjunto de testes manuais.",
            "Um processo automatizado de build, teste e deploy.",
            "Um repositório de código.",
            "Um servidor de banco de dados."
        ],
        respostaCorreta: 1
    },
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
let respostaCorretaOriginal = null; // Variável para armazenar a resposta correta

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

    // ----- Lógica para embaralhar as alternativas -----
    const opcoesEmbaralhadas = [...questao.opcoes];
    embaralharArray(opcoesEmbaralhadas);
    
    // Armazena a resposta correta original para uso posterior
    const respostaCorretaTexto = questao.opcoes[questao.respostaCorreta];

    botoesOpcao.forEach((botao, index) => {
        botao.textContent = `${index + 1}. ${opcoesEmbaralhadas[index]}`;
        // Atribui o novo índice embaralhado ao dataset
        botao.dataset.opcoes = opcoesEmbaralhadas[index];
        
        botao.classList.remove('correta', 'incorreta', 'escondido');
        botao.disabled = false;
    });

    // Atualiza a variável global com o texto da resposta correta
    respostaCorretaOriginal = respostaCorretaTexto;

    atualizarPlacar();
    atualizarValoresBotoes();
}

function verificarResposta(e) {
    const respostaClicadaTexto = e.target.dataset.opcoes;
    
    if (respostaClicadaTexto === respostaCorretaOriginal) {
        e.target.classList.add('correta');
        pontuacaoAtual = valores[perguntaAtualIndex];
        setTimeout(() => {
            perguntaAtualIndex++;
            carregarPergunta();
        }, 1500);
    } else {
        e.target.classList.add('incorreta');
        
        // Encontra o botão com a resposta correta original para destacá-lo
        botoesOpcao.forEach(botao => {
            if (botao.dataset.opcoes === respostaCorretaOriginal) {
                botao.classList.add('correta');
            }
        });
        
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
        
        const opcoesIncorretas = [];
        botoesOpcao.forEach((botao, index) => {
            if (botao.dataset.opcoes !== respostaCorretaOriginal) {
                opcoesIncorretas.push(botao);
            }
        });

        // Esconde duas opções incorretas aleatoriamente
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
        
        const respostaCorretaOpcao = respostaCorretaOriginal;
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
        
        const respostaCorretaOpcao = respostaCorretaOriginal;
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