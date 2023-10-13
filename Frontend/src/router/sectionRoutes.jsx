import SplashScreen from "../pages/WelcomeScreen/SplashScreen/splashScreen";
import gettingStarted from "../pages/WelcomeScreen/GettingStarted/gettingStarted";
import Home from "../pages/Home/Home";
import { Layout } from "../layout/mainLayout";

const sectionRoutes = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path:"/",
                element: <SplashScreen/>
               
            }
        ]
    }
]

export default sectionRoutes
