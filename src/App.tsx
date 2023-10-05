import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CharacterForm from "./components/CharacterForm";

function App() {
  return (
    <div className="App">
      return (
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-character" element={<CharacterForm />} />
            <Route path="/:characterId" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </div>
      );
    </div>
  );
}

export default App;
