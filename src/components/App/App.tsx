import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import { Route, Routes } from "react-router-dom";
import Contacts from "../Contacts/Contacts";
import Conditions from "../Conditions/Conditions";
import Privacy from "../Privacy/Privacy";
import Press from "../Press/Press";
import Dealer from "../Dealer/Dealer";
import PopupWithAuth from "../PopupWithAuth/PopupWithAuth";
import PopupWithRegister from "../PopupWithRegister/PopupWithRegister";
import PopupWithAlert from "../PopupWithAlert/PopupWithAlert";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import About from "../About/About";
import PopupWithBasketPage from "../PopupWithBasketPage/PopupWithBasketPage";
import PopupWithFavouritePage from "../PopupWithFavouritePage/PopupWithFavouritePage";
import Account from "../Account/Account";
import { ICurrentUser } from "../../utils/interfaces";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import SectionSelection from "../SectionSelection/SectionSelection";
import {
  categoryPath,
  categoryData,
  CATEGORY_BUTTON_TEXT,
  CATEGORY_TITLE_TEXT,
  collectionPath,
  collectionData,
  COLLECTION_BUTTON_TEXT,
  COLLECTION_TITLE_TEXT,
} from "../../utils/constants";
import SectionChoose from "../SectionChoose/SectionChoose";

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
            <Route
              path="/category"
              element={
                <SectionSelection path={categoryPath} fotos={categoryData} />
              }
            />
            <Route
              path="/collection"
              element={
                <SectionSelection
                  path={collectionPath}
                  fotos={collectionData}
                />
              }
            />
            {categoryData.map((i, index) => (
              <Route
                key={index}
                path={`/category/${i.path}`}
                element={
                  <SectionChoose
                    item={i}
                    path={categoryPath}
                    buttonText={CATEGORY_BUTTON_TEXT}
                    titleText={CATEGORY_TITLE_TEXT}
                    data={categoryData}
                  />
                }
              />
            ))}
            {collectionData.map((i, index) => (
              <Route
                key={index}
                path={`/collection/${i.path}`}
                element={
                  <SectionChoose
                    item={i}
                    path={collectionPath}
                    buttonText={COLLECTION_BUTTON_TEXT}
                    titleText={COLLECTION_TITLE_TEXT}
                    data={collectionData}
                  />
                }
              />
            ))}
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
