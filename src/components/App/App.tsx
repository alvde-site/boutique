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
import { useAppDispatch } from "../../utils/hooks";

function App() {
  const dispatch = useAppDispatch();

  const [isPopupWithAuthOpen, setIsPopupWithAuthOpen] = useState(false);
  const [isPopupWithRegisterOpen, setIsPopupWithRegisterOpen] = useState(false);
  const [isPopupWithAlertOpen, setIsPopupWithAlertOpen] = useState(false);
  const [isPopupWithBascketOpen, setIsPopupWithBascketOpen] = useState(false);
  const [isPopupWithFavouriteOpen, setIsPopupWithFavouriteOpen] =
    useState(false);
  const [isFirstVisitForStormkitServer, setIsFirstVisitForStormkitServer] =
    useState(true);

  const navigate = useNavigate();

  function closeAllPopups() {
    dispatch(closeAllPopups);

    setIsPopupWithAuthOpen(false);
    setIsPopupWithRegisterOpen(false);
    setIsPopupWithAlertOpen(false);
    setIsPopupWithBascketOpen(false);
    setIsPopupWithFavouriteOpen(false);
  }

  useEffect(() => {
    if (isFirstVisitForStormkitServer) {
      setIsFirstVisitForStormkitServer(false);
      navigate("/");
    }
  }, [navigate, isFirstVisitForStormkitServer]);

  return (
    <div className="page">
      <Header
        onPopupWithAuthOpen={setIsPopupWithAuthOpen}
        onPopupWithBasketOpen={setIsPopupWithBascketOpen}
        onPopupWithFavouriteOpen={setIsPopupWithFavouriteOpen}
      />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/press" element={<Press />} />
          <Route path="/dealer" element={<Dealer />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <PopupWithAuth
        isOpen={isPopupWithAuthOpen}
        onClose={closeAllPopups}
        onOpenRegisterForm={setIsPopupWithRegisterOpen}
      />
      <PopupWithRegister
        isOpen={isPopupWithRegisterOpen}
        onClose={closeAllPopups}
        onOpenAlertForm={setIsPopupWithAlertOpen}
      />
      <PopupWithAlert isOpen={isPopupWithAlertOpen} onClose={closeAllPopups} />
      <PopupWithBasketPage
        isOpen={isPopupWithBascketOpen}
        onClose={closeAllPopups}
      />
      <PopupWithFavouritePage
        isOpen={isPopupWithFavouriteOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
