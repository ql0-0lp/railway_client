import React from 'react';
import {userRoute} from "../routes";
import {Routes, Route} from "react-router-dom";

const UserRoute = () => {

    return (
        <Routes>
            {userRoute.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
        </Routes>
    );
};

export default UserRoute;