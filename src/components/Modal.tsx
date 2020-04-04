import * as React from 'react';
import {FunctionComponent, ReactNode} from "react";
import ReactDOM = require('react-dom');
import './Modal.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface Props {
    title: String,
    close: ()=> void,
    show: Boolean,
    children?: ReactNode
}

const Modal: FunctionComponent<Props> = ({close, children, title, show}) => {
    const closeModal = () => {
        close();
    };
    const content =
        <TransitionGroup component={null}>
            {show &&
            <CSSTransition
                timeout={300}
                classNames="slide"
                mountOnEnter
                unmountOnExit
            >
                <div className="Modal_Wrapper" onClick={()=>closeModal()}>
                    <div className="Modal" onClick={(e)=>e.stopPropagation()}>
                        <div className="Modal_Close" onClick={()=>closeModal()}>X</div>
                        <div className="Modal_Title">
                            {title}
                        </div>
                        <div className="Modal_Content">
                            {children}
                        </div>
                        <div className="Modal_ButtonBorder">
                            <div className="Modal_Button"  onClick={()=>closeModal()}>
                                 OK
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
            }
        </TransitionGroup>;
    return ReactDOM.createPortal(content, document.getElementById('modal'))
};

export default Modal;