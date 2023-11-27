import { useState } from "react";
import './Counter.css'
const Counter = () => {
    const [count, setCount] = useState(0)
    return (  
        <section className="counter">
            <h1>Counter</h1>
            <div>
                <button
                    onClick={() => setCount(count - 1)}
                >-</button>
                <p>{count}</p>
                <button
                    onClick={() => setCount(count + 1)}
                >+</button>
            </div>
            <button
                onClick={() => setCount(0)}
            >Reset</button>
        </section>
    );
}

export default Counter;