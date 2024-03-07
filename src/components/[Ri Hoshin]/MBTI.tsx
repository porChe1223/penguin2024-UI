import React from "react";
import { useState } from "react";
import styles from "./MBTI.module.css";
type MBTIprops = {
    quiz: string;
    scores: number[];
    index: number;
    handleScoreChange: (index: number, value: number) => void;
}
export const MBTIQuestion = ({ quiz,scores, index, handleScoreChange }: MBTIprops) => {
    const [score, setScore] = useState(0);
    const handleRadioChange = (value: number) => {
        setScore(value);
        handleScoreChange(scores.length, value);
    };
    
    return ( 
        <div className={styles.mbti}>
            {/* 以下質問 */}
            <p>{quiz}と思う。</p>
            <form>
                <label>
                    <input type="radio" name="myRadio" value="0" onChange={() => handleRadioChange(0)} />
                    全く思わない
                </label>
                <label>
                    <input type="radio" name="myRadio" value="25" onChange={() => handleRadioChange(25)} />
                    思わない
                </label>
                <label>
                    <input type="radio" name="myRadio" value="50" onChange={() => handleRadioChange(50)} />
                    分からない
                </label>
                <label>
                    <input type="radio" name="myRadio" value="75" onChange={() => handleRadioChange(75)} />
                    そう思う
                </label>
                <label>
                    <input type="radio" name="myRadio" value="100" onChange={() => handleRadioChange(100)} />
                    全くそう思う
                    <br />
                </label>
            </form>
            <p>Score: {score}</p>
        </div>
    );

};