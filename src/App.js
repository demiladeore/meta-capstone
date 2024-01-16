import logo from "./icons_assets/Logo.svg";

import "./App.css";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header logo={logo} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
