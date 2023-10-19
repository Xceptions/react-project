import { useState } from "react";

interface ButtonType {
  choice: string;
  message: string;
  onClick: () => void;
}

function Buttons({ choice, message, onClick }: ButtonType) {
  return (
    <button className={choice} onClick={onClick}>
      {message}
    </button>
  );
}

export default Buttons;
