import React, { useState } from "react";
import Header from "../components/edit-page/Header";
import Sidebar from "../components/edit-page/Sidebar";

export default function EditPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeSidebarContent, setActiveSidebarContent] = useState(null);

    const [sections, setSections] = useState({
        hero: false,
        feature: false,
        overview: false,
    });

    const openSidebar = (content) => {
        setActiveSidebarContent(content);
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
        setActiveSidebarContent(null);
    };

    const addHeroSection = () => {
        setSections((prev) => ({ ...prev, hero: true }));
        closeSidebar();
    };

    const addFeatureSection = () => {
        setSections((prev) => ({ ...prev, feature: true }));
        closeSidebar();
    };

    const addOverviewSection = () => {
        setSections((prev) => ({ ...prev, overview: true }));
        closeSidebar();
    };

    return (
        <div className={`main ${sidebarOpen ? "shifted" : ""}`}>
            <Header
                logo="My Logo"
                sections={sections}
                openSidebar={() =>
                    openSidebar(
                        <div className="d-flex flex-wrap">
                            <button
                                className="btn btn-primary m-2"
                                onClick={addHeroSection}
                            >
                                Add Hero
                            </button>

                            <button
                                className="btn btn-primary m-2"
                                onClick={addFeatureSection}
                            >
                                Add Product Feature
                            </button>

                            <button
                                className="btn btn-primary m-2"
                                onClick={addOverviewSection}
                            >
                                Add Overview
                            </button>
                        </div>,
                    )
                }
            />

            <div className="content">
                <h1>Main Page Content</h1>

                {sections.hero && <section>🔥 Hero Section</section>}
                {sections.feature && (
                    <section>📦 Product Feature Section</section>
                )}
                {sections.overview && <section>📖 Overview Section</section>}
            </div>

            {sidebarOpen && (
                <Sidebar closeSidebar={closeSidebar}>
                    {activeSidebarContent}
                </Sidebar>
            )}
        </div>
    );
}
