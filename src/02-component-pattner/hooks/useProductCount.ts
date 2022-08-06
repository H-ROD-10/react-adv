import { useState } from 'react';



export const useProductCount = () => {
    const [counter, setCounter] = useState(0)

    const increaseBy = (value: number) => {
        //Validacion con Math para que nunca sea menos que 0
        setCounter(prev => Math.max(prev + value, 0))
    }

    return {
        counter,
        increaseBy
    }
}