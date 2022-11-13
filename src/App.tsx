import React, { useState } from 'react';

//Api
import { Difficulty, fetchQuestions, QuestionState } from './API';

//Componenta
import QuestionCard from './components/QuestionCard';

//Styles
import { GlobalStyle, Wrapper } from "./App.style"

export type AnswerObject = {
  question: string,
  userAnswer: string,
  isCorrect: boolean,
  correctAnswer: string,
};

function App() {
  const TOTAL_QUESTION = 10;

  const [ loading, setLoading ] = useState(false);
  const [ questions, setQuestions ] = useState<QuestionState[]>([]);
  const [ userAnswers, setUserAnswers ] = useState<AnswerObject[]>([]);
  const [ number, setNumber ] = useState(0);
  const [ score, setScore ] = useState(0)
  const [ gameOver, setGameOver ] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    
    setGameOver(false);

    const newQuestions = await fetchQuestions(TOTAL_QUESTION, Difficulty.Easy)
    try {
      setQuestions(newQuestions)
      setNumber(0)
      setUserAnswers([])
      setScore(0)
    } catch (error) {
      console.log(error)
    }

    setLoading(false)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const userAnswer = e.currentTarget.value
      
      const isCorrect = userAnswer === questions[number].correct_answer

      if (isCorrect) {
        setScore(prev => prev + 1)

        const answerObject = {
          question: questions[number].question,
          userAnswer,
          isCorrect,
          correctAnswer: questions[number].correct_answer
        }

        setUserAnswers(prev => [...prev, answerObject])

      }
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1
    
    if (nextQuestion === TOTAL_QUESTION) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }

  }
  console.log(gameOver, number, TOTAL_QUESTION)

  return (
    <>
      <GlobalStyle/>
      <Wrapper>
        <h1>React Quiz</h1>
        {gameOver || number === TOTAL_QUESTION - 1 ? (
            <button className="start" onClick={startTrivia}>Start</button>
          ) 
        : null
        }
        <p className="score">Score: {score}</p>
        {loading && <p className="loading">Loading...</p>}
        {!loading && !gameOver && <QuestionCard
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers && userAnswers[number]}
          questionNumber={number + 1}
          totalQuestion={TOTAL_QUESTION}
          callback={checkAnswer}
        />}
        { !loading && !gameOver && userAnswers.length === number + 1 && number !== TOTAL_QUESTION - 1 ?
          (<button className="next" onClick={nextQuestion}>Next Question</button>)
          : null
        }
      </Wrapper>
    </>

  );
}

export default App;
