import {useState} from "react";

const CountButton = () => {
    const [count, useCount] = useState(0);
    const addCount = () => useCount(count + 1);
    const minusCount = () => useCount(count - 1);

    return (
        <div className="link__test">
            cnt: {count}
            <button onClick={addCount}>+</button>
            <button onClick={minusCount}>-</button>
        </div>
    );
}



export default CountButton;