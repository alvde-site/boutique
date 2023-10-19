import { IInputTextProps } from "../../utils/interfaces";

function InputText(props: IInputTextProps) {
  return (
    <input
      type={props.type}
      id={props.name}
      name={props.name}
      minLength={2}
      maxLength={30}
      value={props.values[`${props.name}`] || props.defaultValue || ""}
      onChange={props.onChange}
      className={props.className}
      placeholder={props.placeholder}
    />
  );
}

export default InputText;
