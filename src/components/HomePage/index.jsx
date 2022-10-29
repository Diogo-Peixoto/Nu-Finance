import { useState } from "react";
import Form from "../Form";
import List from "../List";
import TotalMoney from "../TotalMoney";
import "./style.css";
import Nocard from "../../assets/NoCard.svg";

function HomePage() {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <main className="main_homePage">
      <div className="main_homePage-box">
        <section>
          <Form setListTransactions={setListTransactions} />
          <TotalMoney listTransactions={listTransactions} />
        </section>
        {listTransactions.length ? (
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        ) : (
          <div className="NoCards">
            <h1 className="title2">Você ainda não possui nenhum lançamento</h1>
            <img src={Nocard} alt="" />
          </div>
        )}
      </div>
    </main>
  );
}

export default HomePage;
