import React, { useState } from "react";
import Sidebar from "../components/edit-page/Sidebar";
import { CiMenuBurger } from "react-icons/ci";
export default function EditPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className={`main ${sidebarOpen ? "shifted" : ""}`}>
            <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                facilis, animi soluta, assumenda corrupti iste praesentium
                distinctio nobis vel veniam dolor laboriosam deleniti eum fugiat
                blanditiis impedit neque ullam nostrum?
            </h1>
            <p>This is Edit page (React inside Blade)</p>
            <button
                className="sidebar-toggle"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                <CiMenuBurger />
            </button>
            <Sidebar sidebarOpen={sidebarOpen} />
        </div>
    );
}
