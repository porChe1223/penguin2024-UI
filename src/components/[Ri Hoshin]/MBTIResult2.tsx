import React from "react";
import styles from "./MBTI.module.css";

export const Result2 = () => {
  return (
    <div className={styles.mbti}>
      <h1>診断結果</h1>
      <p>あなたの性格タイプは</p>
      <h2>○○</h2>
      <p>こんな性格でしょう</p>
      <p >あなたにおすすめのエンジニアは</p>
      <h2>○○</h2>
    </div>
  );
};