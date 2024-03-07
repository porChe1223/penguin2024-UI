import "./App.css";
import React, {useState} from "react";
import Home from "./components/[Ri Hoshin]/Home.tsx"

import { Routes ,Route ,Link} from 'react-router-dom';
import {MBTIQuestion} from './components/[Ri Hoshin]/MBTI.tsx';
import { Result1 } from "./components/[Ri Hoshin]/MBTIResult1.tsx";
import { Result2 } from "./components/[Ri Hoshin]/MBTIResult2.tsx";

let formData = new FormData();
function App() {
  const quizarray= ["よく新しい友人を作る", "自分はとても感傷的だ", "怒りを抑えきれないときがある", "結末を自由に解釈できる本や映画が好きだ"];
  /一つの項目の点数を累計する/ 
  const[scores,setScores]=useState([0,0,0,0,0]);
  const handleScoreChange=(index: number,value: number) => {
       const newScores: number[] = [...scores];
       newScores[index]=value;
       setScores(newScores);
       formData.set(index.toString(),value.toString());
  };
  const calculateTotalScore =() => {
       return scores.reduce((acc,cur) => acc+cur,0);
  };
  
  return (
    <div className={"appmbti"}>
        <Link className={"TitleButton"}to="/Home" onClick={calculateTotalScore}>MBTI診断</Link> 
      <Routes>
        <Route path="/Home" element={<Home />}></Route> 
        <Route path="/MBTIResult1" element={<Result1 />}></Route> 
      </Routes>
    </div>

  );
}

export default App;