import { useState } from "preact/hooks";


function pop(){
    return "test"
}

const myVar = pop()

const DecimalConverter = () => {

    const [numberInput, setNumberInput] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const binaryToDecimal= (input) => {
        // @ts-ignore
        
        const newArray = Array.from(input);
        console.log(newArray)
        
        let total = 0;
        let binaryLenght = newArray.length;
        let multiple = 1;
        for (let i = 1; i <= binaryLenght; i++){
        
            const lastNumber = newArray.pop();
            console.log("last number =" +lastNumber)
            
            console.log('multiple is' + multiple)
            // @ts-ignore
            if(lastNumber == 1){
                total += multiple
                
                console.log('total is' + total)
            }else{
                setError('Error! please enter valid number')
            }
            multiple = multiple * 2
        }
        return total
    };
    
    const checkUserInput = () => {
        const inputInt = parseInt(numberInput);

        if (!numberInput || isNaN(inputInt)){
            setError('Error! please enter valid number')
            setNumberInput('');
            return
        }
        // @ts-ignore
        setResult(binaryToDecimal(numberInput));
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
                <label style={{color: '#495057'}}>Enter binary number</label>
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
            <p className='resultText'>
                <strong>Decimal Number:</strong> 
            </p>
            <div className='resultConverter'>
                <p className='resultP'>{result}</p>
            </div>
        </div>
        </>
    );

}

export default DecimalConverter;