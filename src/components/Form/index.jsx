import { useState } from "react";
import "./style.css";

function Form({ setListTransactions }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");

  function handleSubmit(event) {
    event.preventDefault();

    setListTransactions((oldList) => [
      ...oldList,
      { description: description, type: type, value: parseInt(value) },
    ]);

    setDescription("");
    setValue("");
    setType("Entrada");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="body" htmlFor="">
          Descrição
        </label>
        <input
          required
          value={description}
          type="text"
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setDescription(event.target.value)}
        />
        <span className="body example">Ex: Compra de roupas</span>
      </div>
      <div className="form_box-value">
        <div className="form_box-value--input">
          <label className="body" htmlFor="">
            Valor
          </label>
          <div>
            <input
              required
              value={value}
              onChange={(event) => setValue(event.target.value)}
              type="number"
              placeholder="0.00"
            />
            <span>R$</span>
          </div>
        </div>
        <div className="form_box-value--select">
          <label className="body" htmlFor="">
            Tipo de valor
          </label>
          <div>
            <select
              required
              value={type}
              onChange={(event) => setType(event.target.value)}
              type="text"
              name=""
              id=""
            >
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saída</option>
            </select>
          </div>
        </div>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
}

export default Form;
