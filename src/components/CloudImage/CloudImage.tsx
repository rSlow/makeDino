import React, {useEffect, useState} from 'react';
import useImage from "use-image";
import {Image} from "react-konva";

interface ImageProps {
    url: string
}

interface ISize {
    width?: number
    height?: number
}

const CloudImage: React.FC<ImageProps> = ({url}) => {
    const [image, status] = useImage(url)
    const [size, setSize] = useState<ISize>(
        {width: undefined, height: undefined}
    )

    useEffect(() => {
        if (status === "loaded") {
            const height: number = 80
            const width: number = image.width / image.height * height
            setSize({width: width, height: height})
        }
    }, [status]);

    return (
        <Image
            image={image}
            opacity={0.7}
            width={size.width}
            height={size.height}
        />
    );
};

export default CloudImage;