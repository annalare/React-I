interface IProps {
  sendEmail: () => void;
}

function Button(props: IProps) {
  return (
    <button className="button" onClick={props.sendEmail}>
      Quero saber mais
    </button>
  );
}

export default Button;
