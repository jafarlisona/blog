import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
function CardDetail() {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts/" + id)
      .then((res) => res.json())
      .then((data) => setDetails(data.blog));
  }, []);
  setTimeout(() => {
    setIsloading(false);
  }, 1000);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="detail">
      <div className="detail-image">
        <img src={details.photo_url} alt="" />
      </div>
      <div className="content">
        <h1>{details.title}</h1>
        <p>{details.content_text}</p>
        <div className="published">
          <span className="author">{details.category}</span>
          <span className="date">{details.created_at}</span>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
