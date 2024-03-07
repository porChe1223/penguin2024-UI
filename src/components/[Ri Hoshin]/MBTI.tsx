import React from "react";
import { useState } from "react";
import styles from "./MBTI.module.css";
type MBTIprops = {
    quiz: string;
    setScores: React.Dispatch<React.SetStateAction<number[]>>;
}
export const MBTIQuestion = ({ quiz,setScores }: MBTIprops) => {
    const [score, setScore] = useState(0);
    const handleScoreChange = (value: number) => {
        setScore(value);
    };
    return ( 
        <div className={styles.mbti}>
            {/* 以下質問 */}
            <p>{quiz}と思う。</p>
            <form>
                <label>
                    <input type="radio" name="myRadio" value="0" onChange={() => handleScoreChange(0)} />
                    全く思わない
                </label>
                <label>
                    <input type="radio" name="myRadio" value="25" onChange={() => handleScoreChange(25)} />
                    思わない
                </label>
                <label>
                    <input type="radio" name="myRadio" value="50" onChange={() => handleScoreChange(50)} />
                    分からない
                </label>
                <label>
                    <input type="radio" name="myRadio" value="75" onChange={() => handleScoreChange(75)} />
                    そう思う
                </label>
                <label>
                    <input type="radio" name="myRadio" value="100" onChange={() => handleScoreChange(100)} />
                    全くそう思う
                    <br />
                </label>
            </form>
            <p>Score: {score}</p>
        </div>
    );

};