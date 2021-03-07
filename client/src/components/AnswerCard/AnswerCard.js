import React from 'react';
import Button from "../Button/Button";

function AnswerCard({answer}) {
    console.log(answer)
    const buttonHandler = () => {
        console.log('log')
    }
    return (
    <div>
      <div>
        <h3>Вариант 1</h3>
          <Button btnValue={answer[0].answer} buttonHandler={buttonHandler}/>
      </div>
      <div>
        <h3>Вариант 2</h3>
          <Button btnValue={answer[1].answer} buttonHandler={buttonHandler}/>
      </div>
      <div>
        <h3>Вариант 3</h3>
          <Button btnValue={answer[2].answer} buttonHandler={buttonHandler}/>
      </div>
      <div>
        <h3>Вариант 4</h3>
          <Button btnValue={answer[3].answer} buttonHandler={buttonHandler}/>
      </div>
    </div>
  );
}

export default AnswerCard;