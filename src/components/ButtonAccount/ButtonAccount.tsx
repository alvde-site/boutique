import { IButtonAccountProps } from "../../utils/interfaces";

function ButtonAccount({
  handleSubmit,
  buttonText,
  className,
}: IButtonAccountProps) {
  return (
    <button
      type="submit"
      onClick={handleSubmit}
      className={`buttonAccount ${className}`}
    >
      {buttonText}
    </button>
  );
}

export default ButtonAccount;
