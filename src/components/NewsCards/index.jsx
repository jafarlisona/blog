import React, { useEffect, useState } from "react";
import Card from "../Card/index";
import Loader from "../Loader";

function NewsCards() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts")
      .then((res) => res.json())
      .then((data) => setCards(data.blogs));
  }, []);
  setTimeout(() => {
    setIsloading(false);
  }, 2000);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="cards">
      {console.log(cards)}
      {cards.map((x) => (
        <Card
          key={x.id}
          image={x.photo_url}
          title={x.title}
          description={x.description}
          date={x.created_at}
          idd={x.id}
        />
      ))}
    </div>
  );
}

export default NewsCards;
