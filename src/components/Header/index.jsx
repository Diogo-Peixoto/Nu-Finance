import "./style.css";

function Header({ setPage }) {
  return (
    <header>
      <div className="header">
        <figure>
          <h1><span>Nu</span> Finance</h1>
        </figure>
        <button onClick={() => setPage(false)}>Inicio</button>
      </div>
    </header>
  );
}

export default Header;
