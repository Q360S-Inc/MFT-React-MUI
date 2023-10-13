import { createBrowserRouter } from "react-router-dom";
import authRoutes from "./authRoutes";
import sectionRoutes from "./sectionRoutes";


const routes = [...authRoutes, ...sectionRoutes,];

const router = createBrowserRouter(routes);

export default router;