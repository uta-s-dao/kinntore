"use client";
import React, { useState } from "react";
import { Dumbbell, Trophy, Rocket } from "lucide-react";
import styles from "./record.module.css";

const Meigenn = () => {
  const [result, setResult] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOmikuji = () => {
    setIsAnimating(true);
    const omikuji = Math.floor(Math.random() * 10);

    if (omikuji === 0) {
      setResult(
        "筋肉は一日にして成らず。痛みと闘い、限界を超えた先に成功が待っている。byアーノルド・シュワルツェネッガー"
      );
    } else if (omikuji === 1) {
      setResult(
        "限界は幻想だ。それを壊すとき、本当の自分が見えてくる。\nbyブルース・リー"
      );
    } else if (omikuji === 2) {
      setResult(
        "私が成し遂げた成功は、全て失敗と挑戦の積み重ねの上にある。\nbyマイケル・ジョーダン"
      );
    } else if (omikuji === 3) {
      setResult(
        "成功にはショートカットはない。毎日少しずつ積み上げていくしかないんだ。\nbyダウェイン・ジョンソン"
      );
    } else if (omikuji === 4) {
      setResult(
        "痛みなくして、成長はない。苦しみこそが私たちを強くする。\nbyマーロン・ブランド"
      );
    } else if (omikuji === 5) {
      setResult(
        "私がコントロールできる唯一のことは、自分の努力だ。限界まで挑戦し、結果を信じる。\nbyウィル・スミス"
      );
    } else if (omikuji === 6) {
      setResult(
        "できると思えばできる。できないと思えばできない。それが真実だ。\nbyヘンリー・フォード"
      );
    } else if (omikuji === 7) {
      setResult("勝者は諦めなかった敗者だ。\nbyヴィンス・ロンバルディ");
    } else if (omikuji === 8) {
      setResult(
        "人生はどれだけ強く殴れるかじゃない。どれだけ打たれても立ち上がれるかだ。\nbyロッキー・バルボア"
      );
    } else {
      setResult(
        "私は回数を数え始めるのは、痛くなったときからだ。そこからが本当のトレーニングだから。\nbyモハメド・アリ"
      );
    }

    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <button onClick={handleOmikuji} className={styles.quoteButton}>
            今日の名言
          </button>

          {result && (
            <div
              className={`${styles.quoteResult} ${
                isAnimating ? styles.fadeIn : ""
              }`}
            >
              <p className={styles.quoteText}>{result}</p>
            </div>
          )}

          <div className={styles.footer}>
            <div className={styles.trainingRecord}>
              <Dumbbell className={styles.icon} />
              <span className={styles.recordText}>uta-s-dao</span>
            </div>
            <div className={styles.trophyContainer}>
              <Trophy className={styles.trophyIcon} />
              <span className={styles.trophyCount}>30</span>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.trainingRecord}>
              <Dumbbell className={styles.icon} />
              <span className={styles.recordText}>中山</span>
            </div>
            <div className={styles.trophyContainer}>
              <Trophy className={styles.trophyIcon} />
              <span className={styles.trophyCount}>24</span>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.trainingRecord}>
              <Dumbbell className={styles.icon} />
              <span className={styles.recordText}>ロングスリーパー</span>
            </div>
            <div className={styles.trophyContainer}>
              <Trophy className={styles.trophyIcon} />
              <span className={styles.trophyCount}>21</span>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.trainingRecord}>
              <Dumbbell className={styles.icon} />
              <span className={styles.recordText}>JIN</span>
            </div>
            <div className={styles.trophyContainer}>
              <Trophy className={styles.trophyIcon} />
              <span className={styles.trophyCount}>15</span>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.trainingRecord}>
              <Dumbbell className={styles.icon} />
              <span className={styles.recordText}>さびまる</span>
            </div>
            <div className={styles.trophyContainer}>
              <Rocket className={styles.rocketIcon} />
              <span className={styles.trophyCount}>Fight</span>
            </div>
            <div className={styles.trophyContainer}>
              <Trophy className={styles.trophyIcon} />
              <span className={styles.trophyCount}>0</span>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.trainingRecord}>
              <Dumbbell className={styles.icon} />
              <span className={styles.recordText}>ゆうしん</span>
            </div>
            <div className={styles.trophyContainer}>
              <Rocket className={styles.rocketIcon} />
              <span className={styles.trophyCount}>Fight</span>
            </div>
            <div className={styles.trophyContainer}>
              <Trophy className={styles.trophyIcon} />
              <span className={styles.trophyCount}>0</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Toukou() {
  return <Meigenn />;
}
