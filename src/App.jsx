import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AppRouter from "./Components/Approutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
