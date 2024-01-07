import {Stage, Layer, Image} from 'react-konva';
import Konva from 'konva';
import React, {useEffect, useRef} from "react";
import DinoPNG from "@/assets/dino.png"
import useImage from 'use-image'
import BackgroundLayer from "@/components/Layers/Background/BackgroundLayer";

const Canvas: React.FC = () => {
    return (
        <Stage width={window.innerWidth} height={200} style={{border: "1px black dashed"}}>
            <BackgroundLayer/>
        </Stage>
    );
}

export default Canvas;
