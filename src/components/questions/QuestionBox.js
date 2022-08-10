import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';

import './QuestionBox.css';

const QuestionBox = (props) => {

    const [allQuestions, setAllQuestions] = useState([]);
    const [counter, setCounter] = useState(0);
    // const [counter2, setCounter2] = useState(0);
    const [show, setShow] = useState(true);

    const { isLoading, getData } = useFetch();



    useEffect(() => {

        const getQuestions = (data) => {
            setAllQuestions(data);
        }

        getData(props.value.inputCategory, props.value.inputAmount, props.value.inputDifficulty, getQuestions);
    }, [getData]);
    console.log(allQuestions);
    // console.log(isLoading);


    let timer;
    useEffect(() => {
        // let i = 2;
        timer = setInterval(() => {
            
            if(show && !isLoading){
                setCounter(prevState => {
                    // i = i + 1;
                    return prevState + 1;
                });
            }
            
            // if (counter + 2 === +props.value.inputAmount) {
                //     clearInterval(timer);
                // }
                // if(!show){
                    //     clearInterval(timer);
                    // }
                    
        }, 5000);
        // console.log(counter);
        if (counter + 1 === +props.value.inputAmount) {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [show, isLoading, counter]);
    
    
    // render options
    let options;
    if (!isLoading) {
        options = allQuestions[ counter].incorrect_answers;
        if(show){
            options.splice(Math.floor(Math.random() * allQuestions[counter].incorrect_answers.length), 0, allQuestions[counter].correct_answer);
        }
        // console.log(options);
    }

    // useEffect(() => {
    //     const timer2 = setInterval(() => {
    //         setCounter2(prevState => {
    //             return prevState + 1;
    //         });
    //         console.log(counter2);
    //         if (counter2 == 4) {
    //             clearInterval(timer2);
    //         }
    //     }, 1000);

    //     return () => clearInterval(timer2);
    // }, [counter]);
    
    let statusClass;
    useEffect( () => {
        if(!isLoading) {
            let allOptions = document.querySelectorAll('.options');
            // console.log(allOptions);
        
            allOptions.forEach( opt => {
                console.log(opt)
                opt.addEventListener('click', () => {

                    statusClass = opt.innerText === allQuestions[counter].correct_answer ? 'correct' : 'wrong'; 
                    opt.classList.add(statusClass);
                    opt.classList.remove('options');
        
                    // if(opt.innerText === allQuestions[counter].correct_answer) {
                    //     console.log(opt.innerText);
                    //     opt.classList.add('correct');
                    //     opt.classList.remove('options');
                    // }
                    // else {
                    //     // console.log(opt.innerText);
                    //     opt.classList.add('wrong');
                    //     opt.classList.remove('options');
                    // }

                    setShow(false);

                    // opt.style.backgroundColor = 'rgba(30, 145, 80, 0.27)';
                    // opt.style.borderColor = 'rgba(30, 145, 80, 0.27)';
                    
                });
            });
        }
        // console.log('1st');
    });

    const buttonHandler = () => {
        setShow(true);
        setCounter(counter + 1);

    }


    return (
        <>
            {!isLoading && <div className='ques-box'>
                <div className="status">
                    <h2>Quizer</h2>
                    <div className="timer">
                        <h4>Time Left</h4>
                        <span>{0}</span>
                    </div>
                </div>
                <div className="loading-timer">
                    <span></span>
                </div>
                <div className="questions">
                    <h2><span>{counter + 1}.</span>{allQuestions[counter].question}</h2>
                    {/* {allQuestions[counter].incorrect_answers.map(ques => {
                        return <p>{ques}</p>
                    })} */}
                    {options.map(opt => {
                        return <button className='options'>{opt}</button>
                    })}
                </div>
                <hr />
                <div className="counter">
                    <p><span>{counter + 1}</span> of <span className='total-ques'>{props.value.inputAmount}</span> Questions</p>
                    {!show && <button onClick={buttonHandler}>Next Ques</button>}
                </div>
            </div>}
            {isLoading && <div>LOADINg.....</div>}
        </>
    )
};

export default QuestionBox;