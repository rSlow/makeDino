import React, {useCallback, useEffect, useState} from 'react';
import {Image, Layer, Rect} from "react-konva";
import useImage from "use-image";
import CloudImage from "@/components/CloudImage/CloudImage";

interface Cloud {
    id: number,
    imageUrl: string
}

function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const BackgroundLayer: React.FC = () => {
    const [clouds, setClouds] = useState<Cloud[]>([])

    useEffect(() => {
        setInterval(() => {
            const cloudImageNum = randomInteger(1, 9)
            const imageUrl: string = require(`@/assets/clouds/cloud${cloudImageNum}.png`)

            // setClouds(clouds => clouds.concat({
            //     id: Date.now(),
            //     imageUrl: imageUrl
            // }))
        }, 2000)
    }, []);

    return (
        <Layer>
            {clouds.map(cloud =>
                <CloudImage
                    url={cloud.imageUrl}
                    key={cloud.id}
                />
            )}
        </Layer>
    );
};

export default BackgroundLayer;