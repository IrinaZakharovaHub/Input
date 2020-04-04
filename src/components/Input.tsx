import * as React from 'react';
import { useReducer, useEffect } from 'react';
import {FunctionComponent, ReactNode} from "react";
import {validate} from './../helpers/validate';
import Validator from '../props/Validator'

interface Props {
    type: string,
    onInput: (string)=>void,
    validators: Validator[],
    id: string,
}

interface State  {
    value: string,
    isValid: boolean
}

const reducer = (state: State, action):State => {
    switch(action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
            default:
                return state;
    }
} 

const Input:FunctionComponent<Props> = ({type, onInput, validators, id}) => {
    console.log('child');
    const [val, dispatch] = useReducer(reducer, {
        value: '',
        isValid: false
    });

    const inputHandler = (e) => {
        dispatch({type: 'CHANGE', val: e.target.value, validators})
    }

    useEffect(()=>{
        onInput(val)
    },[val])

    return (
        <>
            <input id={id} type={type} onInput={inputHandler}/>
        </>
    );
}

export default Input;