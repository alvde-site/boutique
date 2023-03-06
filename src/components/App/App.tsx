import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import { Route, Routes } from "react-router-dom";
import Contacts from "../Main/Contacts/Contacts";
import Conditions from "../Main/Conditions/Conditions";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleOpenMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeAllPopups() {
    setIsMenuOpen(false);
  }

  return (
    <div className="page">
      <Header isMenuOpen={isMenuOpen} openMenu={handleOpenMenu} onClose={closeAllPopups}/>
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/conditions" element={<Conditions />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
