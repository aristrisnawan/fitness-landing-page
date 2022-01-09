import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ExcerciseComponent from "./components/ExcerciseComponent";

function App() {
  return (
    <div className="bg-black">
      <HeaderComponent />
      <ExcerciseComponent />
    </div>
  );
}

export default App;
