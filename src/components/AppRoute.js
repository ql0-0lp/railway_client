import React, {useContext} from 'react';
import {Routes, Route} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {authRoute, publicRoutes} from "../routes";
import Index from "../pages/Index/Index";
import {Context} from "../index";

const AppRouter = observer(() => {

    const {user} = useContext(Context)

    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {user.isAuth && authRoute.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<Index to="/" replace />} />
        </Routes>
    );
});

export default AppRouter;