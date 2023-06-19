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
import PopupWithRegister from "../PopupWithRegister/PopupWithRegister";
import PopupWithAlert from "../PopupWithAlert/PopupWithAlert";
import NotFoundPage from "../Main/NotFoundPage/NotFoundPage";
import About from "../Main/About/About";
import PopupWithBasketPage from "../PopupWithBasketPage/PopupWithBasketPage";
import PopupWithFavouritePage from "../PopupWithFavouritePage/PopupWithFavouritePage";
import Account from "../Main/Account/Account";
import { ICurrentUser } from "../../utils/interfaces";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import SectionSelection from "../Main/SectionSelection/SectionSelection";
import { categoryCruise2022Path, categoryDressPath, categoryPath } from "../../utils/constants";
import { categoryFotos } from "../../utils/constants";
import { collectionPath } from "../../utils/constants";
import { collectionFotos } from "../../utils/constants";
import SectionChoose from "../Main/SectionChoose/SectionChoose";

function App() {
  const [currentUser, setCurrentUser] = useState<ICurrentUser>({ email: "" });

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
            <Route path="/category" element={<SectionSelection path={categoryPath} fotos={categoryFotos}/>} />
            <Route path="/collection" element={<SectionSelection path={collectionPath} fotos={collectionFotos}/>} />
            <Route path="/category/dress" element={<SectionChoose path={categoryDressPath} fotos={categoryFotos}/>} />
            <Route path="/category/cruise2022" element={<SectionChoose path={categoryCruise2022Path} fotos={categoryFotos}/>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <PopupWithAuth />
        <PopupWithRegister setCurrentUser={setCurrentUser} />
        <PopupWithAlert />
        <PopupWithBasketPage />
        <PopupWithFavouritePage />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
