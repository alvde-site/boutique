import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleOpenMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="page">
      <Header isMenuOpen={isMenuOpen} openMenu={handleOpenMenu} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
