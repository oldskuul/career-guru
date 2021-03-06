import React, {useEffect} from 'react';
import styles from './AnswerCard.module.scss'
import PushTheAnswer from "../PushTheAnswer/PushTheAnswer";
import {useDispatch, useSelector} from "react-redux";
import {shuffleFunctionAC} from "../../redux/thunk/shuffleAC";

function AnswerCard({answer, divHandler}) {
    const dispatch = useDispatch()
    const answersShuffled = useSelector(state => state.user.result.shuffle)

    useEffect(() => {
        dispatch(shuffleFunctionAC(answer))
    }, [dispatch, answer])

    return (
        <div className={styles.answerCard}>
            {answersShuffled && (answersShuffled.map(el =>
                <PushTheAnswer key={el._id} divValue={el} divHandler={divHandler}/>))}
        </div>
    );
}

export default AnswerCard;
