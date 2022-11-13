import React from 'react'

//Types
import { AnswerObject } from '../App';
import { ButtonWrapper, Wrapper } from './QuestionCard.styles';

type PropType = {
  question: string,
  answers: string[],
  userAnswer: AnswerObject,
  questionNumber: number,
  totalQuestion: number,
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const QuestionCard: React.FC<PropType> = ({ 
  question,
  answers,
  userAnswer,
  questionNumber,
  totalQuestion,
  callback
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNumber} / {totalQuestion}
      </p>
      <p dangerouslySetInnerHTML={{__html: question}}></p>
      <div>
        {answers.map((answer, index) => (
          <ButtonWrapper 
            correct={ userAnswer?.correctAnswer === answer } 
            userClicked={ userAnswer?.userAnswer === answer }
            key={index}
          >
            <button disabled={userAnswer ? true : false} onClick={callback} value={answer}>
              <span dangerouslySetInnerHTML={{__html: answer}}/>
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  )
};

export default QuestionCard;