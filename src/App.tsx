import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import ListGroup from "./components/ListGroup";

let items = ["Enugu", "Anambra", "Imo", "Ebonyi", "Abia"];

function App() {
  return (
    <div>
      <Buttons choice="btn btn-primary" message="select option" />
    </div>
  );
}

export default App;
