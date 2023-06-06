import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from "./styles.module.css";
import axios from "axios";

const Homepage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.homepage}>
      <h1 className="text-center">Movie-List</h1>
      <div className={styles.cards}>
        {data &&
          data.map((item, index) => (
            <Card
              key={index}
              data={item}
              title={item.show.name}
              imgUrl={item.show.image.original}
              genres={item.show.genres}
              rating={item.show.rating.average}
            />
          ))}
      </div>
    </div>
  );
};

export default Homepage;
