// Este ficheiro controla a lógica de todo o site IGNIS

// Função para abrir e fechar a janela da Inteligência Artificial
function toggleChat() {
    const chat = document.getElementById('janelaChat');
    if (chat) {
        if(chat.classList.contains('hidden')) {
            chat.classList.remove('hidden');
        } else {
            chat.classList.add('hidden');
        }
    }
}

// Função para enviar mensagem no Chat
function enviarMensagemIA() {
    const input = document.getElementById('inputChat');
    const mensagem = input.value.trim();
    if(!mensagem) return;

    const areaMensagens = document.getElementById('areaMensagens');
    
    // Mostra a tua mensagem
    areaMensagens.innerHTML += `
        <div class="flex justify-end pt-2">
            <div class="bg-ignisGold text-white p-3 rounded-2xl rounded-tr-none w-5/6 text-sm shadow-sm">
                ${mensagem}
            </div>
        </div>
    `;
    input.value = '';

    // Simula a resposta da IA após 1 segundo
    setTimeout(() => {
        areaMensagens.innerHTML += `
            <div class="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none w-5/6 text-slate-700 shadow-sm text-sm mt-3">
                Ainda estou em fase de testes, mas em breve vou ajudar-te a analisar a tua carteira de investimentos e calcular a tua taxa de poupança ideal para o FIRE!
            </div>
        `;
        areaMensagens.scrollTop = areaMensagens.scrollHeight;
    }, 1000);
}

function abrirLogin() {
    document.getElementById('janelaLogin').classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Bloqueia o scroll ao fazer login
}

function fecharLogin() {
    document.getElementById('janelaLogin').classList.add('hidden');
    document.body.style.overflow = 'auto'; // Devolve o scroll
}

function fazerLogin() {
    const user = document.getElementById('ignisUser');
    const pass = document.getElementById('ignisPass');
    const erro = document.getElementById('ignisErro');

    if (!user || !pass) return;

    const u = user.value.trim().toLowerCase();

    if (u === 'joao' || u === 'maria' || u === 'lucas') {
        // Autenticação mock com sucesso
        localStorage.setItem('ignisUserLoggedIn', u);
        window.location.href = 'dashboard.html';
    } else {
        if (erro) {
            erro.innerText = 'Utilizador ou palavra-passe incorretos.';
            erro.classList.remove('hidden');
        }
        user.classList.add('border-red-500');
        pass.classList.add('border-red-500');
        setTimeout(() => {
            user.classList.remove('border-red-500');
            pass.classList.remove('border-red-500');
        }, 3000);
    }
}

// ----- LÓGICA DA LITERACIA (ARTIGOS) -----
const baseArtigos = {
    'trinity': {
        titulo: "A Sustentabilidade do Portfólio: Uma Análise do Trinity Study",
        corpo: `
            <p class="font-serif italic text-2xl text-slate-400 mb-10 leading-snug text-justify">"O Trinity Study (1998) é a pedra basilar da reforma antecipada moderna, analisando como ativos voláteis podem sustentar despesas fixas."</p>
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Metodologia e Contexto Histórico</h2>
            <p class="mb-6 text-justify">Conduzido por Philip Cooley, Carl Hubbard e Daniel Walz, o estudo utilizou dados do índice S&P 500 e obrigações de longo prazo entre 1926 e 1995. A grande questão científica era: qual a percentagem máxima que um investidor pode retirar anualmente do seu capital acumulado sem que este chegue a zero antes de 30 anos?</p>
            <h2 class="text-2xl font-bold text-slate-900 mb-4">A Regra dos 4%</h2>
            <p class="mb-6 text-justify">Os resultados demonstraram que portfólios com 75% de ações tiveram uma taxa de sucesso de 98% ao retirar 4% do valor inicial anualmente. Na IGNIS, elevamos esta análise para o contexto europeu, ajustando as taxas de sucesso à carga fiscal portuguesa e às taxas de inflação reportadas pelo BCE.</p>
            <p class="mb-6 text-justify">Através da nossa inteligência artificial, simulamos o <em>Sequence of Returns Risk</em> — o risco de uma queda de mercado acontecer nos primeiros anos da tua reforma — garantindo que o teu plano é robusto mesmo em períodos de 'Bear Market'.</p>
        `
    },
    'etf': {
        titulo: "Eficiência de Custos: A Engenharia dos ETFs",
        corpo: `
            <p class="font-serif italic text-2xl text-slate-400 mb-10 leading-snug text-justify">"O impacto oculto do TER (Total Expense Ratio) pode representar a perda de 20% do teu património final ao longo de 30 anos."</p>
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Estrutura de Replicagem</h2>
            <p class="mb-6 text-justify">Existem dois tipos principais de replicagem em ETFs: Física e Sintética. Na IGNIS, recomendamos maioritariamente a <strong>Replicagem Física (Full Replication)</strong>, onde o fundo detém efetivamente as ações das empresas do índice, minimizando o risco de contraparte.</p>
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Diferimento Fiscal e Acumulação</h2>
            <p class="mb-6 text-justify">Para o investidor português, os ETFs de <strong>Acumulação (Acc)</strong> são matematicamente superiores. Ao reinvestirem os dividendos dentro da estrutura do fundo, o capital cresce sob juros compostos sem o 'travão' fiscal imediato de 28% no IRS, algo que analisamos detalhadamente no teu dashboard personalizado.</p>
        `
    },
    'fiscalidade': {
        titulo: "Engenharia Fiscal em Portugal: Estratégias Legais de Otimização",
        corpo: `
            <p class="font-serif italic text-2xl text-slate-400 mb-10 leading-snug text-justify">"Em Portugal, a gestão eficiente do IRS pode ser a diferença entre um retorno líquido de 5% ou 7%."</p>
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Análise do CIRS Artigo 72.º</h2>
            <p class="mb-6 text-justify">A fiscalidade portuguesa aplica uma taxa liberatória de 28% sobre rendimentos de capitais. No entanto, através do <strong>Englobamento</strong>, investidores com rendimentos mais baixos podem usufruir de taxas de imposto marginais inferiores (a partir de 14,5%), recuperando parte do imposto retido na fonte.</p>
            <h2 class="text-2xl font-bold text-slate-900 mb-4">O Fator Localização</h2>
            <p class="mb-6 text-justify">A IGNIS analisa se a tua corretora opera em território nacional ou estrangeiro, automatizando o preenchimento do <strong>Anexo J</strong>. Compreender as retenções na fonte internacionais (WHT) e os acordos de dupla tributação é vital para não pagares imposto duplicado sobre os teus investimentos globais.</p>
        `
    },
    'markowitz': {
        titulo: "MPT e o Único Almoço Grátis no Mercado",
        corpo: `
            <p class="font-serif italic text-2xl text-slate-400 mb-10 leading-snug text-justify">"O risco não é a volatilidade, é a probabilidade de não atingires o teu objetivo financeiro."</p>
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Harry Markowitz e a Diversificação Matemática</h2>
            <p class="mb-6 text-justify">A Teoria Moderna do Portfólio (MPT) provou que um conjunto de ativos de alto risco pode, quando combinados corretamente, criar um portfólio de baixo risco. Isto acontece através da <strong>baixa correlação</strong> entre classes de ativos (ex: Ações vs Ouro vs Imobiliário).</p>
            <h2 class="text-2xl font-bold text-slate-900 mb-4">A Fronteira Eficiente</h2>
            <p class="mb-6 text-justify">A IGNIS usa algoritmos de otimização de média-variância para garantir que estás na curva de maior retorno possível para a tua tolerância psicológica ao risco. Diversificamos globalmente para eliminar o risco não sistemático (específico de uma empresa ou país).</p>
        `
    },
    'comportamental': {
        titulo: "Behavioral Economics: A Batalha Contra o Próprio Cérebro",
        corpo: `
            <p class="font-serif italic text-2xl text-slate-400 mb-10 leading-snug text-justify">"O maior risco do investimento não é o mercado cair, é tu venderes quando ele cai."</p>
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Vieses Cognitivos do Investidor</h2>
            <p class="mb-6 text-justify">A economia comportamental (Richard Thaler, Daniel Kahneman) revela que o ser humano sofre de <strong>Aversão à Perda</strong>: a dor de perder 1.000€ é duas vezes mais forte do que a alegria de ganhar o mesmo valor. Isto leva os investidores a venderem no fundo do mercado.</p>
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Home Bias e Overconfidence</h2>
            <p class="mb-6 text-justify">Muitos portugueses investem apenas em empresas do PSI20 por 'familiaridade', ignorando 99% do mercado global. A IGNIS atua como um 'guardião emocional', enviando alertas técnicos sempre que o teu comportamento foge à lógica racional de longo prazo.</p>
        `
    },
    'emergencia': {
        titulo: "A Arquitetura da Reserva de Emergência e FGD",
        corpo: `
            <p class="font-serif italic text-2xl text-slate-400 mb-10 leading-snug text-justify">"A reserva de emergência não é um investimento, é um seguro contra a necessidade de liquidez forçada."</p>
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Liquidez vs Rentabilidade e Segurança</h2>
            <p class="mb-6 text-justify">A reserva de emergência deve estar alocada em ativos com <strong>Correlação Zero</strong> com o mercado de ações. Na IGNIS, analisamos os melhores Certificados de Aforro ou Depósitos a Prazo garantidos pelo Fundo de Garantia de Depósitos (FGD) até 100.000€.</p>
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Cálculo Baseado no 'Sleep Well at Night'</h2>
            <p class="mb-6 text-justify">Determinamos a tua reserva baseada na volatilidade do teu emprego e custos fixos. Um trabalhador por conta de outrem pode necessitar de 3 meses, enquanto um freelancer deve ter 9 a 12 meses de despesas líquidas em ativos de alta acessibilidade.</p>
        `
    }
};

function abrirArtigo(id) {
    const art = baseArtigos[id];
    document.getElementById('conteudoTexto').innerHTML = `
        <h1 class="text-4xl md:text-5xl font-black mb-10 text-slate-900 leading-tight">${art.titulo}</h1>
        <div class="space-y-6">${art.corpo}</div>
    `;
    document.getElementById('janelaArtigo').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function fecharArtigo() {
    document.getElementById('janelaArtigo').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// ----- LÓGICA DA COMUNIDADE (FÓRUM) -----
function ativarForumSimulado() {
    document.getElementById('forum-intro').classList.add('hidden');
    document.getElementById('forum-simulado').classList.remove('hidden');
    document.getElementById('area-forum').classList.remove('bg-slate-900');
    document.getElementById('area-forum').classList.add('bg-slate-950');
}

// ----- LÓGICA DE REGISTO (SIMULAÇÃO) -----
function abrirRegisto(plano) {
    document.getElementById('janelaRegisto').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Reset Views
    document.getElementById('step1-form').classList.remove('hidden');
    document.getElementById('step2-form').classList.add('hidden');
    document.getElementById('registoSucesso').classList.add('hidden');
    
    // Restaurar Indicators Visual
    const progresso = document.getElementById('step1-indicator').parentElement;
    if(progresso) progresso.classList.remove('hidden');
    
    document.getElementById('step1-indicator').classList.add('bg-ignisOrange');
    document.getElementById('step1-indicator').classList.remove('bg-slate-200');
    document.getElementById('step2-indicator').classList.add('bg-slate-200');
    document.getElementById('step2-indicator').classList.remove('bg-ignisOrange');
    
    // Reset Erros
    document.getElementById('regErroStep1').classList.add('hidden');
    document.getElementById('regErroStep2').classList.add('hidden');
    
    document.getElementById('registoPlano').innerText = 'Plano Escolhido: ' + plano;
    
    // Limpar Campos
    document.getElementById('regNome').value = '';
    document.getElementById('regApelido').value = '';
    document.getElementById('regEmail').value = '';
    document.getElementById('regData').value = '';
    document.getElementById('regTel').value = '';
    document.getElementById('regPass').value = '';
    document.getElementById('regBanco').value = '';
    document.getElementById('regRendimento').value = '';
    document.getElementById('regTermos').checked = false;
}

function fecharRegisto() {
    document.getElementById('janelaRegisto').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function irParaStep1() {
    document.getElementById('step1-form').classList.remove('hidden');
    document.getElementById('step2-form').classList.add('hidden');
    
    document.getElementById('step2-indicator').classList.remove('bg-ignisOrange');
    document.getElementById('step2-indicator').classList.add('bg-slate-200');
}

function irParaStep2() {
    const nome = document.getElementById('regNome').value.trim();
    const apelido = document.getElementById('regApelido').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const data = document.getElementById('regData').value;
    const pass = document.getElementById('regPass').value.trim();
    const erro1 = document.getElementById('regErroStep1');
    
    if (!nome || !apelido || !email || !data || pass.length < 8) {
        erro1.classList.remove('hidden');
        return;
    }
    
    erro1.classList.add('hidden');
    
    // Ir para o Passo 2
    document.getElementById('step1-form').classList.add('hidden');
    document.getElementById('step2-form').classList.remove('hidden');
    
    // Atualizar Barra Progresso
    document.getElementById('step2-indicator').classList.add('bg-ignisOrange');
    document.getElementById('step2-indicator').classList.remove('bg-slate-200');
}

function concluirSimulacaoRegisto() {
    const banco = document.getElementById('regBanco').value;
    const rendimento = document.getElementById('regRendimento').value;
    const termos = document.getElementById('regTermos').checked;
    const erro2 = document.getElementById('regErroStep2');
    
    if (!banco || !rendimento || !termos) {
        erro2.classList.remove('hidden');
        return;
    }
    
    erro2.classList.add('hidden');
    
    // Mostrar Sucesso Final
    document.getElementById('step2-form').classList.add('hidden');
    document.getElementById('registoSucesso').classList.remove('hidden');
    
    // Esconder barra de progresso
    document.getElementById('step1-indicator').parentElement.classList.add('hidden');
}

function concluirRegisto() {
    localStorage.setItem('ignisUserLoggedIn', document.getElementById('regNome').value.trim().toLowerCase());
    window.location.href = 'dashboard.html';
}