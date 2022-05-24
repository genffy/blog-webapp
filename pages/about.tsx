import Blocks from "../components/blocks";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";

const Page = ({ article }: any) => {
  const imageUrl = getStrapiMedia(article.cover.file);
  return (
    <div>
      <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
      >
        <h1>{article.title}</h1>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <Blocks blocks={article.blocks}></Blocks>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }: any) {
  const pageRes = await fetchAPI(`/about`, {
    populate: {
      title: "*",
      blocks: "*",
      cover: {
        populate: "*",
      },
    },
  });
  return {
    props: { article: pageRes.data.attributes },
    revalidate: 1,
  };
}

export default Page;