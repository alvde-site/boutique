import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import { Route, Routes, useNavigate } from "react-router-dom";
import Contacts from "../Main/Contacts/Contacts";
import Conditions from "../Main/Conditions/Conditions";
import Privacy from "../Main/Privacy/Privacy";
import Press from "../Main/Press/Press";
import Dealer from "../Main/Dealer/Dealer";
import PopupWithAuth from "../PopupWithAuth/PopupWithAuth";
import PopupWithRegister from "../PopupWithRegister/PopupWithRegister";
import PopupWithAlert from "../PopupWithAlert/PopupWithAlert";
import NotFoundPage from "../Main/NotFoundPage/NotFoundPage";
import About from "../Main/About/About";
import PopupWithBasketPage from "../PopupWithBasketPage/PopupWithBasketPage";
import PopupWithFavouritePage from "../PopupWithFavouritePage/PopupWithFavouritePage";
import Account from "../Main/Account/Account";

function App() {
  const navigate = useNavigate();

  const [isFirstVisitForStormkitServer, setIsFirstVisitForStormkitServer] =
    useState(true);

  useEffect(() => {
    if (isFirstVisitForStormkitServer) {
      setIsFirstVisitForStormkitServer(false);
      navigate("/");
    }
  }, [navigate, isFirstVisitForStormkitServer]);

  return (
    <div className="page">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/press" element={<Press />} />
          <Route path="/dealer" element={<Dealer />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <PopupWithAuth />
      <PopupWithRegister />
      <PopupWithAlert />
      <PopupWithBasketPage />
      <PopupWithFavouritePage />
    </div>
  );
}

export default App;
