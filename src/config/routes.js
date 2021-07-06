
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

import AdminHome from '../pages/Admin'
import AdminSignIn from "../pages/Admin/SignIn";

const routes = [
    {
        patch: "/admin",
        exact: false,
        component: LayoutAdmin,
        routes: [
            {
                patch: "/admin",
                exact: true,
                component: AdminHome,
            },
            {
                patch: "/admin/login",
                exact: true,
                component: AdminSignIn,
            }
        ]
    }
];

export default routes;