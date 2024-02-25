import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import { GuestLayout, DefaultLayout } from "./components";
import { Login, Dashboard, Vote, NotFound, Voted } from "./pages";
import "./index.css";

const App = () => {

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<DefaultLayout />}>
                        <Route path="/vote" element={<Vote />} />
                        <Route path="/" element={<Dashboard />} />
                    </Route>
                    <Route path="/" element={<GuestLayout />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/voted" element={<Voted />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
