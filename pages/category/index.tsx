import React from "react";
import Layout from "@/components/layout";
import { fetchAPI } from "@/utils/api";
import Link from "next/link";

const Category = ({ categories }: any) => {
  return (
    <Layout>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center uk-grid-match" data-uk-grid>
            {categories.map((category: any) => {
                const attributes = category.attributes
                return (
                  <div key={category.id} >
                    <div className="uk-card uk-card-default uk-card-body">
                      <Link href={`/category/${attributes.slug}`}>
                        <a className="uk-link-reset">
                          <h3 className="uk-card-title">{attributes.name}</h3>
                          <p>{attributes.description}</p>
                        </a>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [categoriesRes] = await Promise.all([
    fetchAPI("/categories", { populate: "*" }),
  ]);

  return {
    props: {
      categories: categoriesRes.data,
    },
    revalidate: 1,
  };
}

export default Category;