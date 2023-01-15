import React, { useContext, useEffect, useState } from "react";
import Seo from "@/components/layout/seo";
import Menu from "@/components/layout/menu";
import NFTAvatar from '@/components/NFTAvatar'
import { fetchAPI } from "@/utils/api";
import utilStyles from '@/styles/utils.module.css'
import { GlobalContext } from "@/pages/_app";
import { getStrapiMedia } from "@/utils/media";
import SocialLinks from "@/components/social-links";

const Home = ({ homepage, }: any) => {
  const attributes = homepage.attributes
  const { avatar, siteName }: any = useContext(GlobalContext);
  const [data, setData] = useState(null as any)
  useEffect(() => {
    fetch('https://animechan.vercel.app/api/random')
      .then(response => response.json())
      .then(quote => {
        setData(quote)
      })
  }, [])
  return (
    <>
      <Seo seo={attributes.seo} />
      <div className="uk-container">
        <div className={utilStyles.flexCenter} style={{ paddingTop: '10%' }}>
          <div style={{ display: 'flow-root', textAlign: "center" }}>
            {avatar && <NFTAvatar image={getStrapiMedia(avatar)}></NFTAvatar>}
            <h1 className={utilStyles.heading2Xl}>{siteName}</h1>
            <Menu />
            {
              !!data && (
                <div className="uk-card uk-card-default uk-card-small">
                  <div className="uk-text-center@s uk-card-body">
                    <p><span data-uk-icon="icon: quote-right;ratio: 2" style={{ transform: 'rotate(180deg)' }}></span>{data.quote}</p>
                    <div className="uk-text-right">{data.character}</div>
                  </div>
                </div>
              )
            }
            <hr className="uk-divider-small"></hr>
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const homepageRes = await fetchAPI("/homepage", {
    populate: {
      hero: "*",
      seo: { populate: "*" },
    },
  })
  return {
    props: {
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;