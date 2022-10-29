import { useState } from "react";
import Card from "../Card";
import Nocard from "../../assets/NoCard.svg";
import "./style.css";

function List({ listTransactions, setListTransactions }) {
  const [filter, setFilter] = useState("All");

  return (
    <section className="section__box__cards">
      <div className="box__summary">
        <p className="title3">Resumo financeiro</p>
        <div>
          <button
            onClick={() => setFilter("All")}
            style={
              filter === "All"
                ? { backgroundColor: "var(--color-primary)", color: "white" }
                : { backgroundColor: "var(--grey-2)" }
            }
          >
            Todos
          </button>
          <button
            style={
              filter === "Entrada"
                ? { backgroundColor: "var(--color-primary)", color: "white" }
                : { backgroundColor: "var(--grey-2)" }
            }
            onClick={() => setFilter("Entrada")}
          >
            Entradas
          </button>
          <button
            style={
              filter === "Saída"
                ? { backgroundColor: "var(--color-primary)", color: "white" }
                : { backgroundColor: "var(--grey-2)" }
            }
            onClick={() => {
              setFilter("Saída");
            }}
          >
            Despesas
          </button>
        </div>
      </div>
      <ul>
        {filter === "All" ? (
          listTransactions.map((element, index) => (
            <Card
              key={index}
              object={element}
              setListTransactions={setListTransactions}
            />
          ))
        ) : listTransactions.filter((element) => element.type === filter)[0] ? (
          listTransactions
            .filter((element) => element.type === filter)
            .map((element, index) => (
              <Card
                key={index}
                object={element}
                setListTransactions={setListTransactions}
              />
            ))
        ) : (
          <div className="NoCardsList">
            <h1 className="title2">Você ainda não possui nenhum lançamento</h1>
            <img src={Nocard} alt="" />
          </div>
        )}
      </ul>
    </section>
  );
}

export default List;
