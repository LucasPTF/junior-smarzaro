import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="thank-page">
      <div className="thank-glow" aria-hidden="true" />
      <header className="thank-header">
        <Link className="brand" href="/a1" aria-label="Voltar para a página principal">
          <span className="brand-name">Júnior Smarzaro</span>
          <span className="brand-line" />
          <span className="brand-subtitle">Vendas aplicadas</span>
        </Link>
      </header>

      <section className="thank-content">
        <div className="success-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
            <path
              d="m5 12 4 4L19 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="eyebrow">Próximo passo</p>
        <h1>Obrigado. Sua jornada de aplicação começa aqui.</h1>
        <p className="thank-lead">
          Se você chegou até esta página após concluir sua inscrição, mantenha
          os dados da compra por perto e siga as orientações apresentadas no
          checkout oficial.
        </p>

        <div className="next-steps">
          <article>
            <span>01</span>
            <div>
              <h2>Confira a confirmação</h2>
              <p>
                Verifique os dados exibidos ao final da compra e guarde o
                comprovante.
              </p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h2>Acompanhe o canal informado</h2>
              <p>
                Use apenas o canal oficial indicado durante a inscrição para
                receber orientações sobre a aula.
              </p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h2>Prepare uma situação real</h2>
              <p>
                Pense em uma dificuldade de vendas que você ou sua equipe
                enfrentam hoje. Ela ajudará a aproximar o conteúdo da prática.
              </p>
            </div>
          </article>
        </div>

        <div className="thank-notice">
          <strong>Informação importante</strong>
          <p>
            Os dados oficiais de acesso, data, horário e suporte serão
            adicionados aqui assim que forem definidos.
          </p>
        </div>

        <Link className="button button-outline" href="/a1">
          Voltar para a página da aula
        </Link>
      </section>
    </main>
  );
}
