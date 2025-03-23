import { useLocation, Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

function LeagueSeasons() {
    const queryParams = new URLSearchParams(useLocation().search);
    const leagueId = queryParams.get("leagueId");
    const sportId = queryParams.get("sportId");

    return (
        <div>
            <h1>Seasons for League {leagueId}</h1>
            <h1>Select league season</h1>
            <Breadcrumb />
            <Link to={`/home/sport/league/league-season/phases?leagueSeasonId=1&leagueId=${leagueId}&sportId=${sportId}`}>League Season 1</Link>
            <Link to={`/home/sport/league/league-season/phases?leagueSeasonId=2&leagueId=${leagueId}&sportId=${sportId}`}>League Season 2</Link>
        </div>
    );
}

export default LeagueSeasons;
