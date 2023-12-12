import React from "react";
import NewsCards from "../../components/NewsCards";
import { Helmet } from "react-helmet-async";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <NewsCards />
    </>
  );
}

export default HomePage;
