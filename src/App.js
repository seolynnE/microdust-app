import Header from "./Header";
import Tab from "./Tab";
import ViewAll from "./pages/ViewAll";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ViewAll />
      <Tab />
    </div>
  );
}

export default App;
