import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

function Sports() {
    return (
        <div>
            <h1>Sports Page</h1>
            <h1>Select your sport</h1>
            <Breadcrumb />
            <Link to="/home/sport/leagues?sportId=1">Sport 1</Link>
            <Link to="/home/sport/leagues?sportId=2">Sport 2</Link>
            <Link to="/home/sport/leagues?sportId=3">Sport 3</Link>
        </div>
    );
}

export default Sports;
