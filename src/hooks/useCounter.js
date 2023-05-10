import { useState, useEffect } from 'react';

export default function useCounter(num1, num2){
    const [number, setNumber] = useState(num2)
    
    useEffect(() => {
        if(number < num1){
            setNumber( number + 1)
        }
    }, [number]);

    return number;
}