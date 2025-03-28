import { useEffect, useState } from "react";
import NewsBanner from "../../components/newsBanner/NewsBanner";
import styles from "./main.module.css";
import { getNews } from "../../api/apiNews";
const Main = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await getNews();
        setNews(news);
        console.log(news.length);
        console.log(news.news[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);
  return (
    <main className={styles.main}>
      <h2>Main</h2>
      {console.log(news)}
      {news ? <NewsBanner item={news.news[0]} /> : null}
    </main>
  );
};
export default Main;
