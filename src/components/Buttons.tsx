import { useState } from "react";

interface ButtonType {
  choice: string;
  message: string;
}

function Buttons({ choice, message }: ButtonType) {
  return <div className={choice}>{message}</div>;
}

export default Buttons;
