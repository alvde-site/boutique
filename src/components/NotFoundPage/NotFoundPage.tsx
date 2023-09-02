import Content from "../Content/Content";
import {
  NOTFOUND_TITLE_TEXT,
  NOTFOUND_BUTTON_TEXT,
} from "../../utils/constants";

function NotFoundPage() {
  return (
    <Content titleText={NOTFOUND_TITLE_TEXT} buttonText={NOTFOUND_BUTTON_TEXT}>
      <div className="notfound">
        <h3 className="notfound__title">404</h3>
        <p className="notfound__subtitle">Ошибка</p>
        <p className="notfound__text">
          возможно этой страницы больше не существует или не существовало
          никогда
        </p>
      </div>
    </Content>
  );
}

export default NotFoundPage;
