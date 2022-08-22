import "./styles.css";

interface IProps {
  sendEmail?: () => void;
  children?: string;
}

function Button(props: IProps) {
  return (
    <button className="button" onClick={props.sendEmail}>
      {props.children}
    </button>
  );
}

export default Button;
