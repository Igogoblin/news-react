import { formatDate } from "../../helpers/formatDate";
import Image from "../image/Image";
import styles from "./newsBanner.module.css";

const NewsBanner = ({ item }) => {
  console.log(item);
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatDate(item.published)} by {item.author}
      </p>
    </div>
  );
};
export default NewsBanner;
