import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    //index("routes/home.tsx")
    layout("routes/admin/admin-layout.tsx",[
        route('dashboard','routes/admin/dashboard.tsx'),
        route('all-users','routes/admin/all-users.tsx')
    ]),
] satisfies RouteConfig;