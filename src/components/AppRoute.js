import React from 'react';
import {Routes, Route} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {routes} from "../routes";
import Index from "../pages/Index/Index";

const AppRouter = observer(() => {

    return (
        <Routes>
            {routes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<Index to="/" replace />} />
        </Routes>
    );
});

export default AppRouter;