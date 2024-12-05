import { useState } from "preact/hooks";
import './DecimalToBinary.css';


const BinaryConverter = () => {

    const [numberInput, setNumberInput] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const decimalToBinary= (input) => {
        if (input === 0 || input === 1){
            return String(input);
        }
        else {
            return decimalToBinary(Math.floor(input / 2)) + (input % 2);
        }
        
    };
    
    const checkUserInput = () => {
        const inputInt = parseInt(numberInput);

        if (!numberInput || isNaN(inputInt)){
            setError('Error! please enter valid number')
            setNumberInput('');
            return
        }
        setResult(decimalToBinary(inputInt));
        setError('');
    };

    const isValidUserInput = () => {
        const inputInt = parseInt(numberInput);

        if (!numberInput || isNaN(inputInt)){
            return false
        }
        return true
    };

    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            checkUserInput();
        }
    }

    let validInput = false
    if ( numberInput.length === 0 ) {
        validInput = true
    } else {
        validInput = isValidUserInput()
    }

    const clearInput = () => {
        setNumberInput('');
        setResult('');
        setError('');
    };

    return(
        <>
        <div className='converter'>
            <div className='divConverter'>
                <label style={{color: '#495057'}}>Enter decimal number</label>
                <input
                    className='inputConverter'
                    type ='text'
                    value = {numberInput}
                    // @ts-ignore
                    onInput={(e) => setNumberInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <div style= {{color:'red'}}>{validInput ? null : "invalid"}</div>
            </div>
            <p style={{fontWeight: 'bold'}}>{error}</p>
            <button
                className='buttonConverter'
                onClick={checkUserInput}
            >
            Convert
            </button>
            <button 
                class='clearButton'
                onClick={clearInput}
            >Clear</button>
            <p>
                <strong style={{color:'#495057'}}>Binary Number:</strong> 
            </p>
            <div className='resultConverter'>
                <p className='resultP'>{result}</p>
            </div>
        </div>
        </>
    );

}

export default BinaryConverter;