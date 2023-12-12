import React from "react";
import CardDetail from "../../components/CardDetail";
import { Helmet } from "react-helmet-async";

function DetailPage() {
  return (
    <>
      <Helmet>
        <title>Card Detail</title>
      </Helmet>
      <CardDetail />
    </>
  );
}

export default DetailPage;
