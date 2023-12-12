import React, {useState} from 'react';
import c from "./App.module.scss"
import {Link, Outlet} from "react-router-dom";
import DinoPng from "@/assets/dino.png"
import DinoJpg from "@/assets/dino.jpeg"
import DinoSvg from "@/assets/dino.svg"

const App = () => {
    const [count, setCount] = useState<number>(0)

    function increment() {
        setCount(prevState => prevState + 1)
    }

    function decrement() {
        setCount(prevState => prevState - 1)
    }

    return (
        <div style={{marginTop: 30}}>
            <nav>
                <Link to={"/"}>Main page</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/policy"}>Policy</Link>
            </nav>
            <div className={c.count}>{count}</div>
            <div>
                <button className={c.button} onClick={increment}>
                    <span>+</span>
                </button>
                <button className={c.button} onClick={decrement}>
                    <span>-</span>
                </button>
                <div>
                    <img src={DinoPng} alt="DinoPng" width={100} height={100}/>
                    <img src={DinoJpg} alt="DinoJpg" width={100} height={100}/>
                    <div>
                        <DinoSvg className={c.svg} fill={"black"}/>
                    </div>
                </div>
            </div>
            <div>Hello world!</div>

            <div id="children">
                <Outlet/>
            </div>
        </div>

    );
};

export default App;