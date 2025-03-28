import styles from "./newsList.module.css";
const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((item) => {
        return (
          <li key={item.id} className={styles.item}>
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};

export default NewsList;
