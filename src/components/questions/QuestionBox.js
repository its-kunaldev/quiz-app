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


    useEffect(() => {
        const timer = setInterval(() => {
            
            if(show && !isLoading){
                setCounter(prevState => {
                    return prevState + 1;
                });
            }
                    
        }, 5000);
        if (counter + 1 === +props.value.inputAmount) {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [show, isLoading, counter]);
    
    
    // render options
    let options;
    if (!isLoading) {
        options = allQuestions[counter].incorrect_answers;
        if(show){
            let randomNumber = Math.floor(Math.random() * (options.length + 1));
            options.splice(randomNumber, 0, allQuestions[counter].correct_answer);
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

    
    useEffect( () => {
        if(!isLoading) {
            let loader = document.querySelector('.loader');
            let allOptions = document.querySelectorAll('.options');
        
            allOptions.forEach( opt => {
                opt.addEventListener('click', () => {

                    let statusClass = opt.innerText === allQuestions[counter].correct_answer ? 'correct' : 'wrong'; 
                    opt.classList.add(statusClass);
                    opt.classList.remove('hoverEffect');

                    allOptions.forEach( op => {
                        if(op.innerText === allQuestions[counter].correct_answer){
                            op.classList.add('correct');
                            op.classList.remove('hoverEffect');
                        }
                    });
                    if(loader){
                        // loader.style.animationPlayState = 'none';
                        loader.style.animation = 'none';
                    }

                    setShow(false);
                });
            });
        }
    });

    const buttonHandler = () => {
        setShow(true);
        setCounter(counter + 1);
        // document.querySelector('.loader').style.animation = 'none';
        // document.querySelector('.loader').offsetHeight;
        document.querySelector('.loader').style.animation = 'loading 5s linear infinite';

        let allOptions = document.querySelectorAll('.options');
        allOptions.forEach( opt => {
            if(opt.classList.contains('correct') || opt.classList.contains('wrong')){
                opt.classList.remove('correct');
                opt.classList.remove('wrong');
            }
            opt.classList.add('hoverEffect');
        })
    }


    return (
        <>
            {!isLoading && <div className='ques-box'>
                <div className="status">
                    <h2>Quizer</h2>
                    <div className="timer">
                        <h4>Time</h4>
                        <span>15</span>
                    </div>
                </div>
                <div className="loading-timer">
                    <span className='loader'></span>
                </div>
                <div className="questions">
                    <h2><span>{counter + 1}.</span>{allQuestions[counter].question}</h2>
                    {/* {allQuestions[counter].incorrect_answers.map(ques => {
                        return <p>{ques}</p>
                    })} */}
                    {options.map(opt => {
                        return <button className='options hoverEffect'>{opt}</button>
                    })}
                </div>
                <hr />
                <div className="counter">
                    <p><span>{counter + 1}</span> of <span className='total-ques'>{props.value.inputAmount}</span> Questions</p>
                    {!show && counter+1 < +props.value.inputAmount && <button onClick={buttonHandler}>Next Ques</button>}
                </div>
            </div>}
            {isLoading && <div>LOADINg.....</div>}
        </>
    )
};

export default QuestionBox;