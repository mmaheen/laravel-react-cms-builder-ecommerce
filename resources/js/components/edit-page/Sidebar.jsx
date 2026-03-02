import React from "react";
export default function Sidebar({ sidebarOpen }) {
    return (
        <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
            <ul>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
            </ul>
        </aside>
    );
}
