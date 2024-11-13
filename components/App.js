import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy } from '../store/counterSlice';

export const App = () => {
   
    const { counter } = useSelector(state => state.counter);
    const dispatch = useDispatch(); 

    return (
        <div>
            <h1>Challenge 13</h1>
            <hr />
            <span>Counter is: {counter}</span>
            <br />
            <button onClick={() => dispatch(increment())}>+1</button> 
            <button onClick={() => dispatch(decrement())}>-1</button> 
            <button onClick={() => dispatch(incrementBy(3))}>+3</button> 
        </div>
    );
};