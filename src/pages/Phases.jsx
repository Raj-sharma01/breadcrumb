import { useLocation } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

function Phases() {
    const queryParams = new URLSearchParams(useLocation().search);
    const leagueSeasonId = queryParams.get("leagueSeasonId");

    return (
        <div>
            <h1>Phases for League Season {leagueSeasonId}</h1>
            <Breadcrumb />
        </div>
    );
}

export default Phases;
