import {Outlet, useLocation} from "react-router-dom";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Game from "@/pages/Game/Game";

const App: React.FC = () => {
    const location = useLocation()

    return (
        <div>
            <Navbar/>

            <div id="children">
                {location.pathname === "/"
                    ? <Game/>
                    : <Outlet/>
                }
            </div>
        </div>

    );
};

export default App;