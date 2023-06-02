import {
    ADMIN_ROUTE,
    CITIES_ROUTE,
    INDEX_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    ROUTES_ROUTE,
    TICKETS_ROUTE,
    TRAINS_ROUTE,
    PROFILE_ROUTE,
    USER_ROUTE,
    SETTINGS_ROUTE,
    HUMAN_ROUTE,
    SEATS_ROUTE,
    VAN_ROUTE,
    RAILWAY_STATION_ROUTE,
    TRAIN_MODEL_ROUTE, TYPE_VAN_ROUTE, ROUTES_FILTER_ROUTE, ROUTES_ALL_ROUTE, ROUTES_TODAY_ROUTE
} from "./consts";
import Auth from "./pages/Auth/Auth";
import Index from "./pages/Index/Index";
import Admin from "./pages/Admin/Admin";
import Tickets from "./pages/Tickets/Tickets";
import Trains from "./pages/Trains/Trains";
import FilterRoutes from "./pages/FilterRoutes/FilterRoutes";
import UserProfile from "./pages/UserProfile/UserProfile";
import UserRoute from "./components/UserRoute";
import RouteDetails from "./pages/RouteDetails/RouteDetails";
import Human from "./components/SettingsComponents/Human/Human";
import Settings from "./pages/Settings/Settings";
import Ticket from "./components/SettingsComponents/Ticket/Ticket";
import Route from "./components/SettingsComponents/Route/Route";
import Seats from "./components/SettingsComponents/Seats/Seats";
import Train from "./components/SettingsComponents/Train/Train";
import Van from "./components/SettingsComponents/Van/Van";
import RailwayStation from "./components/SettingsComponents/RailwayStation/RailwayStation";
import City from "./components/SettingsComponents/City/City";
import TypeVan from "./components/SettingsComponents/TypeVan/TypeVan";
import TrainModel from "./components/SettingsComponents/TrainModel/TrainModel";
import Routes from "./pages/Routes/Routes";

export const publicRoutes = [
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
        path: TRAINS_ROUTE,
        Component: Trains
    },
    {
        path: ROUTES_FILTER_ROUTE,
        Component: FilterRoutes
    },
    {
        path: ROUTES_TODAY_ROUTE,
        Component: Routes
    },
    {
        path: ROUTES_ROUTE,
        Component: Routes
    },
    {
        path: ROUTES_ROUTE + '/:id',
        Component: RouteDetails
    },
]

export const authRoute = [
    {
        path: USER_ROUTE + '/*',
        Component: UserRoute
    }
]

export const userRoute = [
    {
        path: PROFILE_ROUTE,
        Component: UserProfile
    },
    {
        path: TICKETS_ROUTE,
        Component: Tickets
    },
    {
        path: SETTINGS_ROUTE + '/*',
        Component: Settings
    },
    {
        path: '*',
        Component: UserProfile
    },
]

export const settingsRoute = [
    {
        path: HUMAN_ROUTE,
        Component: Human
    },
    {
        path: TICKETS_ROUTE,
        Component: Ticket
    },
    {
        path: ROUTES_ROUTE,
        Component: Route
    },
    {
        path: SEATS_ROUTE,
        Component: Seats
    },
    {
        path: TRAINS_ROUTE,
        Component: Train
    },
    {
        path: VAN_ROUTE,
        Component: Van
    },
    {
        path: CITIES_ROUTE,
        Component: City
    },
    {
        path: RAILWAY_STATION_ROUTE,
        Component: RailwayStation
    },
    {
        path: TRAIN_MODEL_ROUTE,
        Component: TrainModel
    },
    {
        path: TYPE_VAN_ROUTE,
        Component: TypeVan
    },
    {
        path: '*',
        Component: Human
    },
]