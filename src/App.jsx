import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import LandingPage from "./components/landingPage";

function App() {
  const [page, setPage] = useState(false);

  return (
    <div className="App">
      {page ? (
        <>
          <Header setPage={setPage} />
          <HomePage />
        </>
      ) : (
        <LandingPage setPage={setPage} />
      )}
    </div>
  );
}

export default App;
