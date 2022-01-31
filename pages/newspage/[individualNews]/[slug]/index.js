import React from "react";
import Layout from "../../../../components/Layout";
import NewsPage from "../../../../components/News/NewsPage";
// import Layout from "../../components/Layout";
// import NewsPage from "../../components/News/NewsPage";

const index = () => {
  console.log("newspage");
  return (
    <Layout>
      <NewsPage />
    </Layout>
  );
};

export default index;
