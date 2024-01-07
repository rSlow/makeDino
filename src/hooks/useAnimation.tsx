import {useEffect} from "react";
import Konva from "konva";

interface IFrame {
    time: number;
    timeDiff: number;
    lastTime: number;
    frameRate: number;
}

type AnimationFn = (frame?: IFrame) => boolean | void;

interface useAnimationProps {
    func: AnimationFn
    layers?: Konva.Layer
}

export default function useAnimation({func, layers}: useAnimationProps) {
    useEffect(() => {
        const anim = new Konva.Animation(func, layers);

        anim.start();

        return () => {
            anim.stop()
        }
    }, []);
}