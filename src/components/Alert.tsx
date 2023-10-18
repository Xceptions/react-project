interface AlertParam {
  text: string;
}

function Alert({ text }: AlertParam) {
  return (
    <>
      <div className="alert alert-primary">{text}</div>
    </>
  );
}

export default Alert;
