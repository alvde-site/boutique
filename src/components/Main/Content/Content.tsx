import { useNavigate } from "react-router-dom";
import { IContentProps } from "../../../utils/interfaces";

function Content({
  children,
  titleText,
  buttonText,
  navigatePath,
}: IContentProps) {
  const navigate = useNavigate();
  function handleClick() {
    navigatePath ? navigate(navigatePath) : navigate("/");
  }
  return (
    <section className="content">
      <div className="content__menu">
        <h2 className="content__title" onClick={handleClick}>
          {titleText}
        </h2>
        <button
          onClick={handleClick}
          className="content__button content__button_position_top"
        >
          {buttonText}
        </button>
      </div>
      {children}
      <button
        onClick={handleClick}
        className="content__button content__button_position_bottom"
      >
        {buttonText}
      </button>
    </section>
  );
}

export default Content;
