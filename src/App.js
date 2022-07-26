import React, { useState } from 'react';
import Login from "./Layout/Login/Login";
import Timeline from "./Layout/User/Timeline/Timeline";
import Settings from "./Layout/User/Settings/Settings"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useToken from './Layout/Login/useToken';

function App() {
    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;