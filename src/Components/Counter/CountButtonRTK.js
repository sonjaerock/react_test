import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, init } from '../../store/CounterSlice'

const CountButtonRTK = () => {
    const count = useSelector((state) => state.CounterReducer.value)
    const dispatch = useDispatch()

    return (
        <div className="link__test">
            cnt: {count}
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(init(0))}>0</button>
        </div>
    );
}



export default CountButtonRTK;