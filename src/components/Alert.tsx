interface AlertParam {
  children: string;
  type: string;
}

function Alert({ children, type }: AlertParam) {
  return (
    <>
      <div className={"alert alert-" + type}>{children}</div>
    </>
  );
}

export default Alert;
