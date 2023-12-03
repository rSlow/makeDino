import {useState} from 'react';
import "./App.scss"

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
                <button className="button" onClick={increment}>+</button>
                <button className="button" onClick={decrement}>-</button>
            </div>
            <div>
                Hello world! {count}
            </div>
        </div>
    );
};

export default App;