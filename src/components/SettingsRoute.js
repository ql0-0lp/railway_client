import React from 'react';
import {settingsRoute} from "../routes";
import {Routes, Route} from "react-router-dom";

const SettingsRoute = () => {

    return (
        <Routes>
            {settingsRoute.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
        </Routes>
    );
};

export default SettingsRoute;