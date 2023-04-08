import "./App.css";
import { data } from "./FamiltTree";
import Family from "./Family";

function App() {
  return (
    <div>
      <Family data={data} />
    </div>
  );
}

export default App;