"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import InputImage from "../components/InputImage";
import { useGetImageUrl } from "../../hook/useGetImageUrl";
import styles from "./page.module.css";

// 画像のID,ファイルのサイズ
const IMAGE_ID = "imageId";
const FIELD_SIZE = 210;

export default function Post() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  // 画像のURLを取得
  const { imageUrl } = useGetImageUrl({ file: imageFile });

  // ファイルの設定
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget?.files && e.currentTarget.files[0]) {
      const targetFile = e.currentTarget.files[0];
      setImageFile(targetFile);
    }
  };

  // 画像のキャンセルの設定
  const handleClickCancelButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setImageFile(null);
    // <input />タグの値をリセット
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!imageFile) {
      alert("画像を選択してください");
      return;
    }
    try {
      const formData = new FormData();
      const file = imageFile;
      const blob = file.slice(0, file.size, file.type);
      // ファイル名をユニークにする
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const newFile = new File([blob], uniqueSuffix + "-" + file.name, {
        type: file.type,
      });
      formData.append("file", newFile);
      const response = await fetch("/api/images/upload", {
        method: "POST",
        body: formData,
      });
      if (response.status === 200) {
        console.log("画像がアップロードされました");
      } else {
        console.log("アップロードに失敗しました");
        throw new Error("アップロードに失敗しました");
      }
      alert("登録が完了しました");
    } catch (error) {
      console.error("画像のファイル登録が失敗しました。", error);
    }
  };

  const clickHandler = () => {
    alert("画像がアップロードされました");
  };

  return (
    <div className={styles.uploaderContainer}>
      <h2 className={styles.uploaderHeader}>画像アップローダー</h2>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.uploadFlex}>
          <label htmlFor={IMAGE_ID} className={styles.uploadLabel}>
            {imageUrl && imageFile ? (
              <Image
                src={imageUrl}
                alt='アップロード画像'
                width={FIELD_SIZE}
                height={FIELD_SIZE}
                className={styles.uploadImage}
              />
            ) : (
              "+ 画像をアップロード"
            )}
            {/* ダミーインプット: 見えない */}
            <InputImage
              ref={fileInputRef}
              id={IMAGE_ID}
              onChange={handleFileChange}
            />
          </label>

          <div style={{ height: 20 }} />
          {/* キャンセルボタン */}
          <button
            className={styles.cancelButton}
            onClick={(e) => handleClickCancelButton(e)}
          >
            キャンセル
          </button>
        </div>

        <button
          type='submit'
          className={styles.submitButton}
          onClick={clickHandler}
        >
          画像をアップロードする
        </button>
      </form>
    </div>
  );
}
