import { useLocation, Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

function Leagues() {
    const queryParams = new URLSearchParams(useLocation().search);
    const sportId = queryParams.get("sportId");

    return (
        <div>
            <h1>Leagues for Sport {sportId}</h1>
            <h1>Select league</h1>
            <Breadcrumb />
            <Link to={`/home/sport/league/league-seasons?leagueId=1&sportId=${sportId}`}>League 1</Link>
            <Link to={`/home/sport/league/league-seasons?leagueId=2&sportId=${sportId}`}>League 2</Link>
        </div>
    );
}

export default Leagues;
