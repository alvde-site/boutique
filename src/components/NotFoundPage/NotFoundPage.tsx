import Content from "../Content/Content";
import {
  NOTFOUND_TITLE_TEXT,
  NOTFOUND_BUTTON_TEXT,
} from "../../utils/constants";
import ContentMenu from "../ContentMenu/ContentMenu";
import ContentButton from "../ContentButton/ContentButton";

function NotFoundPage() {
  return (
    <Content>
      <ContentMenu
        titleText={NOTFOUND_TITLE_TEXT}
        buttonText={NOTFOUND_BUTTON_TEXT}
        navigatePath={"/"}
        cssClass={"content-button_position_top"}
      />
      <div className="notfound">
        <h3 className="notfound__title">404</h3>
        <p className="notfound__subtitle">Ошибка</p>
        <p className="notfound__text">
          возможно этой страницы больше не существует или не существовало
          никогда
        </p>
      </div>
      <ContentButton
        buttonText={NOTFOUND_BUTTON_TEXT}
        navigatePath={"/"}
        cssClass={"content-button_position_bottom"}
      />
    </Content>
  );
}

export default NotFoundPage;
