import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async () => {
  const today = new Date().toISOString().split("T")[0]; // Форматируем дату в "YYYY-MM-DD"

  const cachedNews = JSON.parse(localStorage.getItem("newsData")); // Достаём сохранённые данные из localStorage

  if (cachedNews && cachedNews.date === today) {
    console.log("✅ Загружаю новости из localStorage");
    return cachedNews.data; // Если данные за сегодня есть, возвращаем их
  }

  try {
    console.log("🌐 Загружаю новости с сервера");
    const response = await axios.get(`${BASE_URL}top-headlines`, {
      // Проверь URL!
      params: {
        apiKey: API_KEY,
        country: "us", // Добавь нужные параметры, например, country или category
      },
    });

    const newsData = response.data;

    localStorage.setItem(
      "newsData",
      JSON.stringify({
        date: today,
        data: newsData,
      })
    ); // Сохраняем данные в localStorage с сегодняшней датой

    return newsData;
  } catch (error) {
    console.error(error);
  }
};
