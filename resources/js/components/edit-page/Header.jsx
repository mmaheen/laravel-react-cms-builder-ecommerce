import React from "react";
import { MdAdd } from "react-icons/md";

export default function Header({ logo, openSidebar, sections }) {
    return (
        <nav className="header">
            <h1>{logo}</h1>

            <ul>
                <li>
                    <a href="#">Home</a>
                </li>

                {sections.hero && (
                    <li>
                        <a href="#">Hero</a>
                    </li>
                )}
                {sections.feature && (
                    <li>
                        <a href="#">Feature</a>
                    </li>
                )}
                {sections.overview && (
                    <li>
                        <a href="#">Overview</a>
                    </li>
                )}

                <li>
                    <button className="add-button" onClick={openSidebar}>
                        <MdAdd />
                    </button>
                </li>
            </ul>
        </nav>
    );
}
