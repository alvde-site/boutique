import { CATEGORY_BUTTON_TEXT, CATEGORY_TITLE_TEXT, COLLECTION_BUTTON_TEXT, COLLECTION_TITLE_TEXT } from "../../utils/constants";
import Category from "./Category/Category";
import Collection from "./Collection/Collection";
import Content from "./Content/Content";

function Main() {
  return (
    <main className="main">
      <Content children={<Category />} titleText={CATEGORY_TITLE_TEXT} buttonText={CATEGORY_BUTTON_TEXT}/>
      <Content children={<Collection />} titleText={COLLECTION_TITLE_TEXT} buttonText={COLLECTION_BUTTON_TEXT}/>
    </main>
  );
}

export default Main;
