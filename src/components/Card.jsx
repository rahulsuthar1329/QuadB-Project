import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../pages/Homepage/styles.module.css";

const Card = ({ data, title, imgUrl, rating, genres }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className={`card ${styles.card}`}
        style={{
          width: "15rem",
          boxShadow: "0 0 5px 0 rgba(0,0,0,0.4)",
        }}
      >
        <img
          className="card-img-top"
          src={imgUrl}
          alt="movie"
          height={"250px"}
        />
        <div className="card-body text-left p-3">
          <h5
            className="card-title"
            style={{ fontSize: "18px", fontWeight: 500 }}
          >
            {title}
          </h5>
          {/* Genres */}
          <p className="card-text m-0">
            {genres.map((item, index) => (
              <span key={index}>{item} </span>
            ))}
          </p>
          {/* Rating */}
          <p className="card-text">Rating : {rating} ⭐</p>
          <button
            onClick={() => navigate("/summary", { state: { data } })}
            className="btn btn-success btn-lg btn-block p-1"
            style={{ fontSize: "15px" }}
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
