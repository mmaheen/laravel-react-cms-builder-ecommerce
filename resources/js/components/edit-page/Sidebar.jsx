import React from "react";

export default function Sidebar({ children, closeSidebar }) {
    return (
        <aside className="sidebar">
            <button className="close-btn" onClick={closeSidebar}>
                ✕
            </button>

            <div className="sidebar-content">{children}</div>
        </aside>
    );
}
