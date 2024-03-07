import React from "react";
import styles from "./MBTI.module.css";
import calculateMBTIPersonalityType from "./Home.tsx"

export const Result1 = ({ personalityType }) => {
  let anotherName = "";
  let explainType = "";
  let recommendedEngineer = "";

  const mbtiType = calculateMBTIPersonalityType(personalityType);

  switch (mbtiType) {
}

  switch (personalityType) {
    case "ISTJ":
      anotherName = "管理者";
      explainType = "あなたは実用的で事実に基づいた思考の持ち主です。その信頼性は紛れもなく本物です。";
      recommendedEngineer = "Webフロントエンドエンジニア";
      break;
    case "ISFJ":
      anotherName = "擁護者";
      explainType = "あなたは非常に献身的で心の温かい擁護者。いつでも大切な人を守る準備ができています。";
      recommendedEngineer = "Webバックエンドエンジニア";
      break;
    case "INFJ":
      anotherName = "提唱者";
      explainType = "あなたは物静かで神秘的ですが、人々を非常に勇気づける飽くなき理想主義者でもあります。";
      recommendedEngineer = "フルスタックエンジニア";
      break;
    case "INTJ":
      anotherName = "";
      explainType = "";
      recommendedEngineer = "データベースエンジニア";
      break;
    case "ISTP":
      anotherName = "探検家";
      explainType = "あなたは大胆で実践的な思考を持つ実験者。あらゆる道具を使いこなします。";
      recommendedEngineer = "モバイルアプリケーションエンジニア（iOS/Android）";
      break;
    case "ISFP":
      anotherName = "冒険家";
      explainType = "あなたは柔軟性と魅力がある芸術家で、常に進んで物事を探索し経験しようとしています。";
      recommendedEngineer = "クラウドエンジニア（AWS/Azure/GCPなど）";
      break;
    case "INFP":
      anotherName = "仲介者";
      explainType = "詩人肌で親切な利他主義者のあなたは、良い物事のためならいつでも懸命に手を差し伸べます。";
      recommendedEngineer = "ソフトウェアアーキテクト";
      break;
    case "INTP":
      anotherName = "論理学者";
      explainType = "あなたは貪欲な知識欲を持つ、革新的な発明家であるでしょう。";
      recommendedEngineer = "セキュリティエンジニア";
      break;
    case "ESTP":
      anotherName = "起業家";
      explainType = "賢くてエネルギッシュで、非常に鋭い知覚の持ち主のあなた。危険と隣り合わせの人生を心から楽しんでいます。";
      recommendedEngineer = "データ（データ処理、データ分析）エンジニア";
      break;
    case "ESFP":
      anotherName = "エンターテイナー";
      explainType = "あなたは自発性がありエネルギッシュで熱心なエンターテイナー。周りが退屈することは決してありません。";
      recommendedEngineer = "ブロックチェーンエンジニア";
      break;
    case "ENFP":
      anotherName = "運動家";
      explainType = "あなたは情熱的で独創力があり、かつ社交的な自由人。常に笑いほほ笑みの種を見つけられるでしょう。";
      recommendedEngineer = "AI/機械学習エンジニア";
      break;
    case "ENTP":
      anotherName = "討論者";
      explainType = "あなたは賢くて好奇心旺盛な思考家です。知的挑戦には必ず受けて立ちます。";
      recommendedEngineer = "ネットワークエンジニア";
      break;
    case "ESTJ":
      anotherName = "幹部";
      explainType = "あなたは優秀な管理者です。物事や人々を管理する能力にかけては、右に出る者はいません。";
      recommendedEngineer = "IoTエンジニア";
      break;
    case "ESFJ":
      anotherName = "領事";
      explainType = "あなたは非常に思いやりがあり社交的で、人気があります。常に熱心に人々に手を差し伸べています。";
      recommendedEngineer = "ゲーム開発エンジニア";
      break;
    case "ENFJ":
      anotherName = "主人公";
      explainType = "カリスマ性があり、人々を励ますリーダーのあなたは、聞く人を魅了します。";
      recommendedEngineer = "組み込みエンジニア";
      break;
    case "ENTJ":
      anotherName = "指揮官";
      explainType = "あなたは大胆で想像力豊か、かつ強い意志を持つ指導者です。常に道を見つけるか、道を切り開きます。";
      recommendedEngineer = "QAエンジニア";
      break;
    default:
      anotherName = "未入力";
      explainType = "あなたは質問への回答が不十分です。もう一度質問に回答してください";
      recommendedEngineer = "未入力";
      break;
  }

  return (
    <div className={styles.mbti}>
      <h1>診断結果</h1>
      <p>あなたの性格タイプは</p>
      <h2>{anotherName}</h2>
      <h2>{personalityType}</h2>
      <p>{explainType}</p>
      <p>あなたにおすすめのエンジニアは</p>
      <h2>{recommendedEngineer}</h2>
      <p>タイトルをクリックするともう一度診断できます。</p>
    </div>
  );
};