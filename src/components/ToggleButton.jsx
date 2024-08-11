import { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContextProvider';

const ToggleButton = () => {
    const { isDark, setIsDark } = useContext(AppContext);

    const handleClick = () => {
        setIsDark(prev => !prev);
        localStorage.setItem("mode", isDark ? 'light' : 'dark');
    };

    useEffect(() => {
        document.body.style.backgroundColor = isDark ? '#2F2F2F' : '#fff'
    }, [isDark])

    return (
        <button className="btn btn-primary" onClick={handleClick}>Toggle</button>
    )
}

export default ToggleButton