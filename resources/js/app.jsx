import "./bootstrap";

import React from "react";
import { createRoot } from "react-dom/client";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import EditPage from "./pages/EditPage";

// Mount helper
function mount(id, Component) {
    const el = document.getElementById(id);

    if (el) {
        const props = el.dataset.props ? JSON.parse(el.dataset.props) : {};

        createRoot(el).render(<Component {...props} />);
    }
}

mount("react-home", Home);
mount("react-dashboard", Dashboard);
mount("react-edit-page", EditPage);
