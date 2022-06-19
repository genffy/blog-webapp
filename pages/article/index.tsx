import Articles from "@/components/articles";
import Layout from "@/components/layout";
import { fetchAPI } from "@/utils/api";

const Home = ({ articles }: any) => {
  const seo = {
    metaTitle: '文章',
    metaDescription: `文章列表`,
  };
  return (
    <Layout seo={seo}>
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