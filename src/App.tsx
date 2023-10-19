import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import ListGroup from "./components/ListGroup";

let items = ["Enugu", "Anambra", "Imo", "Ebonyi", "Abia"];

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && <Alert type="primary">My Alert</Alert>}
      <Buttons
        choice="btn btn-primary"
        message="My button"
        onClick={() => setAlertVisible(true)}
      />
    </div>
  );
}

export default App;
