import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Box, Tabs, Tab, Button } from "@mui/material";

const Home = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <Link to="/home/sports/">go to sports</Link>
            <Box sx={{ width: "100%", bgcolor: "#f5f5f5", p: 1, borderRadius: "8px" }}>
                <Tabs
                    value={activeTab}
                    onChange={(_event, newValue) => setActiveTab(newValue)}
                    sx={{
                        "& .MuiTab-root": { 
                            textTransform: "none",
                            padding: "10px 20px",
                            border: "1px solid #d0d0d0",
                            backgroundColor: "#fff",
                            color: "#1976d2",
                            minWidth: "120px",
                            transition: "all 0.2s ease-in-out",
                            "&:hover": {
                                backgroundColor: "#e0e0e0",
                            },
                            "&.Mui-selected": {
                                backgroundColor: "#1976d2",
                                color: "#fff",
                                borderColor: "#1976d2",
                            },
                        },
                        "& .MuiTab-root:first-of-type": {
                            borderRadius:"6px 0px 0px 6px",
                        },
                        "& .MuiTab-root:last-of-type": {
                            borderRadius:"0px 6px 6px 0px",
                        },
                    }}
                    
                >
                    <Tab label="Today" />
                    <Tab label="Scheduled" />
                    <Tab label="Completed" />

                </Tabs>

                {/* Tab Content */}
                <Box sx={{ p: 3, bgcolor: "#fff", borderRadius: "8px", mt: 2, boxShadow: "0px 2px 4px rgba(0,0,0,0.1)" }}>
                    {activeTab === 0 && <div>📊 List of Today's match</div>}
                    {activeTab === 1 && <div>✅ List of Scheduled match</div>}
                    {activeTab === 2 && <div>📜 List of Completed match</div>}
                </Box>
            </Box>
        </div>
    )
}

export default Home
