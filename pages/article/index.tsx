import React from "react";
import Articles from "@/components/articles";
import Layout from "@/components/layout";
import { fetchAPI } from "@/utils/api";

const Home = ({ articles }: any) => {
  return (
    <Layout>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["cover", "category"] }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
    },
    revalidate: 1,
  };
}

export default Home;