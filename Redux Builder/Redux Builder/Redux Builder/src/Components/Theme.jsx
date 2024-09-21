import { useDispatch } from 'react-redux'
import { toggleTheme } from '../Redux/Theme/Action'

const Theme = () => {

    const dispatch = useDispatch()
    
    const handleTheme = (newTheme) => {
        dispatch(toggleTheme(newTheme))
    }

    return (
        <>
            <div className='theme-btns mb-4'>
                <button className='me-4'
                     
                    onClick={() => handleTheme('light')}
                >Switch to Light</button>
                <button
                   
                    onClick={() => handleTheme('dark')}
                >Switch to Dark</button>
            </div>
        </>
    )
}

export default Theme