import React, { useContext, useEffect, useState } from "react";
import Seo from "@/components/layout/seo";
import Menu from "@/components/layout/menu";
import NFTAvatar from '@/components/NFTAvatar'
import { fetchAPI } from "@/utils/api";
import utilStyles from '@/styles/utils.module.css'
import { GlobalContext } from "@/pages/_app";
import { getStrapiMedia } from "@/utils/media";
import SocialLinks from "@/components/social-links";

const Home = ({ homepage,  }: any) => {
  const attributes = homepage.attributes
  const { avatar, siteName }: any = useContext(GlobalContext);
  return (
    <>
      <Seo seo={attributes.seo} />
      <div className="uk-container">
        <div className={utilStyles.flexCenter} style={{paddingTop: '10%'}}>
          <div style={{display: 'flow-root', textAlign: "center"}}>
            <NFTAvatar image={getStrapiMedia(avatar)}></NFTAvatar>
            <h1 className={utilStyles.heading2Xl}>{siteName}</h1>
            <Menu />
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