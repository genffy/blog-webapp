import React, { useContext } from "react";
import { GlobalContext } from "@/pages/_app";
import Menu from "./menu";
import Seo from "./seo";
import Link from "next/link";
import dynamic from 'next/dynamic'

const ThemeToggle = dynamic(() => import('./theme-toggle'), {
  ssr: false
})

const Nav = ({ seo }: any) => {
  const { siteName }: any = useContext(GlobalContext);
  return (
    <>
      {seo && <Seo seo={seo} />}
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a>{siteName}</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right"><Menu /></div>
        {/* <div>
          <ThemeToggle />
        </div> */}
      </nav>
    </>
  );
};

export default Nav;