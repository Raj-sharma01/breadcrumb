import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext"; // Import arrow icon

const Breadcrumb = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // Extract IDs from query parameters
    const sportId = searchParams.get("sportId");
    const leagueId = searchParams.get("leagueId");
    const leagueSeasonId = searchParams.get("leagueSeasonId");

    const paths = [
        { name: "Sports", to: "/home/sport", clickable: true },
        sportId ? { name: "Leagues", to: `/home/sport/leagues?sportId=${sportId}`, clickable: true } : null,
        leagueId ? { name: "League Seasons", to: `/home/sport/league/league-seasons?leagueId=${leagueId}&sportId=${sportId}`, clickable: true } : null,
        leagueSeasonId ? { name: "Phases", to: "", clickable: false } : null,
    ].filter(Boolean); // Remove null values

    return (
        <Breadcrumbs 
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />} // Use arrow (>) as separator
            sx={{ padding: "8px 16px", backgroundColor: "#f5f5f5", borderRadius: "8px" }} // Light background
        >
            {paths.map((item, index) =>
                index === paths.length - 1 || !item.clickable ? (
                    <Typography key={item.name} color="text.primary" sx={{ fontWeight: "bold" }}>
                        {item.name}
                    </Typography>
                ) : (
                    <Typography
                        key={item.name}
                        component={Link}
                        to={item.to}
                        sx={{
                            textDecoration: "none",
                            color: "primary.main",
                            "&:hover": { textDecoration: "underline" },
                        }}
                    >
                        {item.name}
                    </Typography>
                )
            )}
        </Breadcrumbs>
    );
};

export default Breadcrumb;
