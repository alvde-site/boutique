import { IInputTextProps } from "../../utils/interfaces";

function InputText(props:IInputTextProps) {
  return (
    <input
      type="text"
      id={props.name}
      name={props.name}
      minLength={2}
      maxLength={30}
      value={props.values[`${props.name}`] || ""}
      onChange={props.onChange}
      className={props.className}
      placeholder={props.placeholder}
    />
  );
}

export default InputText;
