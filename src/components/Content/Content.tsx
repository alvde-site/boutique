import { IContentProps } from "../../utils/interfaces";

function Content({
  children,
}: IContentProps) {
  return (
    <section className="content">
      {children}
    </section>
  );
}

export default Content;
