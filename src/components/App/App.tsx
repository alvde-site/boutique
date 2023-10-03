import { useEffect, useState } from "react";
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
  CATEGORY_BUTTON_TEXT,
  CATEGORY_TITLE_TEXT,
  collectionPath,
  COLLECTION_BUTTON_TEXT,
  COLLECTION_TITLE_TEXT,
} from "../../utils/constants";
import SectionChoose from "../SectionChoose/SectionChoose";
import { categoryBD, collectionBD } from "../../utils/boutiqueBD";
import ProductCard from "../ProductCard/ProductCard";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { fetchProducts } from "../../services/reducers/productsSlice";
import PopupWithOrdering from "../PopupWithOrdering/PopupWithOrdering";

function App() {
  const dispatch = useAppDispatch();
  const [currentUser, setCurrentUser] = useState<ICurrentUser>({ email: "" });
  const productStatus = useAppSelector((state) => state.products.status);
  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, productStatus]);
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
                <SectionSelection path={categoryPath} fotos={categoryBD} />
              }
            />
            <Route
              path="/collection"
              element={
                <SectionSelection path={collectionPath} fotos={collectionBD} />
              }
            />
            <Route
              path="/category/:sectionId"
              element={
                <SectionChoose
                  path={categoryPath}
                  buttonText={CATEGORY_BUTTON_TEXT}
                  titleText={CATEGORY_TITLE_TEXT}
                  data={categoryBD}
                />
              }
            />
            <Route
              path="/collection/:sectionId"
              element={
                <SectionChoose
                  path={collectionPath}
                  buttonText={COLLECTION_BUTTON_TEXT}
                  titleText={COLLECTION_TITLE_TEXT}
                  data={collectionBD}
                />
              }
            />
            <Route path="/product/:productId" element={<ProductCard />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <PopupWithAuth />
        <PopupWithRegister setCurrentUser={setCurrentUser} />
        <PopupWithAlert />
        <PopupWithBasketPage />
        <PopupWithFavouritePage />
        <PopupWithOrdering />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
