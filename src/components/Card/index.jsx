import "./style.css";
import trash from "../../assets/trash.svg";

function Card({ object, setListTransactions }) {
  function handleRemove() {
    setListTransactions((oldList) => oldList.filter((iten) => iten !== object));

  }

  return (
    <li
      style={{
        borderLeft:
          object.type === "Entrada"
            ? "4px solid var(--color-secondary)"
            : "4px solid var(--grey-2)",
      }}
    >
      <div>
        <h2 className="title3">{object.description}</h2>
        <p>{object.type}</p>
      </div>
      <div>
        <p>R$ {object.value}</p>
        <figure onClick={handleRemove}>
          <img src={trash} alt="Lixeira" />
        </figure>
      </div>
    </li>
  );
}

export default Card;
