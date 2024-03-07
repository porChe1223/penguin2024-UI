import React from "react";
import styles from "./SelfIntroduction.module.css";

export const SelfIntroduction = () => {
  return (
    <div className={styles.selfIntroduction}>
      <h2>自己紹介</h2>
      <p>李方信</p>
      <p>九州工業大学2年</p>
      <p >趣味：カラオケ🎤</p>
      <hr></hr>

      {/* 以下問題 */}
      <p>~だと思う。</p>
      <div style={{ display: 'flex', flexDirection: 'row' , content: 'center' }}>
        <div className={styles.buttons}><button>全く思わない</button></div>
        <div className={styles.buttons}><button>思わない</button></div>
        <div className={styles.buttons}><button>良くわからない</button></div>
        <div className={styles.buttons}><button>思う</button></div>
        <div className={styles.buttons}><button>すごく思う</button></div>
      </div>
    </div>
  );
};
