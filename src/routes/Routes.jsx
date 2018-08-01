import {
    Dashboard,
    LibraryBooks,
    BubbleChart
} from '@material-ui/icons';

import DashboardPage from "views/Dashboard/Dashboard.jsx";
import Card from "views/Card/Card.jsx";
import Typography from "views/Typography/Typography.jsx";

const Routes = [
    {
        path: "/dashboard",
        sidebarName: "Dashboard",
        navbarName: "Material Dashboard",
        icon: Dashboard,
        component: DashboardPage
    }, {
        path: "/typography",
        sidebarName: "Typography",
        navbarName: "Typography",
        icon: LibraryBooks,
        component: Typography
    }, {
        path: "/card",
        sidebarName: "Card",
        navbarName: "Card",
        icon: BubbleChart,
        component: Card
    }, {
        redirect: true,
        path: "/",
        to: "/dashboard",
        navbarName: "Redirect"
    }
];

export default Routes;
