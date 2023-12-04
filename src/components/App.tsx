import {useState} from 'react';
import c from "./App.module.scss"

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
            <div>
                <button className={c.button} onClick={increment}>+</button>
                <button className={c.button} onClick={decrement}>-</button>
            </div>
            <div>
                Hello world! {count}
            </div>
        </div>
    );
};

export default App;