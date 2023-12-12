import React from "react";
import { Link, useParams } from "react-router-dom";

function Card({ key, image, title, description, date, idd }) {
  return (
    <div className="card" key={key}>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{date}</span>
        <button>
          <Link to={"/detail/" + idd}>Read More</Link>
        </button>
      </div>
    </div>
  );
}

export default Card;
