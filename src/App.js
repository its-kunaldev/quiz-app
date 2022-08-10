import React, { useContext} from 'react';
import './App.css';

import QuizForm from './components/form/QuizForm';
import Rules from './components/rules/Rules';
import IsClickedContext from './context/use-context';

function App() {

  const ctx = useContext(IsClickedContext);

  // fetch(`https://opentdb.com/api_category.php`)
  // // fetch(`https://opentdb.com/api_count_global.php`)
  // // fetch(`https://opentdb.com/api.php?amount=10&category=30&difficulty=medium`)
  // .then( (response) => {
  //   // console.log(response);
  //   return response.json()
  // })
  // .then((data) => {
  //   // console.log(data);
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
      {!ctx.changeContent && <div className="startup">
        <Rules />
      </div>}
      {ctx.changeContent && <div className="App">
        <QuizForm />
      </div>}
    </>
  );
}

export default App;
