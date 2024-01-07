import React from 'react';
import c from "./Game.module.scss"
import Canvas from "@/components/Canvas/Canvas";

const Game = () => {
    return (
        <div className={c.game}>
            <Canvas/>
        </div>
    );
};

export default Game;