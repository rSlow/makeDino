import {createRoot} from "react-dom/client";
import App from "./components/App";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {About} from "@/pages/About";
import {Policy} from "@/pages/Policy";
import Suspender from "@/HOC/Suspender/Suspender";

const root = document.getElementById("root")

if (!root) {
    throw new Error("root element not found")
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

const container = createRoot(root)

container.render(<RouterProvider router={router}/>)