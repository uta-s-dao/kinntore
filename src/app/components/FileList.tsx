// app/components/FileList.js
import styles from "../page.module.css";
import Image from "next/image";
import { getFileNames } from "../lib/getFileNames";

export const FileList = async () => {
  // サーバー側でファイル名を取得
  const files = getFileNames("public/images");

  return (
    <div className={styles.postList1}>
      <ul>
        {files.map((file) => (
          <div key={file} className={styles.postCard}>
            <Image
              alt='syasinn'
              src={file}
              width={400}
              height={300}
              className={styles.postImage}
            />

            <p>上腕二頭筋</p>
            <p>中山</p>
          </div>
        ))}
      </ul>
    </div>
  );
};
