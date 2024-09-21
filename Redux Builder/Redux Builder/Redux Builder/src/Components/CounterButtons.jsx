 import { useDispatch } from 'react-redux'
import { decrementCount, incrementCount } from '../Redux/Counter/Action'

const CounterButtons = () => {

    
    const dispatch = useDispatch()

    return (
        <>
            <div className='counter-btns mt-2'>
                <button className='me-4'
                
                 onClick={ () => dispatch(decrementCount()) }>-</button>
                <button onClick={ () => dispatch(incrementCount()) }>+</button>
            </div>
        </>
    )
}

export default CounterButtons
