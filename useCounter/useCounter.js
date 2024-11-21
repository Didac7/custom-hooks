import { useState } from 'react';

export const useCounter = ( initialValue = 10 ) => {

    const [ counter, setcounter ] = useState( initialValue );

    //el value que puse hay es para poder tener la opcion de 
    //poner aumentar de dos en dos o mas  o restar de dos en dos o mas 
    const increment = ( value = 1 ) => {
        setcounter( counter + value );
    }

    const decrement = ( value = 1 ) => {
        if( counter === 0 ) return;

        setcounter( counter - value );
    }

    const reset = () => {
        setcounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset,

    }

}