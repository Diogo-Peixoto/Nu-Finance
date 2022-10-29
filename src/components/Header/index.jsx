import "./style.css";
import logo from "../../assets/NuKenzieBlack.png";

function Header({ setPage }) {
  return (
    <header>
      <div className="header">
        <figure>
          <img src={logo} alt="Logo Kenzie" />
        </figure>
        <button onClick={() => setPage(false)}>Inicio</button>
      </div>
    </header>
  );
}

export default Header;
