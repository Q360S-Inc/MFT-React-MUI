// Auth Routes
import Login from "../pages/Auth/Login/Login";
import Signup from "../pages/Auth/Signup/Signup";
import SplashScreen from "../pages/WelcomeScreen/SplashScreen/splashScreen";


const authRoutes = [
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <Signup/>,
    },
    {
        path: "/splashScreen",
        element: <SplashScreen/>
    }
];

export default authRoutes;