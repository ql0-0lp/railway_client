import {
    ADMIN_ROUTE,
    CITIES_ROUTE,
    INDEX_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE, ROUTES_ROUTE,
    TICKETS_ROUTE,
    TRAINS_ROUTE
} from "./consts";
import Auth from "./pages/Auth/Auth";
import Index from "./pages/Index/Index";
import Admin from "./pages/Admin/Admin";
import Tickets from "./pages/Tickets/Tickets";
import Cities from "./pages/Cities/Cities";
import Trains from "./pages/Trains/Trains";
import Routes from "./pages/Routes/Routes";

export const routes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: INDEX_ROUTE,
        Component: Index
    },
    {
        path: TICKETS_ROUTE,
        Component: Tickets
    },
    {
        path: CITIES_ROUTE,
        Component: Cities
    },
    {
        path: TRAINS_ROUTE,
        Component: Trains
    },
    {
        path: ROUTES_ROUTE,
        Component: Routes
    }
]