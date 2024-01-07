import React, {useEffect, useRef} from 'react';
import Konva from "konva";
import {Layer, RegularPolygon, Stage} from "react-konva";

const Canvas2 = () => {
    const stageWidth = window.innerWidth
    const stageHeight = window.innerHeight

    const amplitude = 150;
    const period = 2000;
    // in ms
    const centerX = stageWidth / 2;

    const stageRef = useRef(null);
    const layerRef = useRef(null);
    const hexagonRef = useRef(null);

    useEffect(() => {
        const anim = new Konva.Animation(function (frame) {
            hexagonRef?.current.x(
                amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX
            );
        }, layerRef?.current);

        anim.start();

        return () => {
            anim.stop()
        }
    }, []);

    return (
        <Stage
            ref={stageRef}
            width={stageWidth}
            height={stageHeight}
        >
            <Layer ref={layerRef}>
                <RegularPolygon
                    draggable
                    ref={hexagonRef}
                    x={stageWidth / 2}
                    y={stageHeight / 2}
                    sides={6}
                    radius={20}
                    fill={'red'}
                    stroke={'black'}
                    strokeWidth={4}
                />
            </Layer>
        </Stage>
    );
};

export default Canvas2;