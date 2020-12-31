/// Custom Hook

import {useState} from 'react';

export default function useInput(initalValue){
    const [value, setValue]= useState(initalValue);
    return (
        [
            {
                value,
                onChange : (e) => setValue(e.target.value)
            },
            ()=>setValue(initalValue)
        ]
    );
}