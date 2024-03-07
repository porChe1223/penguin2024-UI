import "../../App.css";
import React, {useState} from "react";
import useCalculateTotalScore from '../../hooks/useCalculateTotalScore';

import { Routes ,Route ,Link} from 'react-router-dom';
import {MBTIQuestion} from './MBTI.tsx';
import { Result1 } from "./MBTIResult1.tsx";
import { Result2 } from "./MBTIResult2.tsx";
import { colors } from "@mui/material";


function Home() {
  const { scores, handleScoreChange, calculateTotalScore } = useCalculateTotalScore();
  const quizarray= ["よく新しい友人を作る", "結末を自由に解釈できる本や映画が好きだ", "怒りを抑えきれないときがある", "予定表やリストなどの整理、管理ツール使うのが好き"];
  /一つの項目の点数を累計する/ 
  const calculateMBTIPersonalityType = (scores) => {
    const [I, N, F, J] = scores;
    let personalityType = "";
    personalityType += I > 50 ? "I" : "E";
    personalityType += N > 50 ? "N" : "S";
    personalityType += F > 50 ? "F" : "T";
    personalityType += J > 50 ? "J" : "P";

    return personalityType;
  };
  
  return (
    <div className={"appmbti"}>
      {/* <h1>MBTI診断</h1> */}
      <p>自分の性格タイプを明らかにしましょう</p>
      <p>その性格タイプがどのエンジニアに向いているか知りましょう</p>
      <hr></hr>
      <hr></hr>
      
      {quizarray.map((quiz,index) => (
        <div key={index}>
        <MBTIQuestion quiz={quiz} scores={scores} index={index} handleScoreChange={handleScoreChange} />
        <hr />
    </div>
      ))}
      
      <button><Link to="/MBTIResult1" onClick={calculateTotalScore}>診断結果を見る</Link></button>
      <br />
      <br />

    </div>

  );
}

export default Home;