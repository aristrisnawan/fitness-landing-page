import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ExcerciseComponent from "./components/ExcerciseComponent";
import PhoneComponent from "./components/PhoneComponent";

function App() {
  return (
    <div className="bg-black">
      <PhoneComponent />
      <HeaderComponent />
      <ExcerciseComponent />
    </div>
  );
}

export default App;
