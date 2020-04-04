import * as React from 'react';
import {FunctionComponent} from "react";
import Input from './Input';
import {MIN, MAX} from './../helpers/validate';


const Root:FunctionComponent = () => {
    console.log('parent');

    const inputHandler = (val) => {
        console.log('val',val);
    }

    const clickHandler = () => {
        console.log('click');

    }

    return (
        <>
            <Input id="title" type="text" onInput={inputHandler} validators={[MAX(10)]}/>
            <button onClick={clickHandler}>
                Click
            </button>  
        </>
    );
}

export default Root;