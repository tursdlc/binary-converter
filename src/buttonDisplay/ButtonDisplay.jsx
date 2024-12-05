import { useState } from "preact/hooks";
import './ButtonDisplay.css';

const ToggleButton = ({ buttonText, children, startOpen=false}) => {
    const [isVisible, setIsVisible] = useState(startOpen);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    let toggledClassName = "hidden"

    if (isVisible){
        toggledClassName = "isVisible"
    }

    return(
        <div className='divToggleButton'>
            <button onClick={handleClick} className='toggleButton'>{buttonText}</button>
            <div className={ toggledClassName }>{children}</div>
        </div>
    )
}

export default ToggleButton;