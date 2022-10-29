import "./style.css";

function TotalMoney({ listTransactions }) {
  return (
    <div className="amount__box">
      <div>
        <h2 className="title3">
          Valor total:
          <span>
            R$
            {listTransactions.reduce((a, b) => {
              if (b.type === "Entrada") {
                return a + b.value;
              } else {
                return a - b.value;
              }
            }, 0)}
          </span>
        </h2>
        <p className="body">O valor se refere ao saldo</p>
      </div>
    </div>
  );
}

export default TotalMoney;
