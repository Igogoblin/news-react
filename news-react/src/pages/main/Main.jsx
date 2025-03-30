import { useEffect, useState } from "react";
import { getNews } from "../../services/getNews";
import NewsBanner from "../NewsBanner";
import styles from "./Main.module.css";

const Main = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedNews = await getNews();
        setNews(fetchedNews);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      <h2>Main</h2>
      {news ? <NewsBanner news={news} /> : <p>Загрузка новостей...</p>}
    </main>
  );
};

export default Main;
