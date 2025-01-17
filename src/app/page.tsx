// page.js
import styles from "./page.module.css";
import { Dumbbell } from "lucide-react";
import { FileList } from "./components/FileList";
export default function HomePage() {
  // モックデータ
  const posts = [
    {
      id: 1,
      image: "/images/upload_4ad6ac3c217b3ea83a3c60260d0a4be2.jpg", // 実際の画像パスに置き換えてください
      title: "上腕二頭筋のトレーニング",
      time: "2時間前",
      user: "uta-s-dao",
    },
    {
      id: 2,
      image: "/images/upload_4ad6ac3c217b3ea83a3c60260d0a4be2.jpg", // 実際の画像パスに置き換えてください
      title: "体つき変わってきた",
      time: "3時間前",
      user: "nakayama-k",
    },
    {
      id: 3,
      image: "/images/upload_4ad6ac3c217b3ea83a3c60260d0a4be2.jpg", // 実際の画像パスに置き換えてください
      title: "体つき変わってきた",
      time: "１５時間前",
      user: "nakayama-k",
    },
    {
      id: 4,
      image: "/images/upload_4ad6ac3c217b3ea83a3c60260d0a4be2.jpg", // 実際の画像パスに置き換えてください
      title: "体つき変わってきた",
      time: "1日前",
      user: "nakayama-k",
    },
    {
      id: 5,
      image: "/images/upload_4ad6ac3c217b3ea83a3c60260d0a4be2.jpg", // 実際の画像パスに置き換えてください
      title: "体つき変わってきた",
      time: "1日前",
      user: "nakayama-k",
    },
    {
      id: 6,
      image: "/images/upload_4ad6ac3c217b3ea83a3c60260d0a4be2.jpg", // 実際の画像パスに置き換えてください
      title: "体つき変わってきた",
      time: "1日前",
      user: "nakayama-k",
    },
    {
      id: 7,
      image: "/images/upload_4ad6ac3c217b3ea83a3c60260d0a4be2.jpg", // 実際の画像パスに置き換えてください
      title: "体つき変わってきた",
      time: "1日前",
      user: "nakayama-k",
    },
    {
      id: 8,
      image: "/images/upload_4ad6ac3c217b3ea83a3c60260d0a4be2.jpg", // 実際の画像パスに置き換えてください
      title: "体つき変わってきた",
      time: "1日前",
      user: "nakayama-k",
    },
    {
      id: 9,
      image: "/images/upload_4ad6ac3c217b3ea83a3c60260d0a4be2.jpg", // 実際の画像パスに置き換えてください
      title: "体つき変わってきた",
      time: "1日前",
      user: "nakayama-k",
    },
    // 他の投稿も追加可能
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className='flex items-center'>
          <Dumbbell
            style={{ fontSize: "30px", lineHeight: "1" }}
            className='text-indigo-600'
          />
          <span
            className='ml-2 font-bold text-gray-900'
            style={{ fontSize: "29px" }}
          >
            FitShare
          </span>
        </div>
      </header>
      <nav className={styles.nav}>
        <a href='/journal' className={styles.navLink}>
          Journal
        </a>
        <a href='./post' className={styles.navLink}>
          Post
        </a>
        <a href='./post1'>post1</a>
      </nav>
      <div className={styles.postList1}>
        <FileList></FileList>
      </div>

      {/* <div className={styles.postList}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <img
              src={post.image}
              alt={post.title}
              className={styles.postImage}
            />
            <div className={styles.postContent}>
              <p className={styles.postTitle}>{post.title}</p>
              <p className={styles.postTime}>{post.time}</p>
              <div className={styles.userInfo}>
                <span className={styles.userName}>{post.user}</span>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
