import {
  CATEGORY_BUTTON_TEXT,
  CATEGORY_TITLE_TEXT,
  COLLECTION_BUTTON_TEXT,
  COLLECTION_TITLE_TEXT,
} from "../../utils/constants";
import Category from "./Category/Category";
import Collection from "./Collection/Collection";
import Companies from "./Companies/Companies";
import Content from "./Content/Content";
import Showcase from "./Showcase/Showcase";

function Main() {
  return (
    <main className="main">
      <Showcase />
      <Content
        children={<Category />}
        titleText={CATEGORY_TITLE_TEXT}
        buttonText={CATEGORY_BUTTON_TEXT}
      />
      <Content
        children={<Collection />}
        titleText={COLLECTION_TITLE_TEXT}
        buttonText={COLLECTION_BUTTON_TEXT}
      />
      <Companies />
    </main>
  );
}

export default Main;
