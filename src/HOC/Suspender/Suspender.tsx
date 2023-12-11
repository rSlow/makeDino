import React, {PropsWithChildren, Suspense} from 'react';
import Loader from "@/UI/Loader/Loader";


const Suspender: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <Suspense fallback={<Loader/>}>
            {children}
        </Suspense>
    );
};

export default Suspender;