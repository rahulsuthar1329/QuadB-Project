import React from "react";
import styles from "./styles.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const Summary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state.data;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={data?.show?.image?.original} alt="movie" height="50%" />
        <div className={styles.details}>
          <h4>Name : {data?.show?.name}</h4>
          <div style={{ display: "flex", gap: "20px" }}>
            {data?.show?.genres?.map((item, index) => (
              <h6 key={index}>{item} </h6>
            ))}
          </div>
          <div>Rating : {data?.show?.rating?.average}⭐</div>
          <button
            className="btn btn-success btn-lg btn-block py-1 mt-3"
            onClick={() =>
              navigate("/book-ticket", { state: { movie: data?.show?.name } })
            }
          >
            Book Ticket
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.summary}>
          <h5>Summary</h5>
          <p>{data?.show?.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
