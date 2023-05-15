import React, {Component, useContext} from 'react';
import {Routes, Route} from "react-router-dom";
import Cinema from "../pages/Cinema";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {route.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<Cinema to="/" replace />} />
        </Routes>
    );
});

export default AppRouter;