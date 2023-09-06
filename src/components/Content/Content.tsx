import { IContentProps } from "../../utils/interfaces";

function Content({
  children,
}: IContentProps) {
  return (
    <section className="content" id="content">
      {children}
    </section>
  );
}

export default Content;
