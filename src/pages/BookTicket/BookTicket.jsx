import React, { useState } from "react";
import styles from "./styles.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const BookTicket = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [seats, setSeats] = useState("");
  const [date, setDate] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (setState) => (event) => {
    setState(event.target.value);
  };

  const handleOnClick = () => {
    if (!username || !email || !seats || !date || !location?.state?.movie)
      alert("Fill all the fields!");
    else {
      const user = {
        movie: location?.state?.movie,
        username,
        email,
        seats,
        date,
      };
      localStorage.setItem("userDetails", JSON.stringify(user));
      alert("User Details Saved Successfully!");
      navigate("/");
    }
  };

  return (
    <div className={styles.container}>
      <form style={{ width: "400px" }}>
        <h4>Book Ticket Online</h4>
        <div className="form-group">
          <h5>Movie : {location?.state?.movie}</h5>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
            value={username}
            onChange={handleChange(setUsername)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={handleChange(setEmail)}
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={handleChange(setDate)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="seats"
            placeholder="No. of Seats"
            value={seats}
            onChange={handleChange(setSeats)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
          onClick={handleOnClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookTicket;
