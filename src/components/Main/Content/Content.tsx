import { ContentCategoryProps } from "../../../utils/interfaces";

function Content({ children, titleText, buttonText }: ContentCategoryProps) {
  return (
    <section className="content">
      <div className="content__menu">
        <h2 className="content__title">{titleText}</h2>
        <button className="content__button content__button_position_top">
          {buttonText}
        </button>
      </div>
      {children}
      <button className="content__button content__button_position_bottom">
        {buttonText}
      </button>
    </section>
  );
}

export default Content;
