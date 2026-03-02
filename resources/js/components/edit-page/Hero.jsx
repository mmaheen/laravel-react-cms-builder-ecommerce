import React from "react";
import Sidebar from "./Sidebar";

export default function Hero({ sidebarOpen, setSidebarOpen }) {
    const handleClick = () => {
        setSidebarOpen(true);
    };

    return (
        <div className="hero">
            <h1 onClick={handleClick} style={{ cursor: "pointer" }}>
                Hero Section (Click Me)
            </h1>

            {/* Render Sidebar as part of the tree */}
            <Sidebar sidebarOpen={sidebarOpen}>
                <h2>Hero Sidebar Content</h2>
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
            </Sidebar>
        </div>
    );
}
