import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Dashboard } from "./Components/Dashboard";

function App() {
  return (
    <div className="main_container">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
