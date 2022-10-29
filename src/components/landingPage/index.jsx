import "./style.css";
import logo from "../../assets/NuKenzieWhite.svg";
import illustrationLandinPage from "../../assets/illustration.svg";

function LandingPage({ setPage }) {
  return (
    <main className="landin-Page">
      <section>
        <figure>
          <img src={logo} alt="" />
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
