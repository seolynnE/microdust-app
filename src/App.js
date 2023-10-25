import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Tab from "./Tab";
import ViewAll from "./pages/ViewAll";
import ViewMark from "./pages/ViewMark";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ViewAll />} />
          <Route path="/bookMark" element={<ViewMark />} />
        </Routes>
        <Tab />
      </Router>
    </div>
  );
}

export default App;
