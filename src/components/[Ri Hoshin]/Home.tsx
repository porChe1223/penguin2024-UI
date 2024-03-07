import "../../App.css";
import React, {useState} from "react";

import { Routes ,Route ,Link} from 'react-router-dom';
import {MBTIQuestion} from './MBTI.tsx';
import { Result1 } from "./MBTIResult1.tsx";
import { Result2 } from "./MBTIResult2.tsx";
import { colors } from "@mui/material";


function Home() {
  const quizarray= ["よく新しい友人を作る", "結末を自由に解釈できる本や映画が好きだ", "怒りを抑えきれないときがある", "予定表やリストなどの整理、管理ツール使うのが好き"];
  /一つの項目の点数を累計する/ 
  const[scores,setScores]=useState([0,0,0,0]);
  const handleScoreChange=(index: number,value: number) => {
       const newScores: number[] = [...scores];
       newScores[index]=value;
       setScores(newScores);
  };
  const calculateTotalScore =() => {
       return scores.reduce((acc,cur) => acc+cur,0);
  };
  const calculateMBTIPersonalityType = (scores) => {
    const [I, N, F, J] = scores;
    let personalityType = "";
    if (I > 50) personalityType += "I";
    else personalityType += "E";
    if (N > 50) personalityType += "N";
    else personalityType += "S";
    if (F > 50) personalityType += "F";
    else personalityType += "T";
    if (J > 50) personalityType += "J";
    else personalityType += "P";

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
        <><MBTIQuestion quiz={quiz} setScores={setScores}></MBTIQuestion><hr /></>
      ))}

      <button><Link to="/MBTIResult1" onClick={calculateTotalScore}>診断結果を見る</Link></button>
      <br />
      <br />
      {/* <Routes>
        <Route path="/MBTIResult1" element={<Result1 />}></Route> 
      </Routes> */}
    </div>

  );
}

export default Home;