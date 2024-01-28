import logo from "./icons_assets/Logo.svg";
import "./App.css";
import Header from "./component/Header";
import Main from "./component/Main";
import About from "./component/About";
import Footer from "./component/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
