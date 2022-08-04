import { useState } from 'react';
import './App.css';

import QuizForm from './components/form/QuizForm';
import Rules from './components/rules/Rules';

function App() {

  const [isClicked, setIsClicked] = useState(false);

  // fetch(`https://opentdb.com/api.php?amount=10&category=18`)
  // .then( (response) => {
  //   console.log(response);
  //   return response.json()
  // })
  // .then((data) => {
  //   console.log(data);
  // })
  // .catch(err => {
  //   console.log(err);
  // })

  // fetch(`https://quizapi.io/api/v1/questions?apiKey=WrxxpxGNWDKICApehb1WcYUMIHfhVASFBW9LUihi&category=linux&difficulty=Medium&limit=15&tags=Linux`)
  // .then( (response) => {
  //   console.log(response);
  //   return response.json()
  // })
  // .then((data) => {
  //   console.log(data);
  // })
  // .catch(err => {
  //   console.log(err);
  // })

  return (
    <>
    {!isClicked && <div className="startup">
      <Rules />
    </div>}
    {isClicked && <div className="App">
      <QuizForm />
    </div>}
    </>
  );
}

export default App;
