import { Outlet } from "react-router-dom";
import NavBar from "./components/general/NavBar";


const App = () => {
    return (
        <div>
            {/* Render NavBar only if the current path is not '/login' */}
            {location.pathname === '/' && <NavBar />}
            <Outlet />
        </div>
    );
};

export default App;