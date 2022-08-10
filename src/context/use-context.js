import React, { useState } from 'react'


const IsClickedContext = React.createContext(
    {
        changeContent: false,
        onClick: () => { },
        continue: false,
        isFormSubmit: false,
        formHandler: () => {}
    }
);



export const ClickedContext = (props) => {

    const [isClicked, setIsClicked] = useState(false);
    const [isContinue, setIsContinue] = useState(false);
    const [formSubmit, setFormSubmit] = useState(false);

    const clickHandler = (val) => {
        if (val === 'Continue') {
            setIsClicked(true);
        }
        if (val === 'Start Quiz') {
            setIsContinue(true);
        }
        else {
            setIsContinue(false);
        }
    }

    const submitFormHandler = (val) => {
        setFormSubmit(true);
    }

    return (
        <IsClickedContext.Provider value={{
            changeContent: isClicked,
            onClick: clickHandler,
            continue: isContinue,
            formHandler: submitFormHandler,
            isFormSubmit: formSubmit
        }}>
            {props.children}
        </IsClickedContext.Provider>
    )
};

export default IsClickedContext;