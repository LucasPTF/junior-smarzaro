import Image from "next/image";

type Angle = "a1" | "a2" | "a3";

type HeroContent = {
  eyebrow: string;
  title: string;
  support: string;
  button: string;
};

const heroContent: Record<Angle, HeroContent> = {
  a1: {
    eyebrow: "Ângulo A1 | Dor e nova saída",
    title:
      "Você não precisa cobrar mais a sua equipe. Precisa mostrar um próximo passo que ela consiga aplicar.",
    support:
      "Se você já contratou, treinou e explicou, o problema pode não ser falta de esforço. Na aula Venda 1% Melhor por Dia, você vai conhecer uma forma simples de transformar orientação em ação e voltar a enxergar um caminho possível para as vendas.",
    button: "Quero destravar minhas vendas",
  },
  a2: {
    eyebrow: "Ângulo A2 | Quebra de crença",
    title:
      "Seu problema pode não ser falta de bons vendedores. Pode ser falta de aplicação.",
    support:
      "Quando o treinamento fica na teoria, a equipe volta à rotina e nada muda. Descubra por que melhorar 1% por vez pode encurtar a distância entre saber o que fazer e realmente fazer.",
    button: "Quero conhecer o Ciclo 1%",
  },
  a3: {
    eyebrow: "Ângulo A3 | Resultado prático",
    title:
      "Aprenda passos simples para vender mais, sem curso longo, sem teoria solta e sem mudar tudo de uma vez.",
    support:
      "Em uma aula ao vivo, Júnior Smarzaro mostra como transformar pequenas melhorias em ações que você e sua equipe podem começar a aplicar no mesmo dia.",
    button: "Quero participar por R$ 29,90",
  },
};

const transformations = [
  {
    before: "Muita cobrança no fim do dia",
    after: "Um próximo passo claro para executar",
  },
  {
    before: "Treinamento que anima e logo é esquecido",
    after: "Uma melhoria pequena que cabe na rotina",
  },
  {
    before: "O dono tentando carregar a meta sozinho",
    after: "Cada pessoa entendendo sua parte na venda",
  },
  {
    before: "Mudar tudo e não sustentar nada",
    after: "Melhorar 1% por vez e criar consistência",
  },
];

const discoveries = [
  "Por que saber uma técnica não significa conseguir aplicá-la quando o cliente está na sua frente.",
  "Como uma mudança pequena pode vencer a resistência que aparece quando a equipe recebe mais um treinamento.",
  "O erro de tentar corrigir tudo ao mesmo tempo e como ele alimenta a sensação de que nada funciona.",
  "Como aproximar a orientação da rotina real de quem vende para facilitar a execução no mesmo dia.",
];

const essentialReasons = [
  "Mais informação não resolve falta de aplicação.",
  "A equipe precisa saber o que fazer no próximo atendimento.",
  "Pequenas ações reduzem a resistência de quem acredita não ter tempo para mudar.",
  "Cobrar sem ensinar a executar mantém o empresário preso ao mesmo problema.",
];

const faqItems = [
  {
    question: "Isso é só mais um treinamento motivacional?",
    answer:
      "Não. A proposta é ensinar uma lógica simples de aplicação: entender uma melhoria, levá-la para a ação e ajustar o próximo passo.",
  },
  {
    question: "Minha equipe também pode assistir?",
    answer:
      "A aula foi pensada para empresários e equipes. As condições de acesso precisam ser confirmadas na abertura das inscrições.",
  },
  {
    question: "Preciso ter experiência em vendas?",
    answer:
      "Não. A linguagem foi pensada para ser simples e próxima da rotina de quem vende ou lidera quem vende.",
  },
  {
    question: "A aula garante aumento de faturamento?",
    answer:
      "Não. O resultado depende da aplicação, do contexto e do desempenho de cada pessoa e empresa. A aula oferece orientação prática, não uma garantia de resultado financeiro.",
  },
  {
    question: "A gravação está incluída?",
    answer:
      "Não no ingresso básico. A gravação vitalícia está prevista como adicional opcional por R$ 29,90.",
  },
];

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
    >
      <path
        d="m5 12 4 4L19 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
    >
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CtaLink({ children }: { children: React.ReactNode }) {
  return (
    <a className="button button-primary" href="#oferta">
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="section-lead">{text}</p> : null}
    </div>
  );
}

export function SalesPage({ angle }: { angle: Angle }) {
  const hero = heroContent[angle];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          <span className="brand-name">Júnior Smarzaro</span>
          <span className="brand-line" />
          <span className="brand-subtitle">Vendas aplicadas</span>
        </a>
        <a className="header-link" href="#oferta">
          Ver a aula <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow" aria-hidden="true" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="angle-label">{hero.eyebrow}</div>
            <p className="hero-kicker">Aula ao vivo Venda 1% Melhor por Dia</p>
            <h1>{hero.title}</h1>
            <p className="hero-support">{hero.support}</p>
            <CtaLink>{hero.button}</CtaLink>
            <div className="hero-proof" aria-label="Informações principais">
              <div>
                <strong>Ao vivo</strong>
                <span>Encontro prático</span>
              </div>
              <div>
                <strong>R$ 29,90</strong>
                <span>Ingresso individual</span>
              </div>
              <div>
                <strong>Aplicável</strong>
                <span>Passos para a rotina</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-frame">
              <Image
                src="/junior-hero.png"
                alt="Júnior Smarzaro em retrato profissional"
                fill
                priority
                sizes="(max-width: 860px) 92vw, 46vw"
                className="hero-image"
              />
              <div className="hero-image-shade" aria-hidden="true" />
              <div className="portrait-card">
                <span>15 anos</span>
                <small>vivendo o mercado de vendas</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="statement-strip" aria-label="Princípio da aula">
        <div className="shell statement-inner">
          <span className="statement-index">01</span>
          <p>
            Uma técnica só tem valor quando o vendedor consegue usá-la diante
            de um cliente real.
          </p>
          <span className="statement-mark" aria-hidden="true">
            1%
          </span>
        </div>
      </section>

      <section className="section section-light">
        <div className="shell">
          <SectionHeading
            eyebrow="Da pressão para a aplicação"
            title="O que muda quando a equipe para de apenas ouvir e começa a aplicar?"
            text="Não se trata de exigir uma transformação gigante. Trata-se de tornar o próximo movimento claro o bastante para acontecer."
          />
          <div className="transformation-grid">
            {transformations.map((item, index) => (
              <article className="transformation-card" key={item.before}>
                <span className="card-number">0{index + 1}</span>
                <div className="before-block">
                  <small>Antes</small>
                  <p>{item.before}</p>
                </div>
                <div className="change-arrow" aria-hidden="true">
                  <ArrowIcon />
                </div>
                <div className="after-block">
                  <small>Depois</small>
                  <p>{item.after}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="center-cta">
            <CtaLink>Quero começar pelo próximo passo</CtaLink>
          </div>
        </div>
      </section>

      <section className="section discovery-section">
        <div className="shell discovery-grid">
          <div>
            <SectionHeading
              eyebrow="Conhecimento que sai do papel"
              title="Não é sobre aprender mais. É sobre tornar o que você aprende impossível de ignorar."
            />
            <div className="insight-quote">
              <span aria-hidden="true">“</span>
              <p>Menos acúmulo. Mais execução.</p>
            </div>
          </div>
          <div className="discovery-list">
            {discoveries.map((item, index) => (
              <article key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cycle-section">
        <div className="shell">
          <SectionHeading
            eyebrow="O mecanismo"
            title="O Ciclo 1% Aplicado"
            text="Em vez de tentar corrigir toda a operação, você coloca uma melhoria simples em movimento e usa o que aconteceu para definir o próximo passo."
            align="center"
          />
          <div className="cycle-grid">
            <article>
              <span className="cycle-number">1</span>
              <div>
                <h3>Entenda</h3>
                <p>Escolha uma melhoria simples e enxergue por que ela importa.</p>
              </div>
            </article>
            <article>
              <span className="cycle-number">2</span>
              <div>
                <h3>Aplique</h3>
                <p>Leve a orientação para uma ação possível dentro da rotina.</p>
              </div>
            </article>
            <article>
              <span className="cycle-number">3</span>
              <div>
                <h3>Ajuste</h3>
                <p>Observe o que aconteceu e torne o próximo movimento mais claro.</p>
              </div>
            </article>
          </div>
          <p className="cycle-summary">
            Pequeno o bastante para começar. Consistente o bastante para não
            ficar só na teoria.
          </p>
        </div>
      </section>

      <section className="section lesson-section">
        <div className="shell lesson-grid">
          <div className="lesson-intro">
            <SectionHeading
              eyebrow="A aula"
              title="Venda 1% Melhor por Dia"
              text="Uma aula ao vivo para empresários e equipes que precisam transformar conhecimento em ações comerciais simples."
            />
            <div className="lesson-note">
              <CheckIcon />
              <p>Direto ao que pode ser entendido, praticado e ajustado.</p>
            </div>
          </div>
          <div className="lesson-content">
            <article className="lesson-block">
              <span>Bloco 1</span>
              <h3>Enxergar o que realmente trava a venda</h3>
              <div>
                <strong>Da teoria à execução</strong>
                <p>
                  Entenda por que pessoas que conhecem técnicas continuam
                  repetindo comportamentos que não geram avanço.
                </p>
              </div>
              <div>
                <strong>A menor mudança que move o resultado</strong>
                <p>
                  Aprenda a reduzir uma grande transformação a um passo claro e
                  possível de aplicar.
                </p>
              </div>
            </article>
            <article className="lesson-block lesson-block-accent">
              <span>Bloco 2</span>
              <h3>Colocar o Ciclo 1% em movimento</h3>
              <div>
                <strong>Entenda, aplique, ajuste</strong>
                <p>
                  Conheça a lógica que transforma uma orientação simples em
                  ação prática e melhoria contínua.
                </p>
              </div>
              <div>
                <strong>Leve para a rotina</strong>
                <p>
                  Saia da aula sabendo qual tipo de ação priorizar para não
                  voltar ao piloto automático.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section reasons-section">
        <div className="shell reasons-grid">
          <div className="reasons-title">
            <span>Por que isso é essencial</span>
            <h2>Vendas melhores começam no próximo atendimento.</h2>
          </div>
          <div className="reasons-list">
            {essentialReasons.map((reason) => (
              <div key={reason}>
                <CheckIcon />
                <p>{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section audience-section">
        <div className="shell">
          <SectionHeading
            eyebrow="Para quem é"
            title="Feita para quem precisa ver o conhecimento virar comportamento"
            align="center"
          />
          <div className="audience-grid">
            <article className="audience-card audience-card-yes">
              <span className="audience-tag">Esta aula é para você que</span>
              <ul>
                <li>
                  <CheckIcon />
                  <span>Lidera uma empresa com equipe comercial e sente que precisa acompanhar tudo de perto.</span>
                </li>
                <li>
                  <CheckIcon />
                  <span>Já investiu em treinamento, mas não viu o conteúdo virar comportamento constante.</span>
                </li>
                <li>
                  <CheckIcon />
                  <span>Quer ajudar a equipe a vender melhor sem tentar mudar tudo de uma vez.</span>
                </li>
                <li>
                  <CheckIcon />
                  <span>Está disposto a incentivar pequenas melhorias na rotina.</span>
                </li>
              </ul>
            </article>
            <article className="audience-card audience-card-no">
              <span className="audience-tag">Esta aula não é para quem</span>
              <ul>
                <li>
                  <span className="no-icon" aria-hidden="true">×</span>
                  <span>Procura uma fórmula que garanta faturamento sem execução.</span>
                </li>
                <li>
                  <span className="no-icon" aria-hidden="true">×</span>
                  <span>Não pretende mudar nenhuma ação própria ou da equipe depois da aula.</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section authority-section">
        <div className="shell authority-grid">
          <div className="authority-visual">
            <Image
              src="/junior-palco.png"
              alt="Júnior Smarzaro conduzindo uma apresentação sobre vendas"
              fill
              sizes="(max-width: 860px) 92vw, 48vw"
              className="authority-image"
            />
            <div className="authority-caption">
              <strong>Experiência de campo</strong>
              <span>Loja, porta a porta e empresas</span>
            </div>
          </div>
          <div className="authority-copy">
            <SectionHeading
              eyebrow="Quem conduz a aula"
              title="Antes de ensinar vendas, Júnior vendeu."
            />
            <p>
              Antes de ensinar, Júnior Smarzaro esteve em loja, vendeu de porta
              em porta e viveu a pressão por resultado. Foi um vendedor comum
              que passou a ter resultados acima da média ao transformar a venda
              em uma experiência, em vez de apenas empurrar um produto.
            </p>
            <p>
              Há 15 anos no mercado, Júnior informa já ter treinado mais de 80
              mil alunos presencialmente e atendido mais de 2 mil empresas. Seu
              diferencial é falar com quem está na operação em uma linguagem
              próxima, simples e aplicável.
            </p>
            <div className="authority-stats">
              <div>
                <strong>15</strong>
                <span>anos de mercado</span>
              </div>
              <div>
                <strong>80 mil+</strong>
                <span>alunos presenciais informados</span>
              </div>
              <div>
                <strong>2 mil+</strong>
                <span>empresas atendidas informadas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section offer-section" id="oferta">
        <div className="shell offer-shell">
          <div className="offer-copy">
            <p className="eyebrow">Seu próximo passo</p>
            <h2>Comece pela aula Venda 1% Melhor por Dia</h2>
            <p>
              Uma entrada acessível para entender o que trava a aplicação e
              definir um movimento comercial possível para a rotina.
            </p>
            <ul className="offer-list">
              <li>
                <CheckIcon /> Participação na aula ao vivo
              </li>
              <li>
                <CheckIcon /> Explicação do Ciclo 1% Aplicado
              </li>
              <li>
                <CheckIcon /> Orientação prática para transformar conhecimento em ação
              </li>
            </ul>
            <div className="optional-box">
              <span>Adicionais opcionais previstos</span>
              <p>Reunião individual: R$ 29,90</p>
              <p>Gravação vitalícia: R$ 29,90</p>
            </div>
          </div>
          <aside className="price-card" aria-label="Resumo da oferta">
            <span className="price-label">Ingresso individual</span>
            <div className="price">
              <small>R$</small>
              <strong>29</strong>
              <span>,90</span>
            </div>
            <div className="schedule-list">
              <div>
                <span>Formato</span>
                <strong>Aula ao vivo</strong>
              </div>
              <div>
                <span>Data e horário</span>
                <strong>A confirmar</strong>
              </div>
              <div>
                <span>Plataforma</span>
                <strong>A confirmar</strong>
              </div>
            </div>
            <button className="button button-disabled" type="button" disabled>
              Checkout em configuração
            </button>
            <p className="checkout-note">
              O botão de pagamento será liberado quando o link oficial for
              fornecido.
            </p>
          </aside>
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell faq-grid">
          <SectionHeading
            eyebrow="Dúvidas frequentes"
            title="Antes de decidir, veja o que você precisa saber"
          />
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <details key={item.question}>
                <summary>
                  <span>0{index + 1}</span>
                  {item.question}
                  <b aria-hidden="true">+</b>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-section">
        <div className="final-glow" aria-hidden="true" />
        <div className="shell final-inner">
          <p className="eyebrow">Venda 1% Melhor por Dia</p>
          <h2>
            Pare de tentar mudar tudo. Comece pela próxima ação que sua equipe
            consegue aplicar.
          </h2>
          <a className="button button-outline" href="#oferta">
            <span>Ver os detalhes da aula</span>
            <ArrowIcon />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <div>
            <strong>Júnior Smarzaro</strong>
            <span>Venda 1% Melhor por Dia</span>
          </div>
          <p>
            Conteúdo educacional. Resultados dependem da aplicação e do contexto
            de cada pessoa ou empresa.
          </p>
        </div>
      </footer>
    </main>
  );
}
