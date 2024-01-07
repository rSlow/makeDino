import React, {useEffect, useRef} from 'react';
import {Circle} from "react-konva";

const Shape: React.FC = () => {
    const circleRef = useRef();

    useEffect(() => {
        // log Konva.Circle instance
        console.log(circleRef.current);
    }, []);

    return <Circle ref={circleRef} draggable={true} x={130} y={100} radius={50} fill="black"/>;

};

export default Shape;