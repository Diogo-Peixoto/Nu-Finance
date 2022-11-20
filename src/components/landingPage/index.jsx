import "./style.css";

import illustrationLandinPage from "../../assets/illustration.svg";

function LandingPage({ setPage }) {
  return (
    <main className="landin-Page">
      <section>
        <figure>
          <h2><span>Nu</span> Finance</h2>
        </figure>
        <h1 className="title1">Centralize o controle das suas finanças</h1>
        <p className="headline">de forma rápida e segura</p>
        <button onClick={() => setPage(true)}>Iniciar</button>
      </section>
      <figure>
        <img
          className="imgIlustration"
          src={illustrationLandinPage}
          alt="Illustration img"
        />
      </figure>
    </main>
  );
}

export default LandingPage;
