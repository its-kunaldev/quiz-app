import React from 'react';
import Button from '../UI/Button';

import './Rules.css';

const Rules = props => {
    return(
        <>
        {/* <Button className="start-btn">Start Quiz</Button> */}
        <div className='rules-box'>
            <h2>Some Rules Of This Quiz</h2>
            <hr />
            <ol className='ol'>
                <li>You will have only <span>15 seconds</span> per each questions.</li>
                <li>Once you select your answer. It can't be undone.</li>
                <li>You can't select any option once time goes off.</li>
                <li>You can't exit from the quiz while you're playing.</li>
                <li>you will get points on the basis of your correct answers.</li>
            </ol>
        </div>
        </>
    )
};

export default Rules;