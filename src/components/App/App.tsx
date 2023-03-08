import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import { Route, Routes } from "react-router-dom";
import Contacts from "../Main/Contacts/Contacts";
import Conditions from "../Main/Conditions/Conditions";
import Privacy from "../Main/Privacy/Privacy";
import Press from "../Main/Press/Press";
import Dealer from "../Main/Dealer/Dealer";
import PopupWithAuth from "../PopupWithAuth/PopupWithAuth";

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
      <Header
        isMenuOpen={isMenuOpen}
        openMenu={handleOpenMenu}
        onClose={closeAllPopups}
      />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/press" element={<Press />} />
          <Route path="/dealer" element={<Dealer />} />
        </Routes>
      </main>
      <Footer />
      <PopupWithAuth />
    </div>
  );
}

export default App;
