import {lazy} from "react";

export const PolicyLazy = lazy(
    () => import("./Policy")
)