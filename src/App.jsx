import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Screen from "./components/Screen";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Screen>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Screen>
    </Router>
  );
}

export default App;
