import {createRoot} from "react-dom/client";
import App from "./components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {About} from "@/pages/About";
import {Policy} from "@/pages/Policy";
import Suspender from "@/HOC/Suspender/Suspender";

const rootHTML = document.getElementById("root")

if (!rootHTML) {
    throw new Error("root HTML element not found")
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/about",
                element: <Suspender children={<About/>}/>
            },
            {
                path: "/policy",
                element: <Suspender children={<Policy/>}/>
            }
        ]
    },
]);

const rootReact = createRoot(rootHTML)

rootReact.render(<RouterProvider router={router}/>)