import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {UserStore} from "./store/UserStore";
import {CityStore} from "./store/CityStore";
import {StepStore} from "./store/StepStore";
import {TicketStore} from "./store/TicketStore";
import {RouteStore} from "./store/RouteStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        step: new StepStore(),
        city: new CityStore(),
        ticket: new TicketStore(),
        route: new RouteStore(),
    }}>
        <App />
    </Context.Provider>
);
