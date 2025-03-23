import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Leagues from "./pages/Leagues";
import LeagueSeasons from "./pages/LeagueSeasons";
import Phases from "./pages/Phases";

function App() {
  return (
    <Router> 
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/home/sports" element={<Sports />} />
          <Route path="/home/sport/leagues" element={<Leagues />} />
          <Route path="/home/sport/league/league-seasons" element={<LeagueSeasons />} />
          <Route path="/home/sport/league/league-season/phases" element={<Phases />} />
        </Routes>
    </Router>
  );
}

export default App;
